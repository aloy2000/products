export const up = async(knex) => {
  await knex.schema.createTable("images", (table) => {
    table.increments("id").primary()
    table.text("link").notNullable()
    table.text("alt").notNullable()
  })
}

export const down = async(knex) => {
  await knex.schema.dropTable("images")
}
