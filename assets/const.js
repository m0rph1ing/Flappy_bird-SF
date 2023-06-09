// определяем канвас и контекст
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// определяем некоторые переменные
let frames = 0;
let index = 0;

let SPEED = 2;

let frameRate = 60; // Желаемая частота кадров (FPS)
let frameDelay = 1000 / frameRate; // Задержка между кадрами в миллисекундах

const DEGREE = Math.PI/180;

// подгружаем картиночку
const sprite = new Image();
sprite.src = "../images/spriteFB.png";

// состояния игры
const state = {
    current: 0,
    getReady: 0,
    game: 1,
    over: 2
}

// коорбинаты кнопки старта
const startBtn = {
    x: 120,
    y: 263,
    w: 83,
    h: 29
}
