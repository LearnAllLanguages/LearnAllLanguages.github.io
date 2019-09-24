//############################################
// JQuery2
//############################################
var $, Close_full_screen, Font_size, Full_screen, Lang_toggle, Language_active, Test2, Theme_dark, Theme_lite, allSlides, allSlidesLength, autoHover, back, clearIntervalMini, closeFullScreen, download_voice, fullScreen, full_screen, id, lang_name_mod_var, menu, menu_off, menu_toggle, next, numberNextSlide, options, parse_array, parse_row, parse_slide, pause, print, rewind, rewind_pause, rewind_play, run, run_language, setI, slider, time;

$ = function(selector) {
  return document.querySelectorAll(selector);
};

id = function(selector) {
  return document.getElementById(selector);
};

print = function(data) {
  return console.log(data);
};

//############################################
// SCRIPT
//############################################
menu = id('menu');

full_screen = id('full_screen');

options = id('options');

lang_name_mod_var = 'RU';

menu_toggle = function() {
  menu.classList.toggle('see');
};

menu_off = function() {
  return menu.classList.remove('see');
};

Theme_dark = function() {
  full_screen.classList.remove('Theme_lite');
  full_screen.classList.add('Theme_dark');
  id('Light').classList.remove('menu_item_active');
  return id('Dark').classList.add('menu_item_active');
};

Theme_dark();

Theme_lite = function() {
  full_screen.classList.remove('Theme_dark');
  full_screen.classList.add('Theme_lite');
  id('Dark').classList.remove('menu_item_active');
  return id('Light').classList.add('menu_item_active');
};

//############################################
// CORE
//############################################
slider = id('body');

numberNextSlide = -1;

rewind = id('rewind');

rewind_pause = id('rewind_pause');

rewind_play = id('rewind_play');

allSlides = 0;

allSlidesLength = 0;

time = 88;

setI = setInterval(function() {
  return next();
}, time);

clearIntervalMini = function() {
  clearInterval(setI);
  return setI = setInterval(function() {
    return next();
  }, time);
};

if (localStorage.fontFamily) {
  slider.style.fontFamily = localStorage.fontFamily;
  fontInput.value = localStorage.fontFamily;
}

//#####################################
run_language = function(langCSOM) {
  var button_rewind, globalStyle, i_b_r, key, language, results, val;
  language = SlidesParser(langCSOM);
  numberNextSlide = -1;
  allSlides = language;
  allSlidesLength = language.length;
  globalStyle = document.createElement('style');
  globalStyle.innerHTML = allSlides[0].globalStyle;
  menu.appendChild(globalStyle);
  time = 88;
  id('rewind').innerHTML = '';
  clearIntervalMini();
  i_b_r = -1;
  results = [];
  for (key in allSlides) {
    val = allSlides[key];
    i_b_r++;
    button_rewind = document.createElement("div");
    button_rewind.classList.add("rewind_item");
    button_rewind.setAttribute("onclick", "run(" + i_b_r + ")");
    results.push(rewind.appendChild(button_rewind));
  }
  return results;
};

parse_slide = function(arr) {
  var DOM_slide, i, len, val;
  slider.innerHTML = '';
  for (i = 0, len = arr.length; i < len; i++) {
    val = arr[i];
    DOM_slide = document.createElement('div');
    DOM_slide.setAttribute('class', Object.keys(val)[0]);
    if (Object.keys(val)[0].indexOf('html') > -1) {
      DOM_slide.innerHTML = val[Object.keys(val)[0]];
      slider.appendChild(DOM_slide);
    } else {
      slider.appendChild(parse_row(val, DOM_slide));
    }
  }
  Test();
};

parse_row = function(arr_obj, DOM_col) {
  var div, i, key, key0, len, val, val2, val3;
  for (key0 in arr_obj) {
    val2 = arr_obj[key0];
    console.log(val2);
    if (typeof val2 === 'string') {
      div = document.createElement('div');
      div.setAttribute('class', key0);
      div.textContent = val2;
      DOM_col.appendChild(div);
    } else {
      for (i = 0, len = val2.length; i < len; i++) {
        val3 = val2[i];
        for (key in val3) {
          val = val3[key];
          if (key.substring(0, 4) === 'html') {
            div = document.createElement('div');
            div.setAttribute('class', key);
            div.innerHTML = val;
            DOM_col.appendChild(div);
          } else {
            div = document.createElement('div');
            div.setAttribute('class', key);
            if (typeof val === 'object') {
              div.appendChild = parse_array(val, div);
            } else {
              div.textContent = val;
            }
            DOM_col.appendChild(div);
          }
        }
      }
    }
  }
  return DOM_col;
};

parse_array = function(arr, DOM_slide) {
  var DOM_div, i, key, len, obj, val;
  for (i = 0, len = arr.length; i < len; i++) {
    obj = arr[i];
    for (key in obj) {
      val = obj[key];
      if (key.substring(0, 4) === 'html') {
        DOM_div = document.createElement('div');
        DOM_div.setAttribute('class', key);
        DOM_div.innerHTML = val;
        DOM_slide.appendChild(DOM_div);
      } else {
        DOM_div = document.createElement('div');
        DOM_div.setAttribute('class', key);
        DOM_div.textContent = val;
        DOM_slide.appendChild(DOM_div);
      }
    }
  }
  return DOM_slide;
};

//#####################################
next = function() {
  var allSlidesLength__;
  allSlidesLength__ = allSlidesLength;
  allSlidesLength__--;
  if (numberNextSlide < allSlidesLength__) {
    numberNextSlide++;
    return run();
  }
};

download_voice = function(numberSlideVoice) {
  var numberSlideVoiceNext;
  load_voice(allSlides[numberSlideVoice].voice);
  numberSlideVoiceNext = numberSlideVoice;
  numberSlideVoiceNext++;
  if (numberSlideVoiceNext < allSlidesLength) {
    return load_voice(allSlides[numberSlideVoiceNext].voice);
  }
};

run = function(number) {
  number++;
  if (number) {
    number--;
    numberNextSlide = number;
  }
  if (numberNextSlide < allSlidesLength) {
    if (numberNextSlide >= 0) {
      rewind_play.style.display = 'none';
      rewind_pause.style.display = 'block';
      time = allSlides[numberNextSlide].time;
      clearIntervalMini();
      parse_slide(allSlides[numberNextSlide].see);
      autoHover(numberNextSlide);
      download_voice(numberNextSlide);
      if (this_voice) {
        this_voice.stop();
      }
      gEval('this_voice = ' + allSlides[numberNextSlide].voice);
      if (this_voice) {
        setTimeout(() => {
          return this_voice.play();
        }, 500);
      }
    }
  }
};

back = function() {
  if (numberNextSlide > 0) {
    numberNextSlide--;
    return run();
  }
};

pause = function() {
  clearInterval(setI);
  rewind_pause.style.display = 'none';
  rewind_play.style.display = 'block';
  if (this_voice) {
    return this_voice.stop();
  }
};

autoHover = function(number) {
  var i_rewind, val;
  i_rewind = 0;
  for (val in allSlides) {
    rewind.childNodes[i_rewind].classList.remove("rewind_active");
    i_rewind++;
  }
  return rewind.childNodes[number].classList.add("rewind_active");
};

fullScreen = id('fullScreen');

closeFullScreen = id('closeFullScreen');

Language_active = function(lang) {
  $('.Language_item')[0].classList.remove('menu_item_active');
  $('.Language_item')[1].classList.remove('menu_item_active');
  $('.Language_item')[2].classList.remove('menu_item_active');
  $('.Language_item')[3].classList.remove('menu_item_active');
  $('.Language_item')[4].classList.remove('menu_item_active');
  $('.Language_item')[5].classList.remove('menu_item_active');
  return id(lang).classList.add('menu_item_active');
};

Full_screen = function() {
  fullScreen.style.display = 'none';
  closeFullScreen.style.display = 'block';
  if (document.documentElement.requestFullscreen) {
    return document.documentElement.requestFullscreen();
  } else {
    if (document.documentElement.mozRequestFullScreen) {
      return document.documentElement.mozRequestFullScreen();
    } else {
      if (document.documentElement.webkitRequestFullscreen) {
        return document.documentElement.webkitRequestFullscreen();
      } else {
        if (document.documentElement.msRequestFullscreen) {
          return document.documentElement.msRequestFullscreen();
        }
      }
    }
  }
};

Close_full_screen = function() {
  closeFullScreen.style.display = 'none';
  fullScreen.style.display = 'block';
  if (document.exitFullscreen) {
    return document.exitFullscreen();
  } else {
    if (document.mozCancelFullScreen) {
      return document.mozCancelFullScreen();
    } else {
      if (document.webkitExitFullscreen) {
        return document.webkitExitFullscreen();
      } else {
        if (document.msExitFullscreen) {
          return document.msExitFullscreen();
        }
      }
    }
  }
};

Lang_toggle = function(Lang) {
  var EN, Lang_apply, Lang_interface_active, RU, SPA, ZHO;
  EN = {
    Language: 'Language',
    Theme: 'Theme',
    Light: 'Light',
    Dark: 'Dark',
    Download: 'Download',
    Font_size: 'Font size',
    Support: 'Support',
    Author: 'Author',
    Font: 'Font',
    Account: 'Account'
  };
  RU = {
    Language: 'Язык',
    Theme: 'Тема',
    Font_size: 'Размер шрифта',
    Light: 'Светлая',
    Dark: 'Темная',
    Font: 'Шрифт',
    Download: 'Скачать',
    Support: 'Поддержка',
    Author: 'Автор',
    Account: 'Аккаунт'
  };
  SPA = {
    Language: 'Idioma',
    Theme: 'Tema',
    Font_size: 'Tamaño de fuente',
    Light: 'Ligero',
    Dark: 'Oscuro',
    Download: 'Descargar',
    Support: 'Apoyo',
    Author: 'Autor',
    Font: 'Fuente',
    Account: 'Cuenta'
  };
  ZHO = {
    Language: '语言',
    Theme: '主题',
    Light: '光',
    Dark: '黑',
    Font_size: '字体大小',
    Download: '下載',
    Support: '支持',
    Author: '作者',
    Font: '字形',
    Account: '帳戶'
  };
  lang_name_mod_var = Lang;
  Lang_apply = function(obj) {
    var key, results, val;
    results = [];
    for (key in obj) {
      val = obj[key];
      results.push(id(key).innerHTML = val);
    }
    return results;
  };
  Lang_interface_active = function(lang) {
    // Lang_items = $ '.Lang_item'
    $('.Lang_item')[0].classList.remove('menu_item_active');
    $('.Lang_item')[1].classList.remove('menu_item_active');
    $('.Lang_item')[2].classList.remove('menu_item_active');
    $('.Lang_item')[3].classList.remove('menu_item_active');
    return id(lang).classList.add('menu_item_active');
  };
  if (Lang === 'RU') {
    Lang_apply(RU);
    Lang_interface_active('RU');
  }
  if (Lang === 'EN') {
    Lang_apply(EN);
    Lang_interface_active('EN');
  }
  if (Lang === 'SPA') {
    Lang_apply(SPA);
    Lang_interface_active('SPA');
  }
  if (Lang === 'ZHO') {
    Lang_apply(ZHO);
    return Lang_interface_active('ZHO');
  }
};

if (navigator.language === 'ru-RU') {
  //  || 'ua-UA' || 'ru-UA' || 'ru' || 'ua' || 'uk'
  Lang_toggle("RU");
}

if (navigator.language === 'en-EN') {
  //  || 'EN' || "en" || "en-US" || "en-EG" || "en-AU" || "en-GB" || "en-CA" || "en-NZ" || "en-IE" || "en-ZA" || "en-JM" || "en-BZ" || "en-TT"
  Lang_toggle("EN");
}

if (navigator.language === 'zh-CN') {
  //  || 'zh' || "zh-TW" || "zh-HK" || "zh-SG" || 'zh-ZH'
  Lang_toggle("ZHO");
}

if (navigator.language === 'es-ES') {
  //  || 'es' || "es-AR" || "es-GT" || "es-CR" || "es-PA" || "es-DO" || "es-MX" || "es-VE" || "es-CO" || "es-PE" || "es-EC" || "es-CL" || "es-UY" || "es-PY" || "es-BO" || "es-SV" || "es-HN" || "es-NI" || "es-PR"
  Lang_toggle("SPA");
}

Font_size = function(size) {
  var f_size, font_size;
  f_size = id('html').style.fontSize;
  f_size = f_size.substring(0, 2);
  font_size = +f_size + size;
  id('html').style.fontSize = font_size + 'px';
  return id('Font_size_data').innerHTML = id('html').style.fontSize;
};

Font_size();

Test2 = function() {
  var correctly, correctlys, i, j, len, len1, results, wrong, wrongs;
  correctlys = document.querySelectorAll('.correctly');
  wrongs = document.querySelectorAll('.wrong');
  for (i = 0, len = correctlys.length; i < len; i++) {
    correctly = correctlys[i];
    correctly.addEventListener('click', correctly_func);
  }
  results = [];
  for (j = 0, len1 = wrongs.length; j < len1; j++) {
    wrong = wrongs[j];
    results.push(wrong.addEventListener('click', wrong_func));
  }
  return results;
};
