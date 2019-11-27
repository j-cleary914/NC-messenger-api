const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  }
};

const customConfig = {
  development: {
    connection: {
      database: "nc_messenger",
      user: "johnny",
      password: "password"
    }
  },
  test: {
    connection: {
      database: "nc_messenger_test",
      user: "johnny",
      password: "password"
    }
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
