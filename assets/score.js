// определяем класс счёта
class Score {
    constructor() {}
// определяем переменные, рекорд проверяем на наличие в хранилище
      highScore = parseInt(localStorage.getItem("highScore")) || 0;
      currentScore = 0;
    

    draw() {
        if (state.current == state.game) { // рисуем счёт во время игры
            context.lineWidth = 2;
            context.font = "30px 'Press Start 2P', cursive";
            context.strokeStyle = "#e10b25";
            context.strokeText(this.currentScore, 150, 50);
        } else if (state.current == state.over) { // рисуем счет после окончания игры
           context.font = "20px 'Press Start 2P', cursive";
           // текущий
           context.strokeText(this.currentScore, 225, 188);
           // лучщий
           context.strokeText(this.highScore, 220, 230);
        }
    }

    reset() { 
        this.currentScore = 0;
    }
}
