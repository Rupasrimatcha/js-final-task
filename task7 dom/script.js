//selecting old method --array format it will print

//tagname - getElementByTagName

let tags=document.getElementsByTagName("h1")

console.log(tags);

//classname  - getElementByClassName

let class1 = document.getElementsByClassName("first")

console.log(class1);

console.log(class1[1]);


//idname
 let id1 = document.getElementById("second")

 console.log(id1);
 
//advanced --directly return the tag values

//qyeryselector

let tag2=document.querySelector("h2")
console.log(tag2);

let class2=document.querySelector(".one")
console.log(class2);



let id2=document.querySelector("#two")
console.log(id2);


//querySelectorAll
let h3= document.querySelectorAll("h3")
console.log(h3);

console.log(h3[2]);



//traversing 
// try to select one tag to another tag

//parentEelement

let child1=document.querySelector(".child1")
console.log(child1);
console.log(child1.parentElement);



//childElement

//siblingElement