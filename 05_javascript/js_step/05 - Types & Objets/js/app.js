console.log("Types and Objects");

//////        //////
////// String //////
//////        //////

var str = "my text"; // Object String

// property
console.log(str.length); // 7

// Method
console.log(str.toUpperCase()); // case sensitive

// slice
console.log(str.slice(3, 7));

// method result in variable
var myCut = str.slice(3, 7);

console.log(myCut);

// CONCATENATION
console.log("This is the value of myCut : " + myCut);

//////        //////
////// Number //////
//////        //////

var nbr = 2; // Object Number
console.log(typeof nbr);
console.log(typeof nbr.toString());

//////        //////
////// Boolean //////
//////        //////

var myBoolean = true;
var myBoolean2 = false;

//////                  //////
////// NULL & UNDEFINED //////
//////                  //////

var myObjectNull = null;

var undefinedVariable;

console.log(undefinedVariable);

////////////////////////                                ////////////////////////
//////////////////////// SUMUP : PRIMITIVES VS OBJECTS   ////////////////////////
////////////////////////                                ////////////////////////

//////////////////////// OBJECTS - In JavaScript, almost "everything" is an object.

// Booleans
// Numbers
// Strings

// Arrays
// Objects

// Dates
// Maths
// Regular expressions

// Functions

//////////////////////// PRIMITIVES (DATA TYPES) - A primitive value is a value that has no properties or methods.

// string
// number
// boolean
// null
// undefined
