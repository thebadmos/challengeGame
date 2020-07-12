//multiples 
const multiple = () => {
    var sum = 0;
    var number = prompt("Enter a number");
    for (var i = 0; i <= number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    alert("Sum the multiples of 3 and 5 under 1000 is " + sum);
}

//Even 
const even = () => {
    var num = prompt('Enter a number!');
    var str = num.toString();
    var output = [str[0]];
    for (var i = 1; i < num.length; i++) {
        if (num[i - 1] % 2 === 0 && num[i] % 2 === 0) {
            output.push('-', num[i]);
        }
        else {
            output.push(num[i]);
        }
    }
    alert('The Even Dashed Number: ' + output.join(''));
}
//Array frequency
var freq = 0;
var modeFreq = 1
var arrayItem;
const frequent = () => {
var user = prompt('Enter an array').split(',');
for (var i = 0; i < user.length; i++) {
for (var j = i; j < user.length; j++) {
if (user[j] === user[i]) {
freq++;
}
if (freq > modeFreq) {
 modeFreq = freq;
arrayItem = user[i];
}
}
freq = 0;

    }

    alert(`The mode is: ${arrayItem} (${modeFreq} times!)`);

}