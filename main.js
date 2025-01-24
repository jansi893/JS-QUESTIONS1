// MAIN SHEET -2
// Write a nested loop to generate a multiplication table (1 to 10).

// for(let i=1; i <= 10; i++){
//     console.log(`${i} table strt`)
//     for(let j=1; j <=10; j++){
//         console.log(i * j)
//     }
// }

// Use a for...in loop to iterate through the properties of an object.
// mostly use in object

// let person = {
//     name: 'Jansi',
//     age: 30,
//     occupation: 'Developer',
//     country: function(){}
// }    
// for(let key in person){
//    if(typeof person[key] !== 'function'){
//     console.log(key);
//    }
// }

// 13.	Write a program to calculate the sum of all even numbers between 1 and 100 using a for loop.
// let sum = 0;
// for(let i = 1; i<=100; i++){
//     if(i % 2 === 0){
//         sum += i
//         }
// }
// console.log(sum);

// 14.	Use a for...of loop to iterate over a string and count the vowels.
// mostly use in string and array
// let str = 'jAnsi';
// let newstr = str.toLowerCase()
// let count =0;
// for(const element of newstr){
//     // console.log(element);
//     if (element == 'a'||element == "e" || element == "i" || element =="o" || element == "u"){
//     count++
// }
// }
// console.log(count);

// 15.	Create a loop that breaks out when a specific condition is met (e.g., number divisible by 7).

// for(let i=1; i<100; i++){
//     if(i%7 === 0) {
//         break;
//     }
//     console.log(i);
// }

// 16.	Write a loop that skips numbers divisible by 3 but logs all others up to 20.
// for(let i=1; i<=20; i++){
//     if(i % 3 === 0) { 
// continue;
// }
// console.log(i);
// }

// 17.	Use a do...while loop to prompt the user until they enter a positive number.
// do{
//   var val =  prompt("enter positive value");
// }while(val <= 0);

// 18.	Write a nested loop to generate a pyramid pattern:
// *
// ***
// *****
// *******

// let n = 4;
// let line;
// for(let i =1; i<=n; i++){
//     line = '';
//     for(let j = 1; j <= n-i; j++){
//         line += ' ';
//         }
//         for(let k=1; k<=i; k++){
//             line += '*';
//             }
//             for(let l=2; l<=i; l++){
//                 line += '*';
//                 }
//             console.log(line);
// };

// 19.	Use a loop to reverse a string "JavaScript".
// let str = "JavaScript";
// let reversed = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//     }
//     console.log(reversed);  

// 	20.	Write a program to calculate the product of all numbers in an array using a loop.
// let arr = [1, 2, 3, 4, 5];
// let product = 1;
// for (var element of arr){
//    product = product * element;
// }
// console.log(`product of ${arr} is ${product}`);

// 1.	Create a program that calculates and logs the result of (5 + 3) * 2 - 8 / 4.
// let result = (5+3)*2-8/4 ;
// console.log(result);

// 2.	Log the value of a variable before and after incrementing it using ++.
//let x = 5;   
//console.log(++x);//post increment
//console.log(x++);//after increment


// 3.	Write a program that swaps the values of two variables without using a third variable.
// var a = 5;
// b = a;
// a = b;
// console.log(b);

// 4.	Create a variable with a template literal that includes your name and age.
// var name = "jansi";
// var age = 20;
// console.log(`${name},${age}`);

// 5.	Use console.table() to display the following object: { name: "John", age: 30, city: "New York" }.
// var obj =  { name: "John", age: 30, city: "New York" };
// console.table(obj); 

// 6.	Create a program that uses console.group() to group related logs.
// console.group();
// console.log("this is fisrt log");
// console.log("this is second log");
// console.groupEnd();


// 7.	Use console.time() and console.timeEnd() to measure the execution time of a simple loop.
// console.time();
// for(i=1; i<=1000; i++){
//     // do nothing
// }
// console.timeEnd();

// 8.	Log a variable’s value dynamically by including it in a string: "The value is: <value>".
// var value = 10;
// console.log(`The value is: ${value}`); 

// 9.	Use console.trace() to debug a function call stack.
// function abc(){
//     second();
// }
// function second() {
//     console.trace("jansi");
    
// }
// abc();

// 10.	Create and log an object dynamically using computed property names.
// var value = "jansi";
// var key = "name";
// var obj ={
//     [key]: value
// }
// console.log(obj);


//DOM QUESTIONS
//Write a function to select a <div> with the ID container and log it to the console.
// const container = document.getElementById('container');
// function selectDiv(container){
//     console.log("hello world");
// }
// selectDiv(container);

// Select all <li> elements inside a <ul> with the class menu and log them as an array.
// const menu = document.querySelector(".menu");
// const listItems = Array.from(menu.children);
// console.log(listItems);

// Write code to select the first <h1> element on a webpage and change its color to blue.
// const firsth1 = document.querySelector(".first");
// firsth1.style.color = "blue";

// Select the element with the class card and add a border to it using JavaScript.
// const card = document.querySelector(".card");
// card.style.border = "1px solid black";

//Write a function to log all elements with the tag name button to the console.
// const buttons = document.querySelectorAll("button");
// function logButtons(buttons){
//     console.log("hello");
//     }
//     logButtons();

// 6.	Select a <p> element with the class description and change its text to "Updated description".
// const para = document.querySelector(".Discription");
// para.textContent = "Updated description";

// 7.	Write a function that takes an ID of an element and changes its text to "Hello, World!".
// function changeText(){
//     const element = document.querySelector("#element")
//     element.textContent = "Hello, World!";
// }
// changeText();

// 8.	Select a button with the ID submit and set its text to "Submit Form".
// const submit = document.querySelector('#submit');
// submit.textContent = "Submit Form";

// 9.	Replace the text inside a <span> element with the class price to "₹499".
// const span = document.querySelector(".span");
// span.textContent = "$499";

// 10.	Write a function to change the text of all <h2> elements on the page to "Welcome to My Page".
//   const headings = document.querySelectorAll('.h2s');
//   headings.forEach(function(headings) {
//     headings.textContent = "Welcome to My Page";
// });

// 11.	Select a <div> with the ID content and replace its inner HTML with a new <h2> and <p> element.
// const div = document.querySelector("#content");
// div.innerHTML = "<h2>Heading</h2><p>Paragraph</p>";

// 12.	Write a function that takes an element ID and replaces its content with a <button>Click Me!</button>.
// const element = document.querySelector('#element');
// function replace(element) {
//     element.innerHTML = "<button>Click Me!</button>";
//     };
//     replace(element);

// 13.	Select an element with the class info and append a <strong> tag with the text "Important" inside it.
// const information = document.querySelector(".info");
// const strong = document.createElement("strong");
// strong.textContent = "Important";
// information.appendChild(strong);

// 14.	Replace the content of a <div> with ID main with an unordered list containing three <li> items.
// const main = document.querySelector("#main");
// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// const li2 = document.createElement("li");
// const li3 = document.createElement("li");
// li1.textContent = "Item 1";
// li2.textContent = "Item 2";
// li3.textContent = "Item 3";
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// main.innerHTML = "";
// main.appendChild(ul);

// OR

// const main = document.querySelector("#main");
// main.innerHTML = "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>";

// 15.	Create a function that takes an ID and adds an <img> tag with a placeholder image URL inside the element.
// function addPlacehoderImage(elementId) {
//     const element = document.getElementById(elementId);
//     if(element){
//         const img = document.createElement("img");
//         img.src = "https://images.unsplash.com/photo-1736771932149-26287a969645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8";  // Placeholder image URL
//         img.alt = "Placeholder image"; 
//         element.appendChild(img);
//     } else {
//         console.log("Element not found");
//     }
// }

// addPlacehoderImage("elementid");

// 16.	Select a <div> with the class box and change its background color to red.
// const box = document.querySelector(".box");
// box.style.backgroundColor = "red";

// 	17.	Write a function that takes an element ID and sets its font size to 20px.
// function selectFont(){
//     const element = document.querySelector("h1");
//     element.style.fontSize = "20px";
// }
// selectFont();

// 	18.	Select all <h1> elements and change their text color to green.
// const h1s = document.querySelectorAll(".h1s");
// h1s.forEach((h1) => {   
//     h1.style.color = "green";
//     });

// 	19.	Change the display property of an element with the class hidden to block.
// const display = document.querySelector(".box");
// display.style.display = "block";

// 	20.	Write a function that toggles the visibility of an element (hide/show) when called.
// function toggleVisiblity(){
//     const btn = document.querySelector(".btn");
// if(btn.style.display === 'none'){
// btn.style.display = "block";
// } else {
// btn.style.display = "none";
// }
// }

// 21.	Add a click event listener to a button with the ID login that logs "Button clicked!" to the console.
// const btn = document.querySelector(".login");
// btn.addEventListener("click",function(){
//     console.log("button clicked!");
// })

// 	22.	Write a function to remove a mouseover event listener from an element with the class hoverable.
// var elem = document.querySelector(".hoverable");
// elem.addEventListener("mouseover",print);
// function print()
// {
//     console.log("hello");
//     remove();
// }
// function remove()
// {
//     elem.removeEventListener("mouseover",print);
// }


// 	23.	Add a submit event listener to a form with the ID signup that prevents the default form submission.
// let submit= document.querySelector("#signup");
// submit.addEventListener("submit",function(ev){
//    ev.preventDefault();
// })


// 	24.	Attach a keydown event listener to the document and log the key pressed to the console.
// 	25.	Write a function that adds a click event listener to all buttons on the page and changes their background to yellow when clicked.

// difference between array and nodelist -nodelist is a special data structiom in js which can hold html elenents as group
// but array in js although looks similar but have a fundamental difference,that they have are used for js data types
// to convert the nodelist use(...) to array
// Q49 

// function theme(){
//     const btn =document.querySelector("button");
//     const body = document.body;
//     btn.addEventListener("click",function(){
//        const classes =[...document.body.classList];
//        if(classes.indexOf("light") !== -1){
//         body.classList.remove("light");
//         body.classList.add("dark");
//        }
//        else{
//         body.classList.remove("dark");
//         body.classList.add("light");
//        }
//     })
// }

// theme();
