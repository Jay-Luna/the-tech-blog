-- DROP DATABASE
DROP DATABASE IF EXISTS tech_blog_db;

-- CREATE DATABASE
CREATE DATABASE tech_blog_db;

USE tech_blog_db;

-- USER TABLE ----
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30),
  password varchar(60)
);

-- POST TABLE ----
CREATE TABLE post (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(8000),
  content VARCHAR(8000),
  created_date DATE,
  user_id INT
);

-- COMMENT TABLE ----
CREATE TABLE comment (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comment VARCHAR(8000),
  created_date DATE,
  user_id INT,
  post_id INT
);

-- USER SEEDS -------
INSERT INTO user (name, email, password)
VALUE ("John Doe", "john.doe@email.com", "12345");
INSERT INTO user (name, email, password)
VALUE ("Jane Doe", "jane.doe@email.com", "12345");

-- POST SEEDS -----
INSERT INTO post (title, content, created_date, user_id)
VALUE ("First post", "first post content", '2024-01-01', 2);
INSERT INTO post (title, content, created_date, user_id)
VALUE ("Second post", "second post content", '2024-02-01', 1);

-- COMMENT SEEDS -----
INSERT INTO comment (comment, created_date, user_id, post_id)
VALUE ("first comment", '2024-01-01', 1, 1);
INSERT INTO comment (comment, created_date, user_id, post_id)
VALUE ("second comment", '2024-02-01', 2, 2);

-- SELECTING ALL DATA -- 
SELECT * FROM user;
SELECT * FROM post;
SELECT * FROM comment;