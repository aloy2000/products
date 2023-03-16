const { table } = require("knex");

exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.text("firstName").notNullable();
    table.text("familyName").notNullable();
    table.text("email").notNullable();
    table.text("password").notNullable();
    table.text("salt").notNullable();
    table.text("numberPhone").notNullable();
  }).then(function () {
    return knex.schema.createTable("address", function (table) {
      table.increments("id").primary();
      table.integer("postalCode").notNullable();
      table.text("town").notNullable();
      table.text("street").notNullable();
      table.text("country").notNullable();
      table.integer("userId").notNullable().references("id").inTable("users").onDelete("cascade");
    });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("address").then(function () {
    return knex.schema.dropTableIfExists("users");
  });
};
