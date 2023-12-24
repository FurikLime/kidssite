

document.getElementById('vkButton').addEventListener('click', function() { 
    window.location.href = 'https://vk.com';
});

document.getElementById('okButton').addEventListener('click', function() {
    window.location.href = 'https://ok.ru';
});

document.getElementById('youtubeButton').addEventListener('click', function() {
    window.location.href = 'https://youtube.com';
});

window.onscroll = function() {
    var buttons = document.querySelector('.social-buttons');
    if (window.pageYOffset > 100) {
        buttons.style.visibility = 'visible';
    } else {
        buttons.style.visibility = 'hidden';
    }
};

function progressBar() {
    
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    let scrolled = scroll / height * 100;

    document.getElementById('progressBar').style.width = scrolled + '%';
}

window.addEventListener('scroll', progressBar);
