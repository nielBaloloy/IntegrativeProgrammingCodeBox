let products = [
    { name: "John", age: 29, email: "accessories@gmail.com", password: "Accessories", image: "../image/11120556_fi_brands_airbnb_icon.png" },
];


function displaydata(){

    
let list = document.getElementById('list');
list.innerHTML = "";
products.forEach(product => { let card = document.createElement('div');
        let img = document.createElement('img');
        let text = document.createElement('div');
        img.style.width="20px";
        img.style.height="20px";
        card.classList.add('card');
        img.src = product.image; // Set the image source
     
        text.innerHTML = `Name: ${product.name}<br>Age: ${product.age}`;
        
        card.appendChild(img);
        card.appendChild(text);
        list.appendChild(card);
 
})
}
displaydata();


let form = document.getElementById("arrayForm");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    //locate form.image.files[0]
    let fileImage= form.image.files[0];
    //create a new FileReader()
    let reader = new FileReader();
    //load the reader via reader.onload=function()
    reader.onload = function(e){
        let formObjectData = {
            name:form.name.value,
            age: form.age.value,
            email: form.email.value,
            password: form.password.value,
            image: e.target.result,
        }
      
        products.push(formObjectData);
        console.log(products);
        displaydata();
    
        form.reset();
    }
    //readAsDataURL() method reads the file as a data URL
    reader.readAsDataURL(fileImage);
 });





