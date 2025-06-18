/**
 * Demonstrates various DOM manipulation techniques including:
 * - Selecting elements by ID, class, and tag name.
 * - Styling elements using JavaScript.
 * - Creating and appending new elements to the DOM.
 * - Modifying element content and attributes.
 * - Logging document properties and collections for inspection.
 *
 * Key Sections:
 * 1. Styling elements using querySelector and getElementById.
 * 2. Creating and appending a new <li> element to a <ul>.
 * 3. Modifying text and styles of elements selected by class and tag name.
 * 4. Using querySelector to select and modify the first matching element.
 * 5. Handling cases where elements may not exist in the DOM.
 *
 * Note:
 * - The line `var submit = document.querySelector('input[type = "submit"]')` selects the first <input> element in the document with type="submit". 
 *   This allows you to modify properties such as its value (the text displayed on the button).
 */
// // DOM Manipulation 

// // const title = document.querySelector("#main-heading");

// // title.style.color = 'red';

// //console.log(title);


// //styling using DOM

// /* const listItems = document.querySelectorAll(".list-items");

// for(i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '2rem';
// }
// console.log(listItems); */


// // Create Element 

// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// // Adding Element

// ul.append(li);


// //Modifying

// li.innerText = 'X-ment' 


// //console.log(document); // this Examine the document object by showing everything we can be able to do with it like creating elements, modifying elements, etc.
// console.log(document.title);

// // document.title = 123;

// console.log(document.doctype);

// console.log(document.head);
//  // This logs a collection of all elements in the document

//  console.log(document.all)

//   console.log(document.all[18])

//   // document.all[11].textContent = "Victor Website";

//   console.log(document.forms[0]);// it will bring the actuall form that we are looking on

// GETELEMENTBYID

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById("main-header");

// // console.log(headerTitle);

// // headerTitle.textContent = "Good morning to you all"; 

// // headerTitle.innerText = "Victor Website"//This here pays attention to the styling

// // // Set the inner HTML of the headerTitle element to include an <h3> tag
// // headerTitle.innerHTML = '<h3>Hey man</h3>';

// header.style.borderBottom = ' solid 3px #000';


// GETELEMENTBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item')
// console.log(items[0])
// items[1].textContent = "Hello 2"
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// //items.style.backgroundColor = '#f4f4f4'; //so here this will not gonna work it will prompt an error as it is a html collection / an array let loop over it so that we can edit or style each item

// for(let i = 0; i< items.length; i++){
//     items[i].style.backgroundColor = 'orange';
// }


//GETELEMENTBYTAGNAME//
// if we add another li with different classname it will get style as we are styling the the list
// var li = document.getElementsByTagName('li')
// console.log(li)
// li[1].textContent = "Hello 2"
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// //items.style.backgroundColor = '#f4f4f4'; //so here this will not gonna work it will prompt an error as it is a html collection / an array let loop over it so that we can edit or style each item

// for(let i = 0; i< li.length; i++){
//     li[i].style.backgroundColor = 'orange';
// }

// //QUERYSELECTOR//

// var header = document.querySelector('#main-header');

// if (header) {
// 	header.style.borderBottom = 'solid 4px #ccc';
// } else {
// 	console.warn("Element with id 'main-header' not found.");
// }

// // Ensure there is an input element in the HTML before running this code
// var input = document.querySelector('input');
// if (input) {
// 	input.value = 'Hello World';
// } else {
// 	console.warn("No input element found in the document. Please add <input type=\"text\"> to your HTML.");
// }

// /**
//  * Selects the first <input> element of type "submit" from the document.
//  * @type {HTMLInputElement|null}
//  */
// var submit = document.querySelector('input[type = "submit"]')
// submit.value= "Send";


// // The dot (.) before 'list-group-item' specifies that we're selecting an element by its class name
// var item = document.querySelector('.list-group-item')
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';


// // QUERYELEMENTALL// this output a node list and we can be able to run array functions

// var  title = document.querySelectorAll('.title');
// console.log(title);

// var odd = document.querySelectorAll('li:nth-child(odd)') // for odd index / even for even one
// for(var i = 0; i< odd.length; i++){
// 	odd[i].style.backgroundColor = 'orange';
// }

// TRAVERSING THE DOM //

// var itemList = document.querySelector('#items')

// // parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'yellow';

// console.log(itemList.parentNode.parentNode);

// parentElemennt

// parentElement can be null if the node has no parent (for example, because it isn't attached to a tree) or its parent is not an Element . On the other hand, Node. parentNode always returns the parent node, which may be a Document or other node types.

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'yellow';

// console.log(itemList.parentElement.parentElement);

// childNode

//console.log(itemList.childNodes);// it returns a nodelist which is basically an array and text are those line between childen node if you put all li on one line you can get the exact length

// children : this the good one to use as it does not care about white space and breack

// console.log(itemList.children);//it return a htnmlCollection , which mean an array of those children different from NodeList
// itemList.children[1].style.backgroundColor = 'orange'


// // firstchild

// console.log(itemList.firstChild); // but if there is a white space the firstchild will be a text

// // firstElementChild : this is the best one to used to retrieve element child with caring on the white space and break

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Victor Winner'

// // lastChild

// console.log(itemList.lastChild); // but if there is a white space the lastChild will be a text node

// // lastElementChild : this is the best one to used to retrieve element child with caring on the white space and break

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Victor Winner'


// nextSiblings

// console.log(itemList.nextSibling);

// //nextElementSibling

// console.log(itemList.nextElementSibling);// if there is not an next one it will return null

// // previousSiblings

// console.log(itemList.previousSibling);

// //previousElementSibling

// console.log(itemList.previousElementSibling);// if there is not an next one it will return null

// itemList.previousElementSibling.style.color = 'green'

// let us look at how to create element and insert them


// var newDiv = document.createElement('div');

// // let us add a  class to it

// newDiv.className = 'hello'

// // add id

// newDiv.id = 'hello1'

// // add attribute

// newDiv.setAttribute('title', 'Hello Div');

// //to add some this inside the newDiv we will use a text node

// var newDivText = document.createTextNode('Hello Victoire')

// // add text to div

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1');

// console.log(newDiv)

// // let change the front size

// newDiv.style.fontSize = '30px';
// newDiv.style.color = 'red'
// newDiv.style.fontWeight = 'bold'


// container.insertBefore(newDiv, h1) // here we are inserting newDiv before h1

// var button = document.getElementById('button').addEventListener('click', function(){
//     console.log('Hello');
// })

// Event //

// var button = document.getElementById('button').addEventListener('click', buttonClick)

/*
   Here, you are registering the buttonClick function as a callback for the click event.

When you click the button, the browser automatically calls your function like this behind the scenes:
*/

// Event handler for button click; 'e' is the event object containing event details
// function buttonClick(e){
    //console.log('Button Clicked')
    // document.getElementById('header-title').textContent = 'New Featured';
    // document.querySelector('#main').style.backgroundColor = "chocolate";
    /*The event object (e) is automatically provided by the browser when the event occurs. You don’t need to pass it manually — the browser invokes the function and passes the event object for you. */

    //// logs the event object that the browser passed

    //console.log(e);// Logs the full event object to the console. This includes info like mouse coordinates, the target element, and more.
    // console.log(e.target);// Logs the exact element that triggered the event — in this case, the button.
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+ e.type'</h3>'

    // console.log(e.type);  // it log in the console the event that was used
    //console.log(e.clientX) // this will gonna get the axes position of the mouse  
    //  if you want to get the most position from the actual element from that you are inside of 
    //console.log(e.offsetX);
    //console.log(e.offsetY);


    // We can test to see if when you click it if you're holding down the Alk key or the shift key to the event to be true or false
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey)

// }


//

var button = document.getElementById('button');
var box = document.getElementById('box')
// button.addEventListener('click', runEvent);
// Event double click

// button.addEventListener('dblclick', runEvent);

// MouseDown occurs when the user presses the mouse button; MouseUp occurs when the user releases the mouse button.

// button.addEventListener('mouseup', runEvent);
// button.addEventListener('mousedown', runEvent);

// box.addEventListener('mouseenter', runEvent); // for the parent element
// box.addEventListener('mouseleave', runEvent); // for the parent element the the mouse is get leaved

// box.addEventListener('mouseover', runEvent);// for the element 
// box.addEventListener('mouseout', runEvent); // for the element when leaving the cursor

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]')
var form = document.querySelector('form')
var select = document.querySelector('select');

// Listen for any key being pressed down (fires repeatedly if held)
// itemInput.addEventListener('keydown', runEvent); 

// to listen for when a key is released
// itemInput.addEventListener('keyup', runEvent);

// Listen for a character key being pressed (deprecated, use 'keydown'/'keyup' instead)
// itemInput.addEventListener('keypress', runEvent);

// Fires when the input gains focus (user clicks or tabs into it)
// itemInput.addEventListener('focus', runEvent);

// Fires when the input loses focus (user clicks or tabs out)
// itemInput.addEventListener('blur', runEvent);

// Fires when the user cuts (removes) text from the input field
//itemInput.addEventListener('cut', runEvent);

// Fires when the user pastes text into the input field
//itemInput.addEventListener('paste', runEvent);



//itemInput.addEventListener('input', runEvent);// on any action it fires 
select.addEventListener('select', runEvent)

function runEvent(e){
    console.log('EVENT TYPE: '+ e.type );
    // Log the current value of the input field to the console
    console.log(e.target.value.length); 
    document.body.style.display ='none' // evoid cheat
    // document.getElementById('output').innerHTML = '<h3> Your name is: '+e.target.value+'<h3/>';

    /**
 * Handles an event by logging its type and displaying the mouse coordinates.
 * 
 * param {Event} e - The event object containing information about the triggered event.
 * 
 * Note: The variable `output` is used here without being explicitly defined in this function.
 * It is assumed that `output` is a reference to a DOM element available in the outer scope.
 */

    // output.innerHTML = "<h3>MouseX:" +e.offsetX+ " </h3><h3>MouseY: "+ e.offsetY + "</h3>"; 
    // Change the box's background color based on mouse position (red = offsetX, green = offsetY, blue = 40)
    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"; // Or box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;


}

