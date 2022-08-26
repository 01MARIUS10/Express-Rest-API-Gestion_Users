module.exports = (sequelize,DataTypes)=>{
    return sequelize.define(
    'user', { 
        id:
            {
                type: DataTypes.INTEGER, 
                allowNull: false, 
                autoIncrement: true, 
                primaryKey: true
            },
        name:
            { 
                type: DataTypes.STRING, 
                allowNull: false
            },
        email:
            {   
                type: DataTypes.STRING,
                unique : true , 
                allowNull: false
            },
        picture:
            { 
                type: DataTypes.STRING, 
                allowNull: false
            },
        password:
            { 
                type: DataTypes.STRING, 
                allowNull: false
            },
        function:
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