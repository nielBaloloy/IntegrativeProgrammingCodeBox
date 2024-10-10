let galleryIamge = []; // Initialize as an empty array

function loadGallery() {
    // Check if galleryList exists
    let galleryContainer = document.getElementById('galleryList');
    
    // Retrieve gallery data from localStorage
    let storedGallery = localStorage.getItem('galleryData');
    galleryIamge = storedGallery ? JSON.parse(storedGallery) : []; // Use stored data if available
    
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
                console.log(galleryIamge);
                
                // Save the updated gallery array to localStorage
                const sizeLimit = 5 * 1024 * 1024;
                let item = JSON.stringify(galleryIamge);
                if (item.length < sizeLimit) {
                    localStorage.setItem('galleryData', item);
                    console.log('Data stored successfully');
                } else {
                    console.error('Data too large to store in localStorage');
                }

                form.reset();
                loadGallery(); // Reload the gallery to display new item
            };

            // Read the image as a DataURL
            reader.readAsDataURL(fileImage);
        });
    }
}
formLoad();
