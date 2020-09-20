module.exports = (sequelize, type) => {
    return sequelize.define( `song`, {
        guild_id: type.STRING,
        song_id: type.STRING,
        song_name: type.STRING,
        duration: {
            type: type.STRING,
            // get() { 
            //     const duration = this.getDataValue('duration');
            //     return duration ? Number(duration): null;
            // } //TODO Replace this with a converter from the "PT#M#S" format to human *or add a setter* 
        },
        requested_by: type.STRING
    });
}