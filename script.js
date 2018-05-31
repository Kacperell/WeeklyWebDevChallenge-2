let flag = 0;
const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        if (flag == 0) {
            document.body.classList.remove('fixed-nav');
            document.body.style.paddingTop = 0;
        }
    }
}
window.addEventListener('scroll', fixNav);
const hambureger = document.querySelector('#nav-iconHamburger');
const ull = document.querySelector('#navul');
hambureger.onclick = function() {
    if (flag == 0) {
        ull.classList.add('isVisable');
        document.body.classList.add('fixed-nav');
        hambureger.classList.add('open');
        flag = 1;
    } else {
        ull.classList.remove('isVisable')
        hambureger.classList.remove('open');
        flag = 0;
    }
};
//360 rotate image cup
const cup = document.querySelector(".cup");
cup.onclick = function() {
    cup.classList.add('transist');
    setTimeout(myFunc => {
        cup.classList.remove('transist');
    }, 1000);
};
//on Click navLink close NaV (on mobile)
const NavLinks = document.querySelectorAll('.NavLinks');
for (var i = 0, len = NavLinks.length; i < len; i++) {
    NavLinks[i].onclick = function() {
        ull.classList.remove('isVisable')
        hambureger.classList.remove('open');
        flag = 0;
    }
}
const butonAJAX = document.querySelector('.viewmore');

function readResponseAsBlob(response) {
    return response.blob();
}

function logError(error) {
    console.log('Looks like there was a problem: \n', error);
}

function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function showImage(responseAsBlob) {
    var container = document.querySelector('.pophotos');
    var imgElem = document.createElement('img');
    container.appendChild(imgElem);
    var imgUrl = URL.createObjectURL(responseAsBlob);
    imgElem.src = imgUrl;
}

function fetchImage(pathToResource) {
    fetch(pathToResource)
        .then(validateResponse)
        .then(readResponseAsBlob)
        .then(showImage)
        .catch(logError);
}
let FlagOpenPhotos = true;
butonAJAX.onclick = function() {
    if (FlagOpenPhotos) {
        fetchImage('img/fruits1.jpeg');
        fetchImage('img/fruits3.jpg');
        FlagOpenPhotos = false;
        document.querySelector(".motionButton").classList.remove('motionButton');
    }

}
