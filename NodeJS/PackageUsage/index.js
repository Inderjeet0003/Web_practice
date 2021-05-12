const clr = require('colors')
const fig = require('figlet')


var figlet = require('figlet');

figlet('INDERJEET', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});