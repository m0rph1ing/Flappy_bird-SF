// определяем плашку Get Raady
class getReady {
  constructor() {
    this.img = {
      sX: 0,
      sY: 228,
      w: 173,
      h: 152,
      x: 75,
      y: 80,
    }
   };
  // отрисовываем на стадии подготовки 
    draw() { if(state.current === state.getReady) {
            context.drawImage(sprite, this.img.sX, this.img.sY, this.img.w, this.img.h, this.img.x, this.img.y, this.img.w, this.img.h);
        }
    }  
}

// определяем плашку проигрыша
class gameOver {
  // сама плашка
  img = {
    sX: 175,
    sY: 228,
    w: 225,
    h: 202,
    x: 50,
    y: 90
  };
  
  // медалька
  medal = {
    golden: { sX: 310, sY: 158 },
    silver: { sX: 358, sY: 113 },
    source: { sW: 45, sH: 45, x: 72, y: 177 }
  };
  
  // отрисовываем плашку в конце игры 
  drawGameOver() { if (state.current !== state.over) return;
                  
    context.drawImage(sprite, this.img.sX, this.img.sY, this.img.w, this.img.h, this.img.x, this.img.y, this.img.w, this.img.h);
    
    const { golden, silver, source } = this.medal;                  
// пишем условие выбора медали
    const medalToDraw = (score.currentScore >= score.highScore) ? golden : silver;
// рисуем нужную медаль медаль исходя из условий
    context.drawImage(sprite, medalToDraw.sX, medalToDraw.sY, source.sW, source.sH, source.x, source.y, source.sW, source.sH);
  }
}

