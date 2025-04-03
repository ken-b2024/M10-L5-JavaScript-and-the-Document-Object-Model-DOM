//  Part I

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayContent() {
    const content = document.getElementById('box');

    products.forEach(product => {
        let p = document.createElement('p');
        p.textContent = `${product.name}: ${product.price}: ${product.description}:`;
        content.appendChild(p);
    });
}

document.getElementById('box').addEventListener('load', displayContent());


// Part II

(() => {
    'use strict'
    
    const forms = document.querySelectorAll('.needs-validation')
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }else {
                event.preventDefault(); 
                handleSubmit(event);
            }
            
            form.classList.add('was-validated')
        }, false);
    });
})();

let userData = {};

function handleSubmit(event) {
    event.preventDefault();
    
    userData = {
        name: document.getElementById('nameInput').value,
        email: document.getElementById('emailInput').value,
        message: document.getElementById('messageInput').value
    };

    console.log("User Data:", userData);
    
    const name = document.getElementById('nameInput').value;
    alert("Thank you, " + name + "! Form submitted successfully.");
    
    document.getElementById('myForm').reset();
};


// Part III

function highlight() {
    document.getElementById('element1').classList.add('highlighted');
}

function changeSize() {
    document.getElementById('element2').style.width = '90px';
}
function returnSize() {
    document.getElementById('element2').style.width = 'auto';
}

function textColor() {
    document.getElementById('element3').style.color = 'lightgreen';
}

function changeColor() {
    document.getElementById('box1').style.backgroundColor = "blue";
}

function changeText() {
    let element = document.getElementById('element5');
    element.style.fontStyle = 'italic';
    element.style.fontWeight = 'bold';
}