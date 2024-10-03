
let user=[
    {name: 'John',
     email: 'john@gmail.com', 
     password: '123',
     age: 99, 
     image: '../image/11120556_fi_brands_airbnb_icon.png'
    }
    ];
//display FormData
function displayFormData(){
    let resultDisplay = document.getElementById('list');
    resultDisplay.innerHTML ="";
    user.forEach(item =>{
        let text = document.createElement('p');
        let image = document.createElement('img');
        image.src=item.image;
        image.style.width="20px";
        image.style.height="20px";
        console.log(item);
        text.innerHTML =`Name: ${item.name}<br> Email: ${item.email}`;
        resultDisplay.appendChild(image);
        resultDisplay.appendChild(text);
})
}
displayFormData();

//form
let form = document.getElementById('arrayForm')
form.addEventListener('submit',function(event){
    event.preventDefault();
    let image = form.image.files[0];
   
    let reader = new FileReader();
    reader.onload = function(e){
        let ObjectFormValue = {
            name :form.name.value,
            age :form.age.value,
            email : form.email.value,
            password: form.password.value,
            image: e.target.result,
        }
       
        user.push(ObjectFormValue);
        console.log(user);
        displayFormData();
    };
   
    reader.readAsDataURL(image);

});
