module.exports = (sequelize, type) => {
    return sequelize.define( `song`, {
        guild_id: type.STRING,
        song_url: type.STRING,
        song_name: type.STRING,
        duration: {
            type: type.STRING,
            get() { 
                const duration = this.getDataValue('duration');
                return duration ? Number(duration): null;
            }
        },
        requested_by: type.STRING
    });
}