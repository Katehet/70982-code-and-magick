'use strict';

var getMaxElement = function (arr) {
  var max = -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

window.renderStatistics = function (ctx, names, times) {
  // Рисует тень облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  // Рисует облако
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  // Заголовок облака
  ctx.fillText('Ура! Вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);
  var histogramHeight = 150; // абсолютная максимальная высота столбика
  var rait = histogramHeight / maxTime; // коэффициент относительной высоты столбика
  var histogramWidth = 40; // ширина столбика
  // расстояние между столбиками
  var histogramStep = 50;
  var indent = histogramWidth + histogramStep;
  // нулевые координаты гистограммы
  var initialX = 150;
  var initialY = 240;
  var nameY = 265;

  // Рисует график
  for (var i = 0; i < times.length; i++) {

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var random = parseFloat(Math.random()).toFixed(1);
      ctx.fillStyle = 'rgba(0, 0, 255,' + random + ')';
    }

    ctx.fillRect(initialX + (indent * i), initialY, histogramWidth, times[i] * rait * (-1));

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + (indent * i), nameY);
    ctx.fillText(Math.ceil(times[i]), initialX + (indent * i), initialY - (times[i] * rait) - 10);

  }
};
