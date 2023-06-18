import axios from 'axios';
import {getImages, addComment, editComment, deleteComment} from '../api';

jest.mock('axios');

describe('API tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch images correctly', async () => {
    const images = [
      {id: '1', url: 'image1.jpg'},
      {id: '2', url: 'image2.jpg'},
    ];
    const response = {data: images};

    (axios.get as jest.Mock).mockResolvedValue(response);

    const result = await getImages(1);

    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:3000/images?_start=0&_end=10',
    );
    expect(result).toEqual(images);
  });

  it('should add a comment correctly', async () => {
    const imageId = '1';
    const comment = 'Great image';
    const commentDto = {id: '1', comment, date: new Date().toISOString()};
    const response = {data: commentDto};

    (axios.post as jest.Mock).mockResolvedValue(response);

    const result = await addComment(imageId, comment);

    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/images/1/comments',
      {comment, date: expect.any(String)},
    );
    expect(result).toEqual(commentDto);
  });

  it('should edit a comment correctly', async () => {
    const imageId = '1';
    const commentId = '1';
    const updatedComment = 'Updated comment';
    const commentDto = {
      id: '1',
      comment: updatedComment,
      date: new Date().toISOString(),
    };
    const response = {data: commentDto};

    (axios.put as jest.Mock).mockResolvedValue(response);

    const result = await editComment(imageId, commentId, updatedComment);

    expect(axios.put).toHaveBeenCalledWith(
      'http://localhost:3000/images/1/comments/1',
      {comment: updatedComment},
    );
    expect(result).toEqual(commentDto);
  });

  it('should delete a comment correctly', async () => {
    const imageId = '1';
    const commentId = '1';

    await deleteComment(imageId, commentId);

    expect(axios.delete).toHaveBeenCalledWith(
      'http://localhost:3000/images/1/comments/1',
    );
  });
});
