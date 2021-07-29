function yaMapInit() {
    if (typeof ymaps) {
        // Как только будет загружен API и готов DOM, выполняем инициализацию
        init();
        clearInterval(yaMapInterval);
    }
}
var yaMapInterval = setInterval(yaMapInit, 1000);

// Инициализация и уничтожение карты при нажатии на кнопку.
function init() {
    if (!$('.map-block__map').length) {
        return;
    }
    var mapCount = 0;
    $('.map-block__map').each(function () {
        var myMap;
        var mapid = 'map' + mapCount;

        $(this).attr('id', mapid);

        var activeItem = $(this);
        var center = activeItem.data('center').split(',');
        var address = activeItem.data('address');
        var dopAddress = activeItem.data('dopadress');
        var zoom = activeItem.data('zoom');

        // Создание карты.
        var myMap = new ymaps.Map(mapid, {
            center: center,
            zoom: 7,
            controls: []
        });

        var coords;

        dopAddress.forEach(function (item, i, arr) {
            coords = item.coordinates.split(',');

            var dopAdd = item.adress;

            myMap.geoObjects.add(new ymaps.Placemark(coords, {
                zoom: 7,
            }, {
                iconLayout: 'default#image',
                iconImageHref: "../img/map-ballon.svg",
                iconImageSize: [55, 55],
                iconImageOffset: [-27, -27]
            }));
        });

        if (dopAddress.length < 2) {
            myMap.setCenter(coords, zoom);
        } else {
            myMap.setBounds(myMap.geoObjects.getBounds());
        }
        mapCount = mapCount + 1;
    });
}