document.addEventListener('DOMContentLoaded', () => {
  // инициализация слайдера
  new ItcSimpleSlider('.itcss', {
    loop: true,
    autoplay: false,
    interval: 5000,
    swipe: true,
  });
});

apeearecne()
apeearecneBlock()
let btnCallAcion = document.querySelector('.call-to-action');
let yellowBtn = document.querySelector('.bg__btn');
let bgMail = document.querySelector('.mail__back')

btnCallAcion.addEventListener("mouseover", function () {
  yellowBtn.classList.add('anim-btn')
  bgMail.classList.add('anim-mail')
})

btnCallAcion.addEventListener("mouseout", function () {
  yellowBtn.classList.remove('anim-btn')
  bgMail.classList.remove('anim-mail')
})

function apeearecne() {
  var logo = document.querySelector('.header__logo');
  var list = document.querySelectorAll('.header__text');
  setInterval(() => {
    logo.classList.add('menu__item-appearence');
    for (var i = 0; i < list.length; ++i) {
      list[i].classList.add('menu__item-appearence');
    };
  }, 100);
}

function apeearecneBlock() {
  setInterval(() => {
    var logo = document.querySelector('.text-content');
    logo.classList.add('menu__item-appearence');
  }, 400);
  setInterval(() => {
    var logo = document.querySelector('.itcss');
    logo.classList.add('menu__item-appearence');
  }, 600);
  setInterval(() => {
    var logo = document.querySelector('.fotter__conteiner');
    logo.classList.add('menu__item-appearence');
  }, 900);
}

var panelItem = document.querySelectorAll('.panel-title'),
  bodyItem = document.querySelectorAll('.panel-body');
panelItem.__proto__.forEach = [].__proto__.forEach;

var activePanel;
panelItem.forEach(function (item, i, panelItem) {
  item.addEventListener('click', function (e) {
    //show new thingy;
    this.classList.add('panel-active');
    this.nextElementSibling.classList.add('active');
    //hide old thingy
    if (activePanel) {
      activePanel.classList.remove('panel-active');
      activePanel.nextElementSibling.classList.remove('active');
    }
    //update thingy
    activePanel = (activePanel === this) ? 0 : this;
  });
});




function openBurgMenu() {
  let poleBurg = document.querySelector('.burder-menu__pole')

  poleBurg.classList.toggle('open__burger-menu')
}

