-- this is the schema file that defines the database and tables for the project
-- run this file to make the db, tables, and add dummy data for testing

-- run script to create database and tables
-- psql -f db/schema.sql

-- drop database if it exists
DROP DATABASE IF EXISTS crypto_db;

-- create database
CREATE DATABASE crypto_db;

-- go into database
-- commented out for heroku
\c crypto_db

-- drop tables if they exist
-- table for user data
DROP TABLE IF EXISTS users CASCADE;
-- table for coin data
DROP TABLE IF EXISTS coins CASCADE;
-- table for comments
DROP TABLE IF EXISTS comments CASCADE;
-- join table for user/coin data for joining
DROP TABLE IF EXISTS user_coin CASCADE;
-- table for tags (postMVP)

-- create table for users
-- CREATE TABLE users (
-- id SERIAL PRIMARY KEY NOT NULL,
-- -- fname TEXT,
-- -- lname TEXT,
-- username TEXT UNIQUE,
-- password_hash TEXT,
-- trader BOOLEAN,
-- -- miner BOOLEAN
-- );

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  firstname VARCHAR(64),
  lastname VARCHAR(64),
  zip VARCHAR(10),
  avatar TEXT,
  date_created TIMESTAMP NOT NULL DEFAULT NOW(),
  trader BOOLEAN
);

-- create table for coins
CREATE TABLE coins (
  id INT PRIMARY KEY NOT NULL,
  coin_name TEXT,
  coin_symbol TEXT
);

-- create join table for users and coins, with amount of coin
CREATE TABLE user_coin (
  user_id INT REFERENCES users(id),
  coin_id INT REFERENCES coins(id),
  PRIMARY KEY (user_id, coin_id),
  coin_amount DECIMAL(10,5)
);

-- create table for comments
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  coin_id INT REFERENCES coins(id),
  content TEXT
);