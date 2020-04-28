const dogButton = document.getElementById('dog-button');


dogButton.addEventListener('click', function () {
    dogButton.textContent = 'Generating Doggo...';
    $.get('https://dog.ceo/api/breeds/image/random').then(function (data) {
        const img = document.createElement('img');
        console.log('data = ', data);
        img.setAttribute('src', data.message);

        const imagesDiv = document.getElementById('images');
        imagesDiv.innerHTML = '';
        imagesDiv.appendChild(img);

        dogButton.textContent = 'Generate Doggo';
    });

});