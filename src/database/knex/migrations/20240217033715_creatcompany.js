exports.up = knex => knex.schema.createTable("company",table =>{
    table.increments("id_company");
    table.text("name_company");
    table.text("cnpj");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
})


exports.down = knex => knex.schema.dropTable("company");
