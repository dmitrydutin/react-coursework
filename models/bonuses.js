module.exports = (sequelize, DataTypes) => {
    const Bonuses = sequelize.define(
        'bonuses',
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    )

    Bonuses.associate = (models) => {
        Bonuses.belongsTo(models.company)
        Bonuses.belongsToMany(models.users, { through: 'userBonuses', timestamps: false })
    }

    return Bonuses
}
