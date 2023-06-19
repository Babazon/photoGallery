import {
  getImagesMock,
  addCommentMock,
  editCommentMock,
  deleteCommentMock,
} from '../mockApi/mockApi';

describe('Mock API tests', () => {
  const imageId = 1;
  const commentId = 1;
  const comment = 'Test comment';
  const updatedComment = 'Updated comment';

  test('getImagesMock should return an array of images', async () => {
    const page = 1;
    const images = await getImagesMock(page);
    expect(images).toBeDefined();
    expect(Array.isArray(images)).toBe(true);
    expect(images.length).toBeGreaterThan(0);
  });

  test('addCommentMock should add a new comment to an image', async () => {
    const newComment = await addCommentMock(imageId, comment);
    expect(newComment).toBeDefined();
    expect(newComment?.id).toBeDefined();
    expect(newComment?.comment).toBe(comment);
    expect(newComment?.imageId).toBe(imageId);
  });

  test('editCommentMock should edit an existing comment', async () => {
    const editedComment = await editCommentMock(
      imageId,
      commentId,
      updatedComment,
    );
    expect(editedComment).toBeDefined();
    expect(editedComment?.comment).toBe(updatedComment);
  });

  test('deleteCommentMock should delete an existing comment', async () => {
    //
    const images = await getImagesMock(1);

    const image = images.find(img => img.id === imageId);
    expect(image).toBeDefined();

    const commentIndex = image?.comments.findIndex(c => c.id === commentId);
    expect(commentIndex).toBeGreaterThanOrEqual(0);

    await deleteCommentMock(imageId, commentId);

    const updatedImages = await getImagesMock(1);

    const updatedImage = updatedImages.find(img => img.id === imageId);
    expect(updatedImage).toBeDefined();

    const updatedCommentIndex = updatedImage?.comments.findIndex(
      c => c.id === commentId,
    );
    expect(updatedCommentIndex).toBe(-1);
  });
});
