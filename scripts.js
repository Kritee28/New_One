window.onload = function() {
    document.getElementById('popup').style.display = 'block';
};

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    setTimeout(showEnvelope, 500);
}

function showEnvelope() {
    const envelope = document.getElementById('envelope');
    envelope.classList.remove('hidden');
    envelope.querySelector('.envelope-top').onclick = function() {
        envelope.querySelector('.letter').classList.remove('hidden');
    };
}

function showFlowers() {
    document.getElementById('flowers').classList.remove('hidden');
}

document.querySelector('.letter').addEventListener('animationend', function() {
    setTimeout(showFlowers, 2000);
});