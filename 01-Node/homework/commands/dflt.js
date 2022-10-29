const dflt = (cmd)=>{
    process.stdout.write(`No se encontro el commando "${cmd}!"`);
    process.stdout.write('\nprompt > ');
}
module.exports = dflt