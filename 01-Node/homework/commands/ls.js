const fs = require('fs');

const ls = ()=>{
    fs.readdir('.', (err, files) => {
        if (err) throw err;
        files.forEach((file) => {
          process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
    });
}
module.exports = ls