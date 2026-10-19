function countVowels(){
    inputParagraph = document.getElementById("inputPara").value
    console.log(inputParagraph)
    console.log(typeof inputParagraph)
    vowels = "aeiouAEIOU"
    len = inputParagraph.length
    count = 0
    for(i=0; i< len; i++){
        if(vowels.includes(inputParagraph.charAt(i))){
            count++
        }
    }
    document.getElementById("result").textContent = `Vowels in given paragraph:
     ${count}`
}




function countConsonants(){
    let inputParagraph = document.getElementById("inputPara").value
    console.log(inputParagraph)
    console.log(typeof inputParagraph)
    consonents = "bcdfghjklmnpqrstvwxyzBCDFGGJKLMNPQRSTVWXYZ"
    len = inputParagraph.length
    let count = 0
    for( let i=0; i< len; i++){
        if(consonents.includes(inputParagraph.charAt(i))){
            count++
        }
    }
    document.getElementById("result").textContent = `consonents in given paragraph:${count}`;
}




function ispalidrome() {
    inputParagraph = document.getElementById("inputPara").value
     reversed = ""
    len = inputParagraph.length

    for ( i= len; i>=0; i--){
        reversed += inputParagraph.charAt(i);
    }
    console.log(reversed)
    if(inputParagraph === reversed){
        document.getElementById("result").textContent = "Its Palidrom"
    }else{
        document.getElementById("result").textContent = "Its Not Palidrom"
    }
}


function countLines(){
    let inputParagraph = document.getElementById("inputPara").value
    
    let count = inputParagraph === " " ? 0 : inputParagraph.split("/n").length;
    
    document.getElementById("result").textContent = `Lines in given paragraph : ${count}`;
}



function countSpaces(){
    let inputParagraph = document.getElementById("inputPara").value
    console.log(inputParagraph)
    console.log(typeof inputParagraph)
    let spaces = " "
    len = inputParagraph.length
    let count = 0
    for( let i=0; i< len; i++){
        if(spaces.includes(inputParagraph.charAt(i))){
            count++
        }
    }
    document.getElementById("result").textContent = `Spaces in given paragraph:${count}`;
}


function convertUppercase() {
    let inputParagraph = document.getElementById("inputPara").value;

    let upperCaseText = inputParagraph.toUpperCase();

    document.getElementById("result").textContent =
        `Uppercase paragraph: ${upperCaseText}`;
}


function convertLowercase() {
     let inputParagraph = document.getElementById("inputPara").value;

    let lowerCaseText = inputParagraph.toLowerCase();

    document.getElementById("result").textContent =
        `Lowercase paragraph: ${lowerCaseText}`;
}



function convertCamelCase() {
    let inputParagraph = document.getElementById("inputPara").value;

    let words = inputParagraph.toLowerCase().split(" ");
    let camelCaseText = "";

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            camelCaseText += words[i];
        } else if (words[i] !== "") {
            camelCaseText +=
                words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    document.getElementById("result").textContent =
        `Camel Case: ${camelCaseText}`;
}