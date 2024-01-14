let answers = [];

document.getElementById('nextButton').addEventListener('click', function() {
    let inputVal = document.getElementById('inputField').value;
    if(inputVal.trim() !== '') {
        answers.push(inputVal);
        document.getElementById('inputField').value = '';
    }
    document.getElementById('endButton').style.display = 'block';
});

document.getElementById('endButton').addEventListener('click', function() {
    document.getElementById('app').style.display = 'none';
    let randomAnswers = answers.sort(() => Math.random() - 0.5);
    document.getElementById('result').innerHTML = randomAnswers.join('<br>');
    document.getElementById('result').style.display = 'block';
    document.getElementById('resetButton').style.display = 'block';
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('app').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.getElementById('resetButton').style.display = 'none';
    answers = [];
});

