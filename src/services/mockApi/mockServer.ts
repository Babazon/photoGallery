import {Request, Response} from 'express';
import jsonServer from 'json-server';
import {ImageDto, CommentDto, Maybe} from '../../constants/types';
import db from './db.json';

const server = jsonServer.create();
const router = jsonServer.router(db);
server.use(jsonServer.bodyParser);

server.get('/images', (req: Request, res: Response) => {
  const {page} = req.query;
  const startIndex = page ? (Number(page) - 1) * 10 : 0;
  const endIndex = startIndex + 10;
  const images = router.db.get('images').value().slice(startIndex, endIndex);
  const total = router.db.get('images').size().value();
  res.json({images, total});
});

server.post('/images/:id/comments', (req: Request, res: Response) => {
  const {id} = req.params;
  const {comment} = req.body;

  const image: ImageDto = router.db.get('images').find({id}).value();
  if (!image) {
    res.sendStatus(404);
    return;
  }

  const newComment: CommentDto = {
    id: Math.random().toString(),
    comment,
    date: new Date().toISOString(),
    imageId: id,
  };

  image.comments.push(newComment);

  res.json(newComment);
});

server.patch(
  '/images/:imageId/comments/:commentId',
  (req: Request, res: Response) => {
    const {imageId, commentId} = req.params;
    const {comment} = req.body;

    const image: ImageDto = router.db.get('images').find({id: imageId}).value();
    if (!image) {
      res.sendStatus(404);
      return;
    }

    const existingComment: Maybe<CommentDto> = image.comments.find(
      (c: CommentDto) => c.id === commentId,
    );

    if (!existingComment) {
      res.sendStatus(404);
      return;
    }

    existingComment.comment = comment;

    res.json(existingComment);
  },
);

server.delete(
  '/images/:imageId/comments/:commentId',
  (req: Request, res: Response) => {
    const {imageId, commentId} = req.params;

    const image: ImageDto = router.db.get('images').find({id: imageId}).value();
    console.log({image});

    if (!image) {
      res.sendStatus(404);
      return;
    }

    const commentIndex = image.comments.findIndex(
      (c: CommentDto) => c.id === commentId,
    );
    if (commentIndex === -1) {
      res.sendStatus(404);
      return;
    }

    image.comments.splice(commentIndex, 1);

    res.sendStatus(200);
  },
);

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
