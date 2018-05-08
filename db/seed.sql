-- this is the seed file for inputting test data

-- seed data for users
-- INSERT INTO users (
-- username,
-- password_hash,
-- trader)
-- VALUES (
-- 'admin', '$2b$11$GliuyTM8gRqmRVAgstJe..xUQlCUx/O7NfRY9MiQfHcQ4FryclEuu',
-- TRUE);

-- seed data for coin by user
INSERT INTO user_coin (
user_id,
coin_id,
coin_amount)
VALUES (1,1,10000.00001);

-- seed data for comment on coin by user
INSERT INTO comments (
user_id,
coin_id,
content)
VALUES (1,1,'this is a test comment for bitcoin');