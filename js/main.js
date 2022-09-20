/*Select*/

document.addEventListener("DOMContentLoaded", function () {
  const selector = document.querySelector(".custom-select")

  const choices = new Choices(selector, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });

});

/*Map*/
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [48.872185, 2.354224],
    zoom: 12
  }
  ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      balloonContent: 'улица дю Фобур Сен Дени 54'
    },
      {
        iconLayout: 'default#image',
        iconImageHref: '../img/mdi_location_on.png',
        iconImageSize: [48, 48],
        iconImageOffset: [-48, -48]
      });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('geolocationControl');
});


/*Scrollbar*/

new SimpleBar(document.querySelector('.scrollbar'), {
  autoHide: false,
  scrollbarMaxSize: 74,
});


/*Form*/
new window.JustValidate('.form', {
  colorWrong: '#FF5C00',
  rules: {
    name: {
      required: true
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      minLength: 11
    },
  },
  messages: {
    name: "Вы не ввели имя",
    email: {
      required: "Вы не ввели e-mail",
      email: "Не правильно введен e-mail",
    },
    phone: {
      required: "Вы не ввели телефон",
      minLength: "Введите минимум 11 символов"
    }
  }
});


/*Tooltip*/

tippy('.tooltip__note', {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  allowHTML: true,
  placement: 'top',
});
