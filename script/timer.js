const declOfNum = (n, titles) => titles[n % 10 === 1 && n % 100 !== 11 ?
    0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];


const timer = () => {
    const timer = document.createElement('div');
    const timerText = document.createElement('p');
    const timerCount = document.createElement('span');

    timer.classList.add('timer');
    timerText.classList.add('timer__text');
    timerCount.classList.add('timer__count');

    timerText.textContent = 'До конца распродажи осталось: ';
    

    timerText.append(timerCount);
    timer.append(timerText);
    document.body.prepend(timer);

    const startTimer = () => {
        const deadline = new Date(2023, 2, 28, 23, 33, 0);
        const now = new Date();
        const timeRemaining = (deadline - now) / 1000;

        const seconds = Math.floor(timeRemaining % 60);
        const minutes = Math.floor(timeRemaining / 60 % 60);
        const hours = Math.floor(timeRemaining / 60 / 60 % 24);
        const days = Math.floor(timeRemaining / 60 / 60 / 24 % 30);
        console.log('days: ', days, 'hours: ', hours, 'minutes: ', minutes, 'seconds: ', seconds);

        declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
        declOfNum(minutes, ['минута', 'минуты', 'минут']);
        declOfNum(hours, ['час', 'часа', 'часов']);
        declOfNum(days, ['день', 'дня', 'дней']);


        timerCount.textContent = `${days} дня ${hours} часов ${minutes} минут ${seconds} секунд`

        if (timeRemaining > 0) {
            setTimeout(startTimer, 1000)
        } else {
            timer.remove();
        }
    }

    startTimer();
};




timer();