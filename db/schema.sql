drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

CREATE TABLE burgers (
  
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);