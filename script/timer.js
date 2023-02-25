const timer = () => {
    const timer = document.createElement('div');
    const timerText = document.createElement('p');
    const timerCount = document.createElement('span');

    timer.classList.add('timer');
    timerText.classList.add('timer__text');
    timerCount.classList.add('timer__count');

    timerText.textContent = 'До конца распродажи осталось: ';
    timerCount.textContent = '3 дня 12 часов 10 минут 5 секунд';

    timerText.append(timerCount);
    timer.append(timerText);
    document.body.prepend(timer);

    const startTimer = () => {
        const deadline = new Date(2023, 1, 25, 23, 33, 0);
        const now = new Date();
        const timeRemaining = deadline - now;
        console.log('timeRemaining: ', timeRemaining);



        if (timeRemaining > 0) {
            setTimeout(startTimer, 1000)
        } else {
            timer.remove();
        }
    }

    startTimer();
};




timer();