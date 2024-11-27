// In a real application, this would interact with a database
const posts = new Map();

exports.getAllPosts = async () => {
  return Array.from(posts.values());
};

exports.getPostById = async (id) => {
  return posts.get(id);
};

exports.createPost = async (postData) => {
  const id = Date.now().toString();
  const post = { id, ...postData };
  posts.set(id, post);
  return post;
};

exports.updatePost = async (id, postData) => {
  const post = posts.get(id);
  if (!post) return null;
  
  const updatedPost = { ...post, ...postData };
  posts.set(id, updatedPost);
  return updatedPost;
};

exports.deletePost = async (id) => {
  posts.delete(id);
};