// определяем класс фона с городом
class Background {
  constructor() {
    this.bg = {
      sX: 0,
      sY: 0,
      sW: 275,
      sH: 226,
    }
  };

  draw() {
    if (state.current === state.game) {
      index += 0.3;
      const bgX = -((index * SPEED) % canvas.width);

      let bgPart1 = {
        x: bgX + canvas.width,
        y: 240,
        w: canvas.width,
      };

      let bgPart2 = {
        x: bgX,
        y: 240,
        w: canvas.width,
      };
    // рисуем анимированный фон при стадии игры  
      context.drawImage(sprite, this.bg.sX, this.bg.sY, this.bg.sW, this.bg.sH, bgPart1.x, bgPart1.y, bgPart1.w, this.bg.sH);
      context.drawImage(sprite, this.bg.sX, this.bg.sY, this.bg.sW, this.bg.sH, bgPart2.x, bgPart2.y, bgPart2.w, this.bg.sH);
    } else { 
      context.drawImage(sprite, this.bg.sX, this.bg.sY, this.bg.sW, this.bg.sH, 0, 240, canvas.width, this.bg.sH);
    }
  };
}


// фон с землёй
class Foreground {
  constructor() {
  this.fg = {
      sX: 276,
      sY: 0,
      sW: 224,
      sH: 112,
      x: 0,
      y: 368,
      w: canvas.width,
   }
}

  draw() {
    context.drawImage(sprite, this.fg.sX, this.fg.sY, this.fg.sW, this.fg.sH, this.fg.x, this.fg.y, this.fg.w, this.fg.sH);
  }
}
