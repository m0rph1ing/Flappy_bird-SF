// создаём все нужные объекты
const score = new Score();
const gReady = new getReady()
const gOver = new gameOver();
const bg = new Background();
const fg = new Foreground();
const bird = new Bird();
const pipes = new Pipes()

// Обработчик клика на экране
canvas.addEventListener('click', (event) => {
  if (!canvas || !bird || !pipes || !score || !startBtn) {
    console.error('Одна или несколько необходимых переменных не определены.');
    return;
  }
  // Константы для определения координат клика и обработки нажатия кнопки "Start"
  const {left, top} = canvas.getBoundingClientRect();
  const clickX = event.clientX - left;
  const clickY = event.clientY - top;

  if (state.current === state.getReady) { // Если игра еще не начата, то начать
    state.current = state.game;
  } else if (state.current === state.game) { // Если игра идет, то обработать клик 
      event.preventDefault();
      handleFlap();
    
  } else if (state.current === state.over && isClickOnStartBtn(clickX, clickY)) { // Если игра окончена, то обработать клик на кнопку "Start"
    resetGame();
  }
});

// Обработчик нажатия пробела для управления птицей
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    handleFlap();
  }
});

// обработчик события для управления на телефоне
// canvas.addEventListener('touch', (event) => {
  // event.preventDefault();
 // if (state.current === state.game) {
   // handleFlap();
//  } else if (state.current === state.over && isClickOnStartBtn(event.touches[0].clientX, event.touches[0].clientY)) {
 //   resetGame();
//  }
//});


// Функция обработки нажатия на птицу
function handleFlap() {
  if (bird.y - bird.radius > 0) { // Если птица не достигла верхней границы экрана, то "поднять" птицу
    bird.flap();
  }
}

// Функция, определяющая, нажата ли кнопка "Start"
function isClickOnStartBtn(clickX, clickY) {
  const { x, y, w, h } = startBtn;
  return clickX > x && clickX < x + w && clickY > y && clickY < y + h;
}

// Функция отрисовки элементов на экране
function draw() {
    context.fillStyle = "#70c5ce";
    context.fillRect(0, 0, canvas.width, canvas.height);
   
    bg.draw();
    pipes.draw();
    fg.draw();
    bird.draw();
    gReady.draw();
    gOver.drawGameOver();
    score.draw();
}

// функция ресета игры
function resetGame() {
  pipes.reset();
  bird.speedReset();
  score.reset();
  bg.draw(); 
  state.current = state.getReady;
}

// функция запуска игры и обратотки анимации
function loop(){
    let currentTime = performance.now();
    let elapsed = currentTime - lastFrameTime;
    if (elapsed < frameDelay) {
    // Если прошло меньше времени, чем задержка между кадрами, ждем оставшееся время
      setTimeout(loop, frameDelay - elapsed);
      return;
    }

  // Обновляем последнее время кадра
    lastFrameTime = currentTime;
  
    pipes.update();
    bird.update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}

let lastFrameTime = performance.now();
loop();
