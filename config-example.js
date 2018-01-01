const config = {
  db: {
    user: USER, // env var: PGUSER
    database: DATABASE, // env var: PGDATABASE
    password: PASSWORD, // env var: PGPASSWORD
    host: SERVER, // Server hosting the postgres database
    port: PORT, // env var: PGPORT
    max: NUMBER_OF_CLIENTS, // max number of clients in the pool
    idleTimeoutMillis: TIME, // how long a client is allowed to remain idle before being closed
  },
  credentials: {
    secret: SECRET,
    saltRounds: SALT_ROUNDS,
  },
};

module.exports = config;
