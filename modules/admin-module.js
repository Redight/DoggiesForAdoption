const db = require("../data/dbConfig.js");
module.exports={}

module.exports = {
    find
}

async function find() {
    const admins = await db.select('*').from('kennels');
    return admins;
}