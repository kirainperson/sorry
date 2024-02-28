


function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
       
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#c90e50', '#b35073', '#ad1c3b', '##470412', '#3d0205', '#472224', '#c90a5a'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); 
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; 
        if (callback) {
            callback();
        }
    }, 2000); 
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; 
    catImage.alt = 'Cat';
    
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
   
    document.getElementById('image-container').innerHTML = '';
    
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();

    catHeartImage.src = 'cat-heart.gif'; 
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
       
        document.getElementById('options').style.display = 'none';
    };
}


displayCat();