$(document).ready(function() {

  $('.ornament').hide();

  let ornamentCounter = 0;

  $('.tree').click(function() {
    ornamentCounter ++;
    switch (ornamentCounter) {
      case 1:
        $('#one').show();
        break;
      case 2:
        $('#two').show();
        break;
      case 3:
        $('#three').show();
        break;
      case 4:
        $('#four').show();
        break;
      case 5:
        $('#star').show();
        break;
    }
  })

  let pix = [
    'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/13427830_10209800110498936_28228244698608356_n.jpg?oh=160654e69b66c5a1937c2507257d4202&oe=58FA43FB',
    'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/14963201_4498094211797_3701288075220752982_n.jpg?oh=6e9e0f38f8eacd929b7ea3cd4121b39e&oe=58B9533E',
    'https://scontent-dft4-2.xx.fbcdn.net/t31.0-8/15252658_10211350448376414_8566593881518642396_o.jpg',
    'https://scontent-dft4-2.xx.fbcdn.net/t31.0-8/12496515_4120880621693_3506969015579313047_o.jpg',
  ];

  let pixCounter = 0;

  setInterval(function() {
    if (pixCounter === 3) {
      pixCounter = 0;
    } else {
      pixCounter++;
    }
    $('.picture').css('background-image','url(' + pix[pixCounter] + ')');
  }, 2000);

})
