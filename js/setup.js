'use strict';

// Показывает диалоговое окно
document.querySelector('.setup').classList.remove('hidden');
// Массив данных мага
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// Ищет место для вставки
var similarListElement = document.querySelector('.setup-similar-list');
// "Достает" содержимое шаблона мага
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// Количество магов
var numberOfWizards = 4;

// Считает случайное число
var random = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var randomName = function () {
  var name = random(names);
  var surname = random(surnames);

  return name + ' ' + surname;
};

// Шаблон объекта - маг
var objectTemplate = function () {
  return {
    name: randomName(),
    coatColor: random(coatColor),
    eyesColor: random(eyesColor)
  };
};

// Шаблон массива - все маги
var wizards = function () {
  var arrayTemplate = [];
  for (var i = 0; i < numberOfWizards; i++) {
    arrayTemplate.push(objectTemplate());
  }
  return arrayTemplate;
};
var arrayTemplate = wizards();

// Создает мага согласно шаблону
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// Добавляет магов на страницу
var fragment = document.createDocumentFragment();

for (var i = 0; i < arrayTemplate.length; i++) {
  fragment.appendChild(renderWizard(arrayTemplate[i]));
}
similarListElement.appendChild(fragment);

// Показывает похожих персонажей
document.querySelector('.setup-similar').classList.remove('hidden');
