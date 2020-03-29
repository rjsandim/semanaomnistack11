/**
*  SQL: Mysql, SQLite, PostGreSQL, Oracle.
*  NoSql: MongoDB, DynamoDB.
*/

/**
 *  Driver: Select * from users;
 *  Builder: table('users').select('*').where();  --> Knex.js knex.org (npm install knex, npx knex init) 
 */

 /**
  *  Criar migrations: npx knex migrate:make create_ongs, npx knex migrate:make create_incidents
  *  Rodar migrations: npx knex migrate:latest
  *  Rollback: npx knex migrate:rollback
  */


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
