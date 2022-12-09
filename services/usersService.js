const db = require('../config/database');

module.exports = {
  create: (data, callBack) => {
    db.query(
      `insert into utilisateurs(email, password, roles, firstname, lastname, created_at) values(?,?,'[]',?,?,NOW())`,
      [
        data.email,
        data.password,
        data.firstname,
        data.lastname,
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
      `select * from utilisateurs where email = ?`,
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
      `select id, email, firstname, lastname from utilisateurs where id = ?`,
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
      `select id, email, firstname, lastname from utilisateurs`,
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
      `update utilisateurs set email=?, password=?, firstname=?, lastname=? where id = ?`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
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
      `delete from utilisateurs where id = ?`,
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