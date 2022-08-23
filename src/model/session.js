module.exports = (sequelize,DataTypes)=>{
    return sequelize.define(
    'session', { 
        session_id:
            {
                type: DataTypes.INTEGER, 
                allowNull: false, 
                autoIncrement: true, 
                primaryKey: true
            },
        session_IdUser:
            { 
                type: DataTypes.STRING, 
                allowNull: false
            },
        sessionDuration:
            { 
                type: DataTypes.INTEGER, 
                defaultValue : 360,
                allowNull: false
            }},
        {
            timestamps : true ,
            createdAt : 'created',
            updateAt: false 
        }
)};