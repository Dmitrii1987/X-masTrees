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