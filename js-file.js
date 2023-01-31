// const redParagraph = document.createElement("p"); 
// redParagraph.classList.add("red-paragraph")
// redParagraph.style.color = "red"; 
// redParagraph.textContent = "Hey I'm red!";
// const body = document.querySelector("body"); 
// body.appendChild(redParagraph);

// const blueHeading = document.createElement("h3");
// blueHeading.classList.add("blue-heading"); 
// blueHeading.style.color = "blue";
// blueHeading.textContent = "I'm a blue h3!"
// body.appendChild(blueHeading);

// const pinkDiv = document.createElement("div"); 
// pinkDiv.classList.add("pink-div"); 
// pinkDiv.style.backgroundColor = "pink"; 
// pinkDiv.style.border = "solid black 2px"; 

// const headingInDiv = document.createElement("h1"); 
// headingInDiv.classList.add("heading-in-div"); 
// headingInDiv.textContent = "I'm in a div"; 
// pinkDiv.append(headingInDiv);

// const paragraphInDiv = document.createElement("p"); 
// paragraphInDiv.textContent = "ME TOO!"; 
// paragraphInDiv.classList.add("paragraph-in-div");
// pinkDiv.append(paragraphInDiv);

// body.appendChild(pinkDiv);

// const btn = document.querySelector('#btn');

// btn.addEventListener("click", function (e) { 
//     e.target.style.background = "blue";
// });

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => { 
    button.addEventListener("click", () => { 
        alert(button.id); 
    })
})
