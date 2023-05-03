
window.onload = function() {
    const generateButton = document.getElementById('generate');

    generateButton.addEventListener('click', () => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceText = data.slip.advice;
            document.querySelector('#advice-text').textContent='"'+adviceText+'"';
            const adviceId = data.slip.id;
            document.querySelector('#advice-id').textContent="A D V I C E  # " + adviceId.toString();
        });
    });

    generateButton.click();
}

