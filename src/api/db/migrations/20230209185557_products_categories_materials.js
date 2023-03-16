exports.up = function (knex) {
  return knex.schema.createTable("materials", (table) => {
    table.increments("id").primary()
    table.text("name").notNullable()
    table.text("color").notNullable()
  }).then(function () {
    return knex.schema.createTable("categories", (table) => {
      table.increments("id").primary()
      table.text("name").notNullable()
      table.text("description").notNullable()
    })
  }).then(function () {
    return knex.schema.createTable("products", (table) => {
      table.increments("id").primary()
      table.text("name").notNullable()
      table.text("description").notNullable()
      table.decimal("price", 10, 2).notNullable()
      table.integer("quantity").notNullable()
      table
        .integer("materialId")
        .notNullable()
        .references("id")
        .inTable("materials")
      table
        .integer("categoryId")
        .notNullable()
        .references("id")
        .inTable("categories")
    })
  })


}

exports.down = async (knex) => {
  await knex.schema.dropTable("materials")
  await knex.schema.dropTable("categories")
  await knex.schema.dropTable("products")
}
