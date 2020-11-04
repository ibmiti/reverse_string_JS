// Create a funciton that reverses a string
// 'Hi my name is Barnie' should be :
// 'einraB si eman ym iH; 
// go! 

// f(str) 
function reverse(str){
    // check input
    // check if arg has val
    // check if str has length greater than 2 chars
    // check if arg is string
    if (!str || str.length < 2 || typeof str !== 'string' )
    {
        return 'error in input';
    }

const backwards = [];
const totalItems = str.length - 1;
// run loop until there is no chars for the str to give
for (let i = totalItems; i >= 0; i--)
{
    // in js we can treat strings like arrays so there is no need to split the string first
    backwards.push(str[i]);
} 
console.log(backwards);

// will return str from arr back to str
return backwards.join('');
}

reverse('')
// return err

reverse('hello world');
// returns 'dlrow olleh'

// using built-in methods
function reverse2(str){
    return str.split('').reverse().join();
}

// using es6 syntax

const reverse3 = str => str.split('').reverse().join('');

// using spread operator

const reverse4 = str => [...str].reverse().join('');