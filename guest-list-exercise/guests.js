const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']; 

function guestListChecker() { 

}

for(const person in people){ 
    if(person === "Phil" || person === "Lola"){ 
        refused.textContent += person; 
    } else { 
        admitted.textContent += person;
    }
}
people.forEach((person) => { 
    if(person === "Phil" || person === "Lola"){ 
        refused.textContent += `${person} `; 
    } else { 
        admitted.textContent += `${person} `;
    }
}


)