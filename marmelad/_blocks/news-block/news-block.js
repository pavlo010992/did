if ($('.news-block__list').length) {
  var sliderMainText = tns({
      "container": '.news-block__list',
      "nav": false,
      "gutter": 0,
      "items": 1,
      "loop": true,
      "controlsContainer": ".news-block__slider-nav",
      "axis": "horizontal",
      "mouseDrag": false,
      "responsive": {
        "767": {
          "gutter": 110,
          "items": 2
        }
      }
  });
}
