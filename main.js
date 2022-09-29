/*

function name: xify
parameters: 1 string
return type: string
-- the easiest way to work on this is to use your original to become the new string by creating an empty variable with a new string "";
-- the new string starts at 0 and is what we are building to. 
*/


function xify(inputStr){
  let newStr = "";

  for (let i = 0; i < inputStr.length; i++){
    newStr += "x"
  }
return newStr;

}
console.log(xify("Hello"));
console.log(xify("Hi There"));

/*

yellingChars
-function name: yellingChar
-parameters: string
- return new string
- These problems differ INSIDE the for loop
- we need to add += !
- we add back the original characters
*/

function yellingChars(str){
  
  let newStr = ""; // always need this new variable

  for (let i = 0; i < str.length; i++){
    newStr += str[i]; // retains current character at the original point in the loop
    newStr += "!"; // adds ! to str[i]

        //or newStr += str[i] + "!";
  }
  return newStr;
}
console.log(yellingChars("goodness"));
console.log(yellingChars("oh hello"));

/*

indexedChars
- parameters: string
- need to add index of each character at i [i]
- need for loop
- need new variable
- need to add the at index 

*/

function indexedChars(str2){

  let newStr = ""; 

  for (let i = 0; i < str2.length; i++){
    //newStr += str[i] // retains current character at the original point in the loop
    
    //newStr += str2.indexOf(str2[i]); // adds index number
    
    newStr += i; // adds index number
    newStr += str2[i];
        //or newStr += str[i] + "!";
  }
  return newStr;
}
console.log(indexedChars("hello"));
console.log(indexedChars("bye"));

/*

exclaim!
- convert all question marks into !
-string stays intact
-for loop
-take in string as a parameter -- (str2)
-using a new empty string --let newStr "":
-looping in a new string
-need an if statement -- if (str[i] === "?" || "."){
  newStr += "1";
}
- use an or -- || str[i] ===
-return new string


*/

function exclaim(str3){
  
  let newStr = "";

  for(i = 0; i < str3.length; i++){

      if(str3[i] === "?" || str3[i] === "."){ // make sure you do full statement for both arguments
        newStr += "!";

    } else { 
      newStr += str3[i];
    
    }
  } 
    return newStr;
}

console.log(exclaim("What are you doing? Are you a fool?"));

/*
- Take string ans shorten it to 15 character
- add an 4 dot elipses at the end of the str

need:
- new empty string
- need for loop
- need to account for [i]
- don't do the ... inside the loop. You do code outside of the loop if it is an action you DO NOT want to repeat - use the loop for actions that ARE repeating. 

*/

function truncate(str5){

    let newStr = "";

    for(let i = 0; i < 15; i++){

      newStr += str5[i];

    }
   
    return newStr + "...";

}

console.log(truncate("The fault, dear Brutus, is not in our stars, but in ourselves."));


/*
- take a two part name
- change the space to a period in between names
- add @codeimmersives.com at the end of the string
-change case .toLowerCase
*/

function ciEmailify(oldString){

let newStr = "";

  for(let i = 0; i < oldString.length; i++){
  
      if(oldString[i] === " "){
        newStr += "."
      }else {
        newStr += oldString[i];
      
      }

  }
 
return newStr.toLowerCase() + "@codeimmersives.com";
}

console.log(ciEmailify('William McKeever'))

/*
- take in a string 
- reverse the string
*/

function reverse(str7){

let newStr = "";

for (let i = str7.length - 1; i >= 0; i--) {
  newStr += str7[i];
}
return newStr;
}
console.log(reverse("colin"));
console.log(reverse("mesuara"));


/*
onlyVowels
- need to take in a string
-need to search for vowels only
- need to RETURN only vowels
*/

function onlyVowels(string){

  let newStr = "";

  for(i = 0; i < string.length; i++){

      if(string[i].toLowerCase() === "a" || string[i].toLowerCase() === "e" || string[i].toLowerCase() === "o" || string[i].toLowerCase() === "u"){
      
       
        newStr += string[i];   
    } 
  }
  return newStr;
}

console.log(onlyVowels("Colin Jaffe"));
console.log(onlyVowels("quickly"));
console.log(onlyVowels("Anthony DeRosa"));