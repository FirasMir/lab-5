

function createImgElement(photoURL){
    const imgElem = document.createElement('img');
    imgElem.src = photoURL;
    return imgElem;
}

function addPhotoToGallery(imgElem){
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(imgElem);
}

function addDeleteButton(imgElem){
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', function() {
        imgElem.remove();
        deleteButton.remove();
    });
    const photoGalleryDiv = document.getElementById('photo-gallery');
    photoGalleryDiv.appendChild(imgElem);
}

function addPhoto(){
    const photoURL = prompt("Enter the URL of the photo:")
    const imgElem = createImgElement(photoURL);
    addPhotoToGallery(imgElem);
    addDeleteButton(imgElem);
    
}

const addPhotoBtn = document.getElementById('addPhotoBtn');
addPhotoBtn.addEventListener('click', addPhoto);