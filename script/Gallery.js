//load image




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
},
{
    id: 3,
    src: "../image/7123025_logo_google_g_icon.png",
    title:"Google",
    Description: "Worlds Best Company"
}
,{
    id: 4,
    src: "../image/7123025_logo_google_g_icon.png",
    title:"Google",
    Description: "Worlds Best Company"
}
,{
    id: 5,
    src: "../image/7123025_logo_google_g_icon.png",
    title:"Google",
    Description: "Worlds Best Company"
}



]
function loadGallery() {
    // Check if galleryList exists
    let galleryContainer = document.getElementById('galleryList');
    
    // Retrieve gallery data from localStorage
    let storedGallery = localStorage.getItem('galleryData');
    let galleryIamge = storedGallery ? JSON.parse(storedGallery) : [];
    
    if (galleryContainer && galleryIamge.length > 0) {
        // Clear previous content
        galleryContainer.innerHTML = '';
        
        for (let gallery of galleryIamge) {
            let displayGallery = document.createElement('div');
            displayGallery.classList.add('card');
            displayGallery.style.width = '15rem';

            let imageContainer = document.createElement('img');
            imageContainer.src = gallery['src'];
            imageContainer.classList.add('card-img-top');

            let card_Body = document.createElement('div');
            card_Body.classList.add('card-body');

            let card_Title = document.createElement('h5');
            card_Title.classList.add('card-title');
            card_Title.innerHTML = gallery['title'];

            let card_Text = document.createElement('p');
            card_Text.classList.add('card-text');
            card_Text.innerHTML = gallery['Description'];

            card_Body.appendChild(card_Title);
            card_Body.appendChild(card_Text);
            displayGallery.appendChild(imageContainer);
            displayGallery.appendChild(card_Body);
            galleryContainer.appendChild(displayGallery);
        }
    } else {
        console.log("No gallery container found or no images to display");
    }
}

loadGallery();



function formLoad(){
    let form = document.getElementById("arrayForm");
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let fileImage = form.image.files[0];
            let reader = new FileReader();

            reader.onload = function(e) {
                let formObjectData = {
                    id: galleryIamge.length + 1,
                    title: form.title.value,
                    Description: form.Description.value,
                    src: e.target.result,
                };
                
                // Push the new gallery item into the array
                galleryIamge.push(formObjectData);

                // Save the updated gallery array to localStorage
                localStorage.setItem('galleryData', JSON.stringify(galleryIamge));

                console.log(galleryIamge);

                form.reset();
            };

            // Read the image as a DataURL
            reader.readAsDataURL(fileImage);
        });
    }
}
formLoad();