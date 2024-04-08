/* Exercise 1:
   -----------
   
   Write a JavaScript program to check two numbers
   and return true if one of the number is 100 or if
   the sum of the two numbers is 100.

*/

// Method 1

const a = 10
const b = 90

if(a===100 || b===100 || ((a+b)==100)){
    console.log(true)
}else{
    console.log(false);
}

// Method 2

const isEqualto100 = (a,b) => a ===100 || b===100 || (a+b) ===100;
console.log(isEqualto100(80,10));
console.log(isEqualto100(80,20));
console.log(isEqualto100(100,10));

/* Exercise 2:
   -----------
   
   Write a JavaScript program to get the extension of a
   filename.

*/

// Method 1

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.html'));

// Method 2

function getFileExtensions(filename) {
    const parts = filename.split('.');
    
    if (parts.length >= 2) {
        return parts[parts.length - 1];
    } else {
        return "";
    }
}

const filename1 = "example.txt";
console.log(getFileExtensions(filename1)); 

const filename2 = "document";
console.log(getFileExtensions(filename2)); 