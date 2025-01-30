
// alert('hello,world')
// null & undefined
// let age = null;
// console.log(age, age + 3, `the age is ${age}`);
// console.log(1);
// console.log(2);

let age = 25;
let year = 2019;
console.log(age,year);
age = 30;
console.log(age);

const point = 100;
console.log(point);

var score = 75;
console.log(score);

let email = "mario@thenetninja.co.uk";
console.log(email);
//strings
let firstName = "Edeh";
let lastName = "Christine";
let fullName = firstName +" "+ lastName;
console.log(fullName);
//getting characters
console.log(fullName[1]);
//string length
console.log(fullName.length);
//string methods -- whenever you use a method you put a bracket or parynthesis at end of it
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result,fullName);

let index = email.indexOf("@");//find the index of this in the variable of email check line 21
console.log(index);


let result2 = email.lastIndexOf("n");//finds the last index of n in the string variable of email
let result3 = email.slice(0,5);//slices from the index u want and where u want to
let result4 = email.substr(4,10);//starts from 4 and gets next ten characters in index.
let result5 = email.replace("m","w")//replaces the first m with w
let result6 = email.replace("n","w");
console.log(result2,result3,result4,result5,result6);

let radius = 10;
const pi = 3.14;
console.log(radius,pi);
//math operators +,-,*,/,**,%
console.log(10/2);
// let result10= pi * radius**2;
// console.log(result10);
//order of operation -  B I D M A S
let result10 = 5 *(10 -3)**2;
console.log(result10);
let likes = 10;
// likes = likes + 1;
// likes++;likes plus 1
// likes--;likes -1
// likes +=10;likes plus ten without using long method
// likes-=5;minus five from it easier method
// likes*=2;
likes/=2;

console.log(likes);
//NaN = not a number
console.log(5/"hello");
console.log(5*"kelvin"); 

let result11 = "the blog has" + " " +likes + " " +"likes";
console.log(result11);
 //template strings
 const title = "Best reads of 2019";
 const author = "Mario";
 const likes1 = 30;
 //concatenation way
// let result12 = "The blog called " + title + "by " + author + "has " + likes1 + "likes";
// console.log(result12);

 //template string way - it allows us to inject variables directly into the string without coming out of it
//we use backticks
//to input a variable in template string way we use dollar sign and curly braces
 let result12 = `The blog called ${title} by ${author} has ${likes} likes`;
 console.log(result12);
 //I likes this way

 //creating html templates
 let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span>This blog has ${likes} likes </span>
 `;
 console.log(html);

 //Arrays
 let ninjas = ["Shaun","Ryu","Chun-li"];//storing three strings in one variable
 //over-riding positions
//  ninjas[1]="Ken";
//  console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ["shaun","crystal",30,20];//you can store string and numbers within an array
// console.log(random);


//The length property - how many elements are in the array
// console.log(ninjas.length);

//Array -Methods
//The join method adds things to the end of the string in the variable

//Array is a type of object

let result13 = ninjas.join(",");

console.log(result13);
//gets the index of chun-li in the array
let result14 = ninjas.indexOf("Chun-li");
console.log(result14);
//Concat-method- it takes the array and joins another array  
//Concat joins things together

let result15 = ninjas.concat(["ken","crystal"]);
console.log(result15);
//Push method - it pushes a  new value to the  array
//It alters the original value
let result16 = ninjas.push("Ken");
console.log(result16);
 //Pop method - it take off the end value

 //this also alters the original value of the main array
 let result17 = ninjas.pop();
 console.log(ninjas);
 //Undefined - is when there is absence of value for a variable

 let age5;

 console.log(age5,age5+ 3,`the age is ${age5}`);
 
//Null - It is when the value is explicitly set to nothing
 let age6 = null;
 console.log(age6,age6 + 3,`the age is ${age6}`);

 console.log(true,false,"true","false");

 //Methods can return booleans
 let email1 = "luigi@thenetninja.co.uk";
 let names = ["mario","luigi","toad"];
 
 let result18 = email1.includes("@");//if it includes this character in the string it will return true
 let result19 = names.includes("luigi");//looks inside the array
console.log(result18);
console.log(result19);

//Comparison operators- to compare things togerther and retrun true or false
let age2 = 25;
//ONE EQUALS TO (= ) IS USED TO SET VALUE
//WHILE DOUBLE EQUALS TO IS USED TO SEE IF THE VALUE IS SAME OR TRUE
console.log(age2 == 25);//if age is 25 it will be true
console.log(age2==30);
//!=(EXCLAMATION EQUALS TO) MEANS IS NOT EQUAL TO
console.log(age2 != 30); //is age2 not equal to thirty which is true
console.log(age2 != 25)//if it is not equal to 25 which should be false
console.log(age2 > 20); //is 25 greater than 20
console.log(age2< 20);//is 25 less than 20 which is false
console.log(age2 <= 25);//less than or equal to which is true
console.log(age >= 25);//greater than or equal to 25 which is still true

let name2 = "Shaun";
console.log(name2 == "Shaun");
console.log(name2 == "shaun");//this should be false because it pays attention to case
console.log(name2 > "Crystal");//later letters in alphabets are greater than earlier letters in alphabets
//so this is true
//NB - lower case letters are greater than upper case letters

//Strict comparison===
let age1 = 25;
console.log(age1 ==="25");//triple equals to pays attention to the string and integers or numbers
//it basically checks the types too XD
console.log(age1 !=="25"); //this is also true and strict

//Type conversion
let score10 = "100";
score10 = Number(score10);//it takes the score 10 and turn it into a number
console.log(score + 1);
console.log(typeof score10);


//FOR - LOOPS
// for (let i = 0; i < 5; i++){
//     console.log("in loop:" ,i);
// }
// console.log("loop finished"); 

const  names1 = ["shaun","mario","luigi"];

// for(let i =0; i< names.length;i++){
// console.log(names1[i]);//this uses indexing to go through the array

// }
//While loop
const names2 = ["shaun","mario","luigi"];
// let i = 0;
// while( i < 5 ){
//     console.log("in loop:", i);
//     i++;
// }
// let i = 0;
// while(i < names2.length){
//     console.log(names[i]);
//     i++;
// }
 //DO - WHILE LOOPS
let i = 5;
do{
    console.log("val of i is:", i);
    i++;
}
while(i < 5);

//if statements
const age3 = 25;
if(age > 20){//this will only work if the condition is true
    console.log("you are over 20 years old")

}
const ninjas8 = ["shaun","ryu","chun-li","yoshi"];
if(ninjas8.length > 4){
    console.log("thats alot of ninjas");
}

const password4 = "password1234";//this isnot eight characters long so the if statement will not run but the if statement 
// will run 

//Logical Operators - OR || and AND &&
if(password4.length >= 12 && password4.includes("@") ){//oth statement must e true with the and statement
    console.log("the password is mighty strong");
}else if(password4.length >= 8 || password4.includes("@")){
    console.log("your password is strong enough");//this runs if your if statement does not run true
}else{
    console.log("password is not strong enough");
}

//logical NOT(!)
console.log(!true);//this makes it not true if you check the console
console.log(!false);//this makes it not false if you checkt the console

//Break and continue
const scores10 = [50,25,0,30,100,20,10];
for(let i = 0;i< scores10.length;i++){
    if(scores10[i] === 0){//zero will not show in the console
        continue;//ignore the rest of the code in the code block but continue the loop
    }

    console.log("your score:",scores10[i]);
    if(scores10[i] === 100){
        console.log("congrats you got the top score");
        break;//it breaks us out of the loop
    }
}

//switch statements

//note switch statements use strict equality
const grade = "D";
switch(grade){//what we want to run if the case is A
    case "A":
            console.log("You got an A");
                break;//breaks out of the switch statement
            case "B":
                console.log("You got a B");
                    break;

                case "C":
                    console.log("You got a C");
                    break;

                    case "D"://it runs this code because the statemet is correct
                        console.log("You got a D");
                        break;

                        case "E":
                            console.log("You got an E");
                            break;

                            default:
                                console.log("not a valid case");//this is the fall back statement.
        
}
//variable and block scope
let age7 = 30;//placed globally means it can be accessed from anywhere
// let age7 = 50;//you cant redefine this outside a code block

if(true){
   let age7 = 40;// it recreates this variable using local scope and only matters in this code block
   //this changes the value of the varaibale
   //this changes the value of the variable inside this code block particularly
   let name3 = "Kelvin";
    console.log(`inside code block: ${age7} ${name3} `)
}  
console.log(`outside code block: ${age7}`)
//making a variable using var ignores blockscope 

//function declaration
function greet2(){
    console.log("hello there");//nothing happens till you call the function again
}




//function expresssion
const speak = function(name4){
    console.log(`good day ${name4}`);
};

greet2();//running this function
speak("Kelvin");//doings this calls back the function you made with the name4 value 
  
  function king(name6){
    console.log(   `King of the ${name6}`)
  }
king("Pirates!");
//something for fun for my friend
// let callback = "gives crazy vibes ";
// function greet3(name8){
//     alert(`${name8} ${callback}`);
// }
// greet3("Debbie ");


//Arrow functions
//Syntax:
// const calcAre = (radius) => {

    //};

    //A regular function 
    const greet4 = function(){ 
        return 'hello world';
    }
    //Arrow function version of this

    const greet6 = () => "hello world";//it still returns because its a one line function
    let result20 =   greet6();//calling the function in a new variable
    console.log(result20);

    // const bill = function(products,tax){
    //     let total = 0;
    //     for(let i = 0;i=products.length;i++){
    //         total += products[i] + products[i] * tax;
    //     }
    //     return total;
    // }
    // console.log(bill([10,15,30]),0.2);



//OBJECT LITERALS

// const blogs35 =[
//     {title:"why mac and cheese rules", likes:30},
//     {title:"ten things to make with marmite", likes:50},
// ];
// console.log(blogs35);
// let user = {
//    //key :value
//     name:"crystal",
//     age : 30,
//     email:"crystal@thenetninja.co.uk",
//     location:"berlin",
//     blogs : ["why mac & cheese rules","10 things to make with marmite"],
//     //you can make a function in an object literals
//     login: function(){
//         console.log("the user is logged in")
//     },
//     logout: function(){  
//         console.log("the user was logged out")
//     },
//     logBlogs : function(){
//         console.log(user.blogs)
//     }
// };
// console.log(user);
// console.log(user.name);
// user.age = 35;
// console.log(user.age);

// //ACESSING THE OBJECT USING BLOCK it must be selected with strings



// console.log(user["name"]);
// user["name"] = "Kelvin";
// console.log(user["name"]);

// //Adding methods to objects
// //Calling back the function
// user.login();
// user.logout();
// user.logBlogs();

// const name9 = "mario";
// name9.toUpperCase();


//Math object
console.log(Math.E)//euners number

console.log(Math.PI);
const area = 7.7;
console.log(Math.round(area));//rounds it up to nearest digits
console.log(Math.floor(area));//only wholenumber
console.log(Math.ceil(area));
console.log(Math.trunc(area));//takes away decimal and leaves the decimal

//random nymbers
const random = Math.random();
console.log(random);//makes a random number between zero and 1

  
console.log(Math.round(random * 100));//between 1 to 100 round makes it to be 1

//Document Object model (DOM)
//DOM is a tree like structure

 console.log("Hard work is the key!");    

 //The Map  Method
 const prices = [20,10,30,25,15,40,80,5];
    const salePrices = prices.map((price) => {
        return price / 2;
    });//this is a callback function
console.log(salePrices);

//reduce method
const scores = [10,20,60,40,70,90,30];

const result21 = scores.reduce((acc,curr) => {
    if(curr > 50){
        acc++;
    }
    return acc;
},0);
console.log(result21);
//find method
const scores1 = [10,5,0,40,60,10,20,70];//returns the first value that meets the condition
const firstHighScore = scores1.find((score) => {
    return score > 50;//either true or false
    //it  keeps checking through the array to find the first value that meets the condition
});
console.log(firstHighScore);