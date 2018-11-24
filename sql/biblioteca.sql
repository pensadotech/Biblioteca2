-- remove databases if exists
DROP DATABASE IF EXISTS biblioteca_db;
-- create the table
CREATE DATABASE biblioteca_db;

-- drop tables
use biblioteca_db;
drop table cartitems;
drop table carts;

use biblioteca_db;
drop table books;
drop table sections;

-- users
use biblioteca_db;
drop table users;

-- add data
use biblioteca_db;
INSERT INTO users (username,password,email,createdAt,updatedAt)
VALUE("admin","admin","admin@library.com",now(),now());

-- add data
USE biblioteca_db;
INSERT INTO sections (location,description,createdAt,updatedAt)
VALUE("1A","Children Books",now(),now()),
("1B","Children Magazine",now(),now()),
("2A","Biology",now(),now()),
("3A","Physics",now(),now());

USE biblioteca_db;
INSERT INTO books (title,author,year,genre,ISBN,summary,stockQty,totalUse,createdAt,updatedAt,sectionId)
VALUE("Book-1","auhtor-1",2018,"genre-1","tre123","book sumarry 1",10,4,now(),now(),1),
("Book-2","auhtor-2",2018,"genre-1","rew123","book sumarry 1",10,4,now(),now(),1),
("Book-3","auhtor-3",2018,"genre-2","abc123","book sumarry 1",10,4,now(),now(),3),
("Book-4","auhtor-4",2018,"genre-2","xwy123","book sumarry 1",10,4,now(),now(),4);

