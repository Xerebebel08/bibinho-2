document.getElementById('sendButton').addEventListener('click', function() {
    const userNumber = document.getElementById('userNumber').value;
    if (userNumber < 1 || userNumber > 10 || isNaN(userNumber)) {
        alert('Por favor, digite um número entre 1 e 10.');
        return;
    }
    
    document.getElementById('inputWindow').classList.add('hidden');
    document.getElementById('loadingWindow').classList.remove('hidden');
    
    const loadingMessages = [
        "Analisando seu cérebro",
        "Procurando com o que você sonhou na noite passada",
        "Descobrindo traumas da sua infância",
        "Calculando"
    ];
    
    let messageIndex = 0;
    const progressBar = document.getElementById('progressBar');
    let progress = 0;

    const loadingInterval = setInterval(() => {
        progress += 2;
        progressBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(loadingInterval);
            document.getElementById('loadingWindow').classList.add('hidden');
            document.getElementById('resultWindow').classList.remove('hidden');
            document.getElementById('resultMessage').textContent = `Você pensou no número ${userNumber}`;
        } else if (progress % 25 === 0 && messageIndex < loadingMessages.length) {
            document.getElementById('loadingMessage').textContent = loadingMessages[messageIndex];
            messageIndex++;
        }
    }, 300);
});
