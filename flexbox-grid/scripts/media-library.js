const mediaLibrary = document.getElementById("media-library");
const mediaLibraryItemTemplate = document.getElementById("template-media-library-item")

// Vul de library met de waarden uit de musicLibrary array

const updateMediaLibrary = () => {
    musicLibrary.forEach((item, index) => {
        const domElement = document.createElement("div");
        domElement.classList.add("media-library-item");
        domElement.addEventListener('click', () => {
            playSong(index);
        });
        // Clone the template content
        const clone = document.importNode(mediaLibraryItemTemplate.content, true);
        
        clone.querySelector('.media-library-album').src = item.albumCover;
        clone.querySelector('.media-library-artist').textContent = item.artist;
        clone.querySelector('.media-library-song').textContent = item.title;
        
        // Append the clone to the container
        domElement.appendChild(clone);
        mediaLibrary.appendChild(domElement);
    });
}

// Shuffle musicLibrary array
const shuffleMusic = () => {
    mediaLibrary.innerHTML = '';

    // Meer details over verschillende shuffle algoritmes: https://bost.ocks.org/mike/shuffle/
    musicLibrary.sort(() => Math.random() - 0.5);

    updateMediaLibrary(true);
}


// Vul de library met de waarden uit de musicLibrary array
document.addEventListener('DOMContentLoaded', () => {
    const toggleViewButton = document.getElementById('toggleView');
    const mediaLibrary = document.getElementById('media-library');
    
    toggleViewButton.addEventListener('click', () => {
        if (mediaLibrary.classList.contains('__isGrid')) {
            mediaLibrary.classList.remove('__isGrid');
            mediaLibrary.classList.add('__isList');
            toggleViewButton.classList.remove('__isGrid');
            toggleViewButton.classList.add('__isList');
        } else {
            mediaLibrary.classList.remove('__isList');
            mediaLibrary.classList.add('__isGrid');
            toggleViewButton.classList.remove('__isList');
            toggleViewButton.classList.add('__isGrid');
        }
    });
});


updateMediaLibrary()