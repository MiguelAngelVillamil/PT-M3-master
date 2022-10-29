const fs = require('fs');
const done = require('../utils');

const cat = (rest)=>{
    fs.readFile(rest[0], "utf-8", (err, data) => {
        if (err) throw err
        done(data);
    })
}
module.exports = cat