//load image
let galleryContainer = document.getElementById('galleryList');
let galleryIamge = [{

    id: 1,
    src: "../image/11120556_fi_brands_airbnb_icon.png",
    title:"AirBNB",
    Description: "Worlds Best Accomodation"
},

{

    id: 2,
    src: "../image/7123025_logo_google_g_icon.png",
    title:"Google",
    Description: "Worlds Best Company"
}]
function loadGallery(){
    for(let gallery of galleryIamge){
        let displayGallery = document.createElement('div');
        displayGallery.classList.add('card');
        displayGallery.style.width = '15rem';   

        let imageContainer = document.createElement('img');
        imageContainer.src=gallery['src'];

        let card_Body = document.createElement('div');
        card_Body.classList.add('card-body');

        let card_Title = document.createElement('div');
        card_Title.classList.add('card-title');

        let card_Text = document.createElement('div');

        card_Title.innerHTML = gallery['title'];

        card_Text.innerHTML = gallery['Description'];

        card_Body.appendChild(card_Title);
        card_Body.appendChild(card_Text);
        displayGallery.appendChild(imageContainer);
        displayGallery.appendChild(card_Body);
        galleryContainer.appendChild(displayGallery);
    }
}
loadGallery();