// Массивы и функции для ширины блоков
var widthTitle  = $('.title').width(),
    widthName   = $('.name:eq(0)').innerWidth(),
    widthYear   = $('.name:eq(1)').innerWidth(),
    widthPoint  = $('.name:eq(2)').innerWidth(),
    widthSkype  = $('.name:eq(3)').innerWidth(),
    widthMail   = $('.name:eq(4)').innerWidth();
$('.description:eq(0)').css('width', widthTitle - widthName - 10);
$('.description:eq(1)').css('width', widthTitle - widthYear - 10);
$('.description:eq(2)').css('width', widthTitle - widthPoint - 10);
$('.description:eq(3)').css('width', widthTitle - widthSkype - 10);
$('.description:eq(4)').css('width', widthTitle - widthMail - 10);

// Инициализация аудио
var audio = $(document).find('audio.key')[0],
    audioSwitch = $(document).find('audio.switch')[0];

// Массивы скрипта ввода данных
var titleName = [
        'М',
        'Ма',
        'Мар',
        'Марк',
        'Марко',
        'Марков',
        'Марков ',
        'Марков Е',
        'Марков Ев',
        'Марков Евг',
        'Марков Евге',
        'Марков Евген',
        'Марков Евгени',
        'Марков Евгений',
        'Марков Евгений ',
        'Марков Евгений И',
        'Марков Евгений Иг',
        'Марков Евгений Иго',
        'Марков Евгений Игор',
        'Марков Евгений Игоре',
        'Марков Евгений Игорев',
        'Марков Евгений Игореви',
        'Марков Евгений Игоревич'
    ],
    titleYear = [
        '1',
        '19',
        '198',
        '1987'
    ],
    titlePoint = [
        'г',
        'г.',
        'г. ',
        'г. С',
        'г. Ст',
        'г. Ста',
        'г. Став',
        'г. Ставр',
        'г. Ставро',
        'г. Ставроп',
        'г. Ставропо',
        'г. Ставропол',
        'г. Ставрополь',
        'г. Ставрополь,',
        'г. Ставрополь, ',
        'г. Ставрополь, Р',
        'г. Ставрополь, Ро',
        'г. Ставрополь, Рос',
        'г. Ставрополь, Росс',
        'г. Ставрополь, Росси',
        'г. Ставрополь, Россия'
    ],
    titleSkype = [
        'l',
        'li',
        'liv',
        'live',
        'live:',
        'live:e',
        'live:ev',
        'live:evg',
        'live:evge',
        'live:evgen',
        'live:evgen_',
        'live:evgen_m',
        'live:evgen_ma',
        'live:evgen_mar',
        'live:evgen_mart'
    ],
    titleMail = [
        'm',
        'mo',
        'mo1',
        'mo19',
        'mo190',
        'mo1903',
        'mo19038',
        'mo190387',
        'mo190387m',
        'mo190387me',
        'mo190387mei',
        'mo190387mei@',
        'mo190387mei@g',
        'mo190387mei@gm',
        'mo190387mei@gma',
        'mo190387mei@gmai',
        'mo190387mei@gmail',
        'mo190387mei@gmail.',
        'mo190387mei@gmail.c',
        'mo190387mei@gmail.co',
        'mo190387mei@gmail.com'
    ];

// Печаткая машинка
function printName() {
    for (let i = 0; i < titleName.length; i++) {
        setTimeout(function() {
            $('.description:eq(0) > p').text(titleName[i]);
            audio.play();
            audio.currentTime = 0;
            if (i == titleName.length - 1) {
                audioSwitch.play();
                audioSwitch.currentTime = 0;
                setTimeout(function() {
                    printYear();
                }, 500);
            };
        }, i * 130);
    };
};

function printYear() {
    for (let i = 0; i < titleYear.length; i++) {
        setTimeout(function() {
            $('.description:eq(1) > p').text(titleYear[i]);
            audio.play();
            audio.currentTime = 0;
            if (i == titleYear.length - 1) {
                audioSwitch.play();
                audioSwitch.currentTime = 0;
                setTimeout(function() {
                    printPoint();
                }, 500);
            };
        }, i * 130);
    };
};

function printPoint() {
    for (let i = 0; i < titlePoint.length; i++) {
        setTimeout(function() {
            $('.description:eq(2) > p').text(titlePoint[i]);
            audio.play();
            audio.currentTime = 0;
            if (i == titlePoint.length - 1) {
                audioSwitch.play();
                audioSwitch.currentTime = 0;
                setTimeout(function() {
                    printSkype();
                }, 500);
            };
        }, i * 130);
    };
};

function printSkype() {
    for (let i = 0; i < titleSkype.length; i++) {
        setTimeout(function() {
            $('.description:eq(3) > p').text(titleSkype[i]);
            audio.play();
            audio.currentTime = 0;
            if (i == titleSkype.length - 1) {
                audioSwitch.play();
                audioSwitch.currentTime = 0;
                setTimeout(function() {
                    printMail();
                }, 500);
            };
        }, i * 130);
    };
};

function printMail() {
    for (let i = 0; i < titleMail.length; i++) {
        setTimeout(function() {
            $('.description:eq(4) > p').text(titleMail[i]);
            audio.play();
            audio.currentTime = 0;
            if (i == titleMail.length - 1) {
                audioSwitch.play();
                audioSwitch.currentTime = 0;
                setTimeout(function() {
                }, 500);
            };
        }, i * 130);
    };
};

// Запуск печатной машинки
$('.btn').click(function() {
    printName();
    $(this).css('opacity', '0');
});

// Слайдер
$( function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 100,
      value: 50,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
});