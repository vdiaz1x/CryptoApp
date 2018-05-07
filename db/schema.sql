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
-- DROP TABLE IF EXISTS tags CASCADE;

-- create table for users
CREATE TABLE users (
  id              SERIAL PRIMARY KEY NOT NULL,
  -- fname           TEXT,
  -- lname           TEXT,
  username        TEXT UNIQUE,
  password_hash   TEXT,
  trader          BOOLEAN,
  -- miner           BOOLEAN
);

-- create table for coins
-- CREATE TABLE coins (
--   coin_id         INT,
--   coin_name       TEXT
-- )

-- create join table for users and coins, with amount of coin
CREATE TABLE user_coin (
  user_id         INT REFERENCES users(id),
  coin_id         INT,
  coin_name       TEXT,
  coin_symbol     TEXT,
  -- the coin amount
  coin_amount     DECIMAL(10,5)
);

-- create table for comments
CREATE TABLE comments (
  id              SERIAL PRIMARY KEY NOT NULL,
  user_id         INT REFERENCES users(id),
  coin_id         INT REFERENCES user_coin(coin_id),
  content         TEXT
);

-- create table for tags
-- tags are postMVP
-- CREATE TABLE tags (
--   id              SERIAL PRIMARY KEY NOT NULL,
--   tag_name        TEXT
-- )

-- this is the seed data for inputting test data

-- seed data for users
INSERT INTO users (
  username,
  password_hash,
  trader)
VALUES (
  'admin', '$2b$11$GliuyTM8gRqmRVAgstJe..xUQlCUx/O7NfRY9MiQfHcQ4FryclEuu',
  TRUE);

-- seed data for coin by user
INSERT INTO user_coin (
  user_id,
  coin_id,
  coin_name,
  coin_symbol,
  coin_amount)
VALUES (1,1,'Bitcoin', 'BTC',10000.00001)

-- seed data for comment on coin by user
INSERT INTO comments (
  user_id,
  coin_id,
  content)
VALUES (1,1,'this is a test comment for bitcoin');