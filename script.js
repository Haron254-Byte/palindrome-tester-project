let userInput = document.getElementById("text-input");
const result = document.getElementById("result-box");
const button = document.getElementById("check-btn");
const resultText = document.getElementById("result"); 


function preprocessText(text) {

  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}


function reverseString(text) {
  return text.split('').reverse().join('');
}

button.addEventListener("click", function () {
  let typed = userInput.value.trim(); 

  
  if (typed === "") {
    alert("Please input a value");
    return;
  }

  
  let processedInput = preprocessText(typed);


  let reversedInput = reverseString(processedInput);

  
  if (processedInput === reversedInput) {
    resultText.textContent = `${typed} is a palindrome`;  
    resultText.style.color = "green"; 
  } else {
    resultText.textContent = `${typed} is not a palindrome`;  
    resultText.style.color = "red";  
  }
});
