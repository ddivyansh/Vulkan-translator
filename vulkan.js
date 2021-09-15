
//NOTE: THE JS FILE IS LINKED AT THE END OF BODY TO PREVENT IT FROM RUNNING AT THE BEGINNING.

//THIS API HAS A LIMIT OF 5 PER HOUR !!!!

//url for the api, we've to fetch the api using the link

var url="https://api.funtranslations.com/translate/vulcan.json" 
//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
//the format has to be .json?text=randon_text

//text we want to translate, first we have to get it from HTML document using DOM principles
var text= document.querySelector("#txt-one");
var button=document.querySelector(".btn-style");

//function for url
function urlGenerator(inputText)
{
    
    return url+"?text="+inputText;
}
//output function
function translatedText(out)
{
    var outText= document.querySelector("#txt-two");
    outText.innerText =out;
}

//function that performs as per click
function clickHandler()
{
var inputText=text.value;
console.log(inputText)
//how fetch works[IMP !!]
fetch(urlGenerator(inputText))
.then(Response=>Response.json())
.then(json=>translatedText(json.contents.translated));
}

//now for click event 
//notes: there are no braces after clickHandler
button.addEventListener("click", clickHandler);
