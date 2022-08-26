//滑鼠移動時觸發的事件
$(window).mousemove(function (evt) {
  const pagex = evt.pageX;
  const pagey = evt.pageY;

  //計算相對區域的位置
  const x = pagex - $('header').offset().left;
  const y = pagey - $('header').offset().top;

  //計算貓的中心位置
  const smileWidth = $('#smile').width();
  const smileX = $('#smile').offset().left + smileWidth / 2;
  const smileY = $('#smile').offset().top + smileWidth / 2;

  const img_url = 'assets/image/index/smile/';

  //四方位
  //中間
  if (
    Math.abs(smileX - pagex) < smileWidth / 3 &&
    Math.abs(smileY - pagey) < smileWidth / 3
  )
    $('#smile').attr('src', img_url + 'smile_center.svg');

  //左方
  if (
    smileX - smileWidth / 3 > pagex &&
    Math.abs(smileY - pagey) < smileWidth / 3
  )
    $('#smile').attr('src', img_url + 'smile_left.svg');

  //上面
  if (
    Math.abs(smileX - pagex) < smileWidth / 3 &&
    smileY - smileWidth / 3 > pagey
  )
    $('#smile').attr('src', img_url + 'smile_up.svg');

  //右方
  if (
    smileX + smileWidth / 3 < pagex &&
    Math.abs(smileY - pagey) < smileWidth / 3
  )
    $('#smile').attr('src', img_url + 'smile_right.svg');

  if (
    Math.abs(smileX - pagex) < smileWidth / 3 &&
    smileY + smileWidth / 3 < pagey
  )
    $('#smile').attr('src', img_url + 'smile_down.svg');

  //八方位
  //左上
  if (smileX - smileWidth / 3 > pagex && smileY - smileWidth / 3 > pagey)
    $('#smile').attr('src', img_url + 'smile_leftUp.svg');

  //右上
  if (smileX + smileWidth / 3 < pagex && smileY - smileWidth / 3 > pagey)
    $('#smile').attr('src', img_url + 'smile_rightUp.svg');

  //左下
  if (smileX - smileWidth / 3 > pagex && smileY + smileWidth / 3 < pagey)
    $('#smile').attr('src', img_url + 'smile_leftDown.svg');

  //右下
  if (smileX + smileWidth / 3 < pagex && smileY + smileWidth / 3 < pagey)
    $('#smile').attr('src', img_url + 'smile_rightDown.svg');
});
