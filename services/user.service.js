const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

class UserService {

  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.log(err));
  }


  async create(data) {
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const respuesta = await this.pool.query(query);
    return respuesta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return { id, changes };

  }

  async delete(id) {
    return {
      id
    }
  }



}

module.exports = UserService;
