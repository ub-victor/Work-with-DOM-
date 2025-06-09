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

//QUERYSELECTOR//

var header = document.querySelector('#main-header');

if (header) {
	header.style.borderBottom = 'solid 4px #ccc';
} else {
	console.warn("Element with id 'main-header' not found.");
}

