const echo = (rest)=>{
    const newSTR = rest.join(' ');
    process.stdout.write(`Soy un echo: "${newSTR}!"`);
    process.stdout.write('\nprompt > ');
}
module.exports = echo