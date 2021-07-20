
var array = [1,3,5,6,8,9,22];
//const addTen= array.map(a=>a+10).filter(a=>a>15).reduce((a,b)=>a+b);

//var addSum(10) = function createBase(6);
function createBase(f) { // curry(f) does the currying transform
  return function(a) {  
     return (f+a);
  }
}

const addsum = createBase(80);
//console.log(addsum(10));
// Currying Method to add n of argument or functional paramrters
/* 
let sum = function(a){
   return function(b){
     if(b){
       return sum(a+b);
     }
     return a;
    
    }
} */

let sum = a=>  b =>  b ? sum(a+b): a; //  in one line Es6 syntax
 //console.log(sum(10)(10)(23)(32)());
 
 const str = 'Hello World how is it outside';
  
  
//console.log((str.split(/\s/).reverse().join(' ')));
 
 
/* var str = "You are here !!";
console.log(str.split(/\s/).reverse().join(" ")); */

/**********************/

var counter=0;
function getData(){
    console.log('fetching Data...'+counter++);
}

function debounMethod(fn,delay){
    let timer;
    return function(...args){
    clearTimeout(timer);
        timer = setTimeout( ()=>{
            getData.apply(args);
        },delay);
    }

}

let searchData = debounMethod(getData,300);

let reverseStr="I am Here";

function reverseStatement(){
let reversedURL = reverseStr.split(/\s/).reverse('').join(' ');
console.log(reversedURL);
}
reverseStatement();
// REvers Method
reverseString()
function reverseString(){
    let splitStr= reverseStr.split(''); 
    let reverseString ='';
    for(var i=splitStr.length-1; i>=0; i--){
       reverseString+= splitStr[i];
      
    }
     console.log(reverseString);
}


const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

let fullName = persons.map(PersonFullname)

function PersonFullname(item){
			return [item.firstname,item.lastname].join(' ');
}
//PersonFullname();
console.log(fullName);



// Arrow function should not be used with object method  example

 const couter ={
     count:0,
     next:()=>{
     return ++this.count;
     },
     current: ()=>{
     return this.count;
     }
     
 };
 // resolution with normal fucntion 
 
 const normalCounter ={
   normalCount:0,
   next(){ return ++this.normalCount;},
  current(){
   return this.normalCount;
  }
 }
 console.log(normalCounter.next());
 
/*  const concat = (separator) => {
    let args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
 } */
 function concat(separator) {
    let args = Array.prototype.slice.call(arguments,1);
    console.log(args)
    return args.join(separator);
}
console.log(concat('','manish','kumar'));

var obj = {
  id: 42,
  counter: function counter() {
    setTimeout(function() {
      console.log(this.id);
    }.bind(this), 1000);
  }
};
//obj.counter();







// expected result
//console.log(mult(2)(3)(4)());
 
 function mult(a){
  return function(b){
  	 return b ? mult(a*b): a;
  }
 }
 
function add(...args) {
  let a = args.reduce((a, b) => a + b, 0)
  return function(...args){
    let b = args.reduce((a, b) => a + b, 0)
    if(b){
      return add(a+b)
    }
    return a
  }
}
console.log(add(12,12)(12,12)())
 
 function sumCurry(a,b) {
  return function(c,d){
    return a+b+c+d
  }
}
console.log(sumCurry(1,2)(3,4))


