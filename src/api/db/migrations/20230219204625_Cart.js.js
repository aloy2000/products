export const up = async(knex) => {
  await knex.schema.createTable("carts", (table) => {
    table.increments("id").primary()
    table
      .integer("userId")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("cascade")
    table
      .integer("productId")
      .notNullable()
      .references("id")
      .inTable("products")
      .onDelete("")
    table.integer("quantity").notNullable()
  })
}

export const down = async(knex) => {
  await knex.schema.dropTable("carts")
}
