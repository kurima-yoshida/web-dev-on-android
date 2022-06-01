let gameState = 'title';
let elapsedSeconds = 0;
let gameTimer = null;
let touchNumber = 0;
let highScoreTouchNumber = 0;

function handleTouch() {
    if (gameState === 'title') {
        gameState = 'beforeGame'
        elapsedSeconds = 0;
        gameTimer = setInterval(handleTimer, 1000);
        touchNumber = 0;
    } else if (gameState === 'game') {
        touchNumber++;
        if (touchNumber > highScoreTouchNumber) {
            highScoreTouchNumber = touchNumber;
        }
    } else if (gameState === 'result') {
        gameState = 'title'
    }
    updateScreen();
}

function handleTimer() {
    elapsedSeconds++;
    if (elapsedSeconds === 1) {
        gameState = 'game';
    } else if (elapsedSeconds === 1 + 10) {
        gameState = 'afterGame';
    } else if (elapsedSeconds === 1 + 10 + 3) {
        gameState = 'result';
        clearInterval(gameTimer);
        gameTimer = null;
    }
    updateScreen();
}

function updateScreen() {
    if (gameState === 'title') {
        document.getElementById('message').style.display = 'block';
        document.getElementById('remaining-time').style.display = 'none';    
        document.getElementById('score').style.display = 'none';    
        document.getElementById('high-score').style.display = 'none';    
        document.getElementById('message').innerText = 'Tap To Start';
    } else if (gameState === 'beforeGame') {
        document.getElementById('message').innerText = 'Ready...';    
    } else if (gameState === 'game') {
        document.getElementById('message').style.display = 'none';
        document.getElementById('remaining-time').style.display = 'block';    
        document.getElementById('score').style.display = 'block';    
        document.getElementById('high-score').style.display = 'block';    
        let remainingTime = 1 + 10 - elapsedSeconds;
        document.getElementById('remaining-time-value').innerText = remainingTime;    
        document.getElementById('score-value').innerText = touchNumber;    
        document.getElementById('high-score-value').innerText = highScoreTouchNumber;    
    } else if (gameState === 'afterGame') {
        document.getElementById('remaining-time-value').innerText = 0;
    } else if (gameState === 'result') {
        document.getElementById('remaining-time').style.display = 'none';    
    }
}

setTimeout(updateScreen);
