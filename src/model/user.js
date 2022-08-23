module.exports = (sequelize,DataTypes)=>{
    return sequelize.define(
    'user', { 
        user_id:
            {
                type: DataTypes.INTEGER, 
                allowNull: false, 
                autoIncrement: true, 
                primaryKey: true
            },
        user_name:
            { 
                type: DataTypes.STRING, 
                allowNull: false
            },
        user_email:
            {   
                type: DataTypes.STRING,
                unique : true , 
                allowNull: false
            },
        user_picture:
            { 
                type: DataTypes.STRING, 
                allowNull: false
            },
        user_password:
            { 
                type: DataTypes.STRING, 
                allowNull: false
            },
        user_function:
            { 
                type: DataTypes.STRING, 
                allowNull: false
            }},
        {
            timestamps : true ,
            createdAt : 'created',
            updateAt: false 
        }
)};