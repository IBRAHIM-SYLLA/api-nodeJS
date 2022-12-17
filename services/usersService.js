const db = require('../config/database');

module.exports = {
  create: (data, callBack) => {
    db.query(
      `INSERT INTO utilisateurs(email, password, roles, firstname, lastname, created_at, groupe_id) VALUES(?,?,'[]',?,?,NOW(),?)`,
      [
        data.email,
        data.password,
        data.firstname,
        data.lastname,
        data.groupe_id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    db.query(
      `SELECT * FROM utilisateurs WHERE email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    db.query(
      `SELECT id, email, firstname, lastname FROM utilisateurs WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    db.query(
      `SELECT * FROM utilisateurs`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    db.query(
      `UPDATE utilisateurs set email=?, password=?, firstname=?, lastname=? WHERE id = ?`,
      [
        data.email,
        data.password,
        data.firstname,
        data.lastname,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    db.query(
      `DELETE FROM utilisateurs WHERE id = ?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};