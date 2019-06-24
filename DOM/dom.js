let val;
val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;// how many form
val = document.forms[0];//list what's inside the form
val = document.forms[0].id;//to get the ID
val = document.forms[0].method;//get is default
val = document.forms[0].action;//action = "add.php"/ - 127.0.../add.php
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].class;
val = document.links[0].className[1];//e
val = document.links[0].classList[1];//secondary content

val = document.images;
val = document.scripts;

//convert to array
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
});//function inside foreach is a callback

console.log(val);

