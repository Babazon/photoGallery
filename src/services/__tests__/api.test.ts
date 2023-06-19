import axios from 'axios';
import {getImages, addComment, editComment, deleteComment, api} from '../api';
import {API_URL} from '../../constants/constants';
import {
  getImagesMock,
  addCommentMock,
  editCommentMock,
  deleteCommentMock,
} from '../mockApi/mockApi';

jest.mock('axios');

describe('API tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch images correctly', async () => {
    const images = [
      {id: 1, url: 'image1.jpg'},
      {id: 2, url: 'image2.jpg'},
    ];
    const response = {data: images};

    (axios.get as jest.Mock).mockResolvedValue(response);

    const result = await getImages(1);

    expect(axios.get).toHaveBeenCalledWith(
      `${API_URL}/images?_start=0&_end=10`,
    );
    expect(result).toEqual(images);
  });

  it('should add a comment correctly', async () => {
    const imageId = 1;
    const comment = 'Great image';
    const commentDto = {id: 1, comment, date: new Date().toISOString()};
    const response = {data: commentDto};

    (axios.post as jest.Mock).mockResolvedValue(response);

    const result = await addComment(imageId, comment);

    expect(axios.post).toHaveBeenCalledWith(`${API_URL}/images/1/comments`, {
      comment,
      date: expect.any(String),
    });
    expect(result).toEqual(commentDto);
  });

  it('should edit a comment correctly', async () => {
    const imageId = 1;
    const commentId = 1;
    const updatedComment = 'Updated comment';
    const commentDto = {
      id: 1,
      comment: updatedComment,
      date: new Date().toISOString(),
    };
    const response = {data: commentDto};

    (axios.patch as jest.Mock).mockResolvedValue(response);

    const result = await editComment(imageId, commentId, updatedComment);

    expect(axios.patch).toHaveBeenCalledWith(`${API_URL}/images/1/comments/1`, {
      comment: updatedComment,
    });
    expect(result).toEqual(commentDto);
  });

  it('should delete a comment correctly', async () => {
    const imageId = 1;
    const commentId = 1;

    await deleteComment(imageId, commentId);

    expect(axios.delete).toHaveBeenCalledWith(`${API_URL}/images/1/comments/1`);
  });
});

describe('api', () => {
  it('should use mock functions in development mode', () => {
    const mockApi = {
      getImages: getImagesMock,
      addComment: addCommentMock,
      editComment: editCommentMock,
      deleteComment: deleteCommentMock,
    };

    expect(JSON.stringify(api)).toEqual(JSON.stringify(mockApi));
  });

  it('should use actual functions in production mode', () => {
    jest.resetModules();
    process.env.IS_DEV = 'false';
    const {api: actualApi} = require('../api');

    expect(JSON.stringify(api)).toEqual(JSON.stringify(actualApi));
  });
});
