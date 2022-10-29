const fs = require('fs');

const tail = (args)=>{
    fs.readFile(args[0], "utf-8", (err, data) => {
        if (err) throw err
        const lines = data.split("\n")
        process.stdout.write(lines.slice((args[1] ? parseInt(args[1]) : 10) * -1).join("\n"));
        process.stdout.write('\nprompt > ');

    })
}
module.exports = tail