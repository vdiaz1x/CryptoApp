import { create } from "domain";

// this is the file for the models for the comment routes

// exporting all the models for comments as a function
module.exports = function commentModel(db) {
  return {
    // get all comments
    // takes user id and coin id as params
    getAllComments(userID, coinID) {
      return db.any(`
      SELECT * FROM comments
      WHERE user_id = $1 AND coin_id = $2
      `, [userID, coinID]);
    },
    // gets one comment
    // takes comment id as param
    getOneComment(commentID) {
      return db.one(`
      SELECT * FROM comments
      WHERE id = $1
      `, commentID)
    },
    // this posts one comment
    // this takes the info passed from the form/fetch and inserts it into the db
    // create(commentData) {
    //   return db.one(`
    //   INSERT INTO comments (user_id, coin_id, content)
    //   VALUES ($/user_id/, $/coin_id/, $/content/)
    //   RETURNING *
    //   `, commentData)
    // },
  };
};

