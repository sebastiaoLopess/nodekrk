exports.up = knex => knex.schema.createTable("users",table =>{
    table.increments("user_id");
    table.text("name");
    table.text("email");
    table.text("password");
    table.text("function_user");
    table.integer("id_company_user").references("id_company").inTable("company");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
})


exports.down = knex => knex.schema.dropTable("users");