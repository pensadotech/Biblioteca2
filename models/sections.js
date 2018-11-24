// Sections Model

module.exports = (sequelize, DataTypes) => {

    var Sections = sequelize.define("sections", {
        location: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        // Model tableName will be the same as the model name instead of being pluralized
        freezeTableName: true
    })

    // Provide point for associations 
    Sections.associate = models => {
        Sections.hasMany(models.books, {
            onDelete: 'cascade'
        })
    }

    return Sections

} // module.exports