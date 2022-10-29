const pwd = ()=>{
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
}
module.exports = pwd