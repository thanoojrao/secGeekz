'use strict';
module.exports= (sequelize,DataTypes)=>{
    var User= sequelize.define('User',{
        id:{
            primaryKey:true,
            allowNull:false,
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4
        },
        user_name:{
            allowNUll:false,
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password :{
            type:DataTypes.STRING,
            allowNull:false,
        },
        
    });
    return User;
};