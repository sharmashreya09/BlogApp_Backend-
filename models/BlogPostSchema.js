const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
  },
  user_mail: { type: String, required: true },
});

const Blogs = mongoose.model("PostBlogs", BlogPostSchema);
module.exports = Blogs;
