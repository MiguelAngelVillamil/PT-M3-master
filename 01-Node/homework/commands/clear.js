const clear = ()=>{
    process.stdout.write("\033c");
    process.stdout.write('\nprompt > ');
}
module.exports = clear