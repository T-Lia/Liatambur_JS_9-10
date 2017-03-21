/**
 * Created by TGoro on 20.03.2017.
 */
$(function(){
    $('.niceCheck').mousedown(function() {  /* при клике на чекбоксе меняем его вид и значение */
        changeCheck($(this));
   });

    $('.niceCheck').each(function() {  /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
        changeCheckStart($(this));
    });
});

/* функция смены вида и значения чекбокса
 el - span контейнер дял обычного чекбокса
 input - чекбокс */

function changeCheck(el) {
     var el = el,
         input = el.find('input').eq(0);

    if(!input.attr('checked')) {
        el.css('background-position','0 -17px');
        input.attr('checked', true)
        } else {
        el.css('background-position','0 0');

        input.attr('checked', false)
    }
    return true;
}

/* если установлен атрибут checked, меняем вид чекбокса */

function changeCheckStart(el) {

    var el = el,
        input = el.find('input').eq(0);

    if(input.attr('checked')) {
        el.css('background-position','0 -17px');
    }
    return true;
}
