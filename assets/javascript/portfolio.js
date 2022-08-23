// import json
var pictureList = [];
$.ajax({
  url: 'assets/data/pictureList.json',
  async: false,
  dataType: 'json',
  success: function (json) {
    pictureList = json;
  },
});

// render data
const vm = Vue.createApp({
  data() {
    return {
      pictureList: pictureList,
    };
  },
}).mount('#gallery');

// masonry
$('.grid').imagesLoaded(function () {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 30,
    fitWidth: true,
  });
});

// show detail
let detailIsShown = 0;

function detail(e) {
  let thisIndex = $(e).attr('id');
  $('#detailPicture').attr('src', pictureList[thisIndex].pic);
  $('#detailTitle').html(pictureList[thisIndex].name);
  $('#detailUrl').attr('href', pictureList[thisIndex].url);
  $('#detailFigmaUrl').attr('href', pictureList[thisIndex].figmaUrl);
  $('#detailDescription').html(pictureList[thisIndex].description);

  $('#detail').css({
    opacity: '1',
    'z-index': '999',
  });

  pictureList[thisIndex].url == ''
    ? $('#detailUrl').css('display', 'none')
    : $('#detailUrl').css('display', 'block');
  pictureList[thisIndex].figmaUrl == ''
    ? $('#detailFigmaUrl').css('display', 'none')
    : $('#detailFigmaUrl').css('display', 'block');

  detailIsShown = 1;
}

// hide detail
function closeDetail() {
  $('#detail').css({
    opacity: '0',
    'z-index': '-50',
  });

  detailIsShown = 0;
}

// hide detail, controled by esc
$(window).keydown(function (e) {
  if (e.keyCode == 27 && detailIsShown == 1) {
    closeDetail();
  }
});
