const AppError = require("../utils/AppError");
const {hash,compare} = require("bcryptjs");
const knex = require("../database//knex");


class UsersController{
    async create(request,response){
        const {name,email,password,function_user,id_company_user} = request.body;

        const checkUserExists = await knex("users").where({email});

        if (checkUserExists[0]){
            throw new AppError("usuario existe");
        }

        const hashedPassword = await hash(password,8);

        await knex("users").insert({
            name,
            email,
            password: hashedPassword,
            function_user,
            id_company_user
        });

        return response.status(201).json({name,email,hashedPassword,function_user,id_company_user});
    }
}

module.exports = UsersController;