const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// One post can belone to only one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// A post can have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// One comment can only belone to one post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };