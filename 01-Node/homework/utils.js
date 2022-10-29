const done = (result)=>{
    process.stdout.write(result);
    process.stdout.write('\nprompt > ');
}
module.exports = done