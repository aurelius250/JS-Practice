function countdown() { 

    for(let i = 10; i > 0; i--){ 
        if(i === 10){ 
            const para = document.createElement('p'); 
            para.textContent = "Countdown 10"; 
            output.appendChild(para);
        }
        else if(i === 0){
        const para = document.createElement('p'); 
        para.textContent = "Blast off!"; 
        output.appendChild(para);
        } 
        else{ 
            const para = document.createElement('p'); 
            para.textContent = i; 
            output.appendChild(para);
        }

    }
}

while(i > 0) { 
    if(i === 10){ 
        const para = document.createElement('p'); 
        para.textContent = "Countdown 10"; 
        output.appendChild(para);
        i--;
    }
    else if(i === 0){
    const para = document.createElement('p'); 
    para.textContent = "Blast off!"; 
    output.appendChild(para);
    } 
    else{ 
        const para = document.createElement('p'); 
        para.textContent = i; 
        output.appendChild(para);
        i--;
    }
}

let output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
