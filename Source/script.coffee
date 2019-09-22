#############################################
# JQuery2
#############################################
$ = (selector) ->
	document.querySelectorAll selector
id = (selector) ->
	document.getElementById selector

print = (data) ->
	console.log data
#############################################
# SCRIPT
#############################################
menu = id 'menu'
full_screen = id 'full_screen'
options = id 'options'
lang_name_mod_var = 'RU'
menu_toggle = () ->
	menu.classList.toggle 'see'
	return
menu_off = () ->
	menu.classList.remove 'see'
Theme_dark = () ->
	full_screen.classList.remove 'Theme_lite'
	full_screen.classList.add 'Theme_dark'
	id('Light').classList.remove 'menu_item_active'
	id('Dark').classList.add 'menu_item_active'
Theme_dark()
Theme_lite = () ->
	full_screen.classList.remove 'Theme_dark'
	full_screen.classList.add 'Theme_lite'
	id('Dark').classList.remove 'menu_item_active'
	id('Light').classList.add 'menu_item_active'
#############################################
# CORE
#############################################

slider = id 'body'
numberNextSlide = -1
rewind = id 'rewind'
rewind_pause = id 'rewind_pause'
rewind_play = id 'rewind_play'
allSlides = 0
allSlidesLength = 0
time = 88
setI = setInterval(	() ->
	next()
time)
clearIntervalMini = () ->
	clearInterval setI
	setI = setInterval(	() ->
		next()
	time)
if localStorage.fontFamily
	slider.style.fontFamily = localStorage.fontFamily
	fontInput.value = localStorage.fontFamily
######################################

run_language = (langCSOM) ->
	language = SlidesParser langCSOM
	numberNextSlide = -1
	allSlides = language
	allSlidesLength = language.length
	globalStyle = document.createElement('style');
	globalStyle.innerHTML = allSlides[0].globalStyle
	menu.appendChild globalStyle
	time = 88
	id('rewind').innerHTML = ''
	clearIntervalMini()
	i_b_r = -1
	for key, val of allSlides
		i_b_r++
		button_rewind = document.createElement "div"
		button_rewind.classList.add "rewind_item"
		button_rewind.setAttribute "onclick", "run(" + i_b_r + ")"
		rewind.appendChild button_rewind

parse_slide = (arr) ->
	slider.innerHTML = ''
	for val in arr
		DOM_slide = document.createElement 'div'
		DOM_slide.setAttribute 'class', Object.keys(val)[0]
		if Object.keys(val)[0].indexOf('html') > -1
			DOM_slide.innerHTML = val[Object.keys(val)[0]]
			slider.appendChild DOM_slide
		else 
			slider.appendChild parse_row val, DOM_slide
	Test()
	return

parse_row = (arr_obj, DOM_col) ->
	for key0, val2 of arr_obj
		console.log val2
		if typeof val2 == 'string'
			div = document.createElement 'div'
			div.setAttribute 'class', key0
			div.textContent = val2
			DOM_col.appendChild div
		else
			for val3 in val2
				for key, val of val3
					if key.substring(0, 4) == 'html'
						div = document.createElement 'div'
						div.setAttribute 'class', key
						div.innerHTML = val
						DOM_col.appendChild div
					else
						div = document.createElement 'div'
						div.setAttribute 'class', key
						if typeof val == 'object'
							div.appendChild = parse_array(val, div)
						else
							div.textContent = val
						DOM_col.appendChild div
	return DOM_col

parse_array = (arr, DOM_slide) ->
	for obj in arr
		for key, val of obj
			if key.substring(0, 4) == 'html'
				DOM_div = document.createElement 'div'
				DOM_div.setAttribute 'class', key
				DOM_div.innerHTML = val
				DOM_slide.appendChild DOM_div
			else
				DOM_div = document.createElement 'div'
				DOM_div.setAttribute 'class', key
				DOM_div.textContent = val
				DOM_slide.appendChild DOM_div
	return DOM_slide

######################################


next = () ->
	allSlidesLength__ = allSlidesLength
	allSlidesLength__--
	if numberNextSlide < allSlidesLength__
		numberNextSlide++
		run()

download_voice = (numberSlideVoice) ->
	load_voice(allSlides[numberSlideVoice].voice)
	numberSlideVoiceNext = numberSlideVoice
	numberSlideVoiceNext++
	if numberSlideVoiceNext < allSlidesLength
		load_voice(allSlides[numberSlideVoiceNext].voice)

run = (number) ->
	number++
	if number
		number--
		numberNextSlide = number
	if numberNextSlide < allSlidesLength
		if numberNextSlide >= 0
			rewind_play.style.display = 'none'
			rewind_pause.style.display = 'block'
			time = allSlides[numberNextSlide].time 
			clearIntervalMini()
			parse_slide allSlides[numberNextSlide].see
			autoHover numberNextSlide
			download_voice numberNextSlide
			if this_voice
				this_voice.stop()
			gEval('this_voice = ' + allSlides[numberNextSlide].voice)
			if this_voice
				setTimeout(
					() => this_voice.play(),
					500
				)
			return


back = () ->
	if numberNextSlide > 0
		numberNextSlide--
		run()

pause = () ->
	clearInterval setI
	rewind_pause.style.display = 'none'
	rewind_play.style.display = 'block'
	if this_voice
		this_voice.stop()

autoHover = (number) ->
	i_rewind = 0
	for val of allSlides
		rewind.childNodes[i_rewind].classList.remove("rewind_active")
		i_rewind++
	rewind.childNodes[number].classList.add("rewind_active")

fullScreen = id 'fullScreen'
closeFullScreen = id 'closeFullScreen'

Language_active = (lang) ->
	$('.Language_item')[0].classList.remove('menu_item_active')
	$('.Language_item')[1].classList.remove('menu_item_active')
	$('.Language_item')[2].classList.remove('menu_item_active')
	$('.Language_item')[3].classList.remove('menu_item_active')
	$('.Language_item')[4].classList.remove('menu_item_active')
	$('.Language_item')[5].classList.remove('menu_item_active')
	id(lang).classList.add 'menu_item_active'

Full_screen = () ->
	fullScreen.style.display = 'none'
	closeFullScreen.style.display = 'block'
	if document.documentElement.requestFullscreen
		document.documentElement.requestFullscreen()
	else
		if document.documentElement.mozRequestFullScreen
			document.documentElement.mozRequestFullScreen()
		else
			if document.documentElement.webkitRequestFullscreen
				document.documentElement.webkitRequestFullscreen()
			else
				if document.documentElement.msRequestFullscreen
					document.documentElement.msRequestFullscreen()

Close_full_screen = () ->
	closeFullScreen.style.display = 'none'
	fullScreen.style.display = 'block'
	if document.exitFullscreen
		document.exitFullscreen()
	else
		if document.mozCancelFullScreen
			document.mozCancelFullScreen()
		else
			if document.webkitExitFullscreen
				document.webkitExitFullscreen()
			else
				if document.msExitFullscreen
					document.msExitFullscreen()

Lang_toggle = (Lang) ->
	EN =
		Language: 'Language'
		Theme: 'Theme'
		Light: 'Light'
		Dark: 'Dark'
		Download: 'Download'
		Font_size: 'Font size'
		Support: 'Support'
		Author: 'Author'
		Font: 'Font'
		Account: 'Account'
	RU =
		Language: 'Язык'
		Theme: 'Тема'
		Font_size: 'Размер шрифта'
		Light: 'Светлая'
		Dark: 'Темная'
		Font: 'Шрифт'
		Download: 'Скачать'
		Support: 'Поддержка'
		Author: 'Автор'
		Account: 'Аккаунт'
	SPA =
		Language: 'Idioma'
		Theme: 'Tema'
		Font_size: 'Tamaño de fuente'
		Light: 'Ligero'
		Dark: 'Oscuro'
		Download: 'Descargar'
		Support: 'Apoyo'
		Author: 'Autor'
		Font: 'Fuente'
		Account: 'Cuenta'
	ZHO =
		Language: '语言'
		Theme: '主题'
		Light: '光'
		Dark: '黑'
		Font_size: '字体大小'
		Download: '下載'
		Support: '支持'
		Author: '作者'
		Font: '字形'
		Account: '帳戶'
	lang_name_mod_var = Lang
	Lang_apply = (obj) ->
		for key, val of obj
			id(key).innerHTML = val

	Lang_interface_active = (lang) ->
# Lang_items = $ '.Lang_item'
		$('.Lang_item')[0].classList.remove('menu_item_active')
		$('.Lang_item')[1].classList.remove('menu_item_active')
		$('.Lang_item')[2].classList.remove('menu_item_active')
		$('.Lang_item')[3].classList.remove('menu_item_active')
		id(lang).classList.add 'menu_item_active'

	if Lang == 'RU'
		Lang_apply RU
		Lang_interface_active 'RU'
	if Lang == 'EN'
		Lang_apply EN
		Lang_interface_active 'EN'
	if Lang == 'SPA'
		Lang_apply SPA
		Lang_interface_active 'SPA'
	if Lang == 'ZHO'
		Lang_apply ZHO
		Lang_interface_active 'ZHO'

if navigator.language == 'ru-RU'
#  || 'ua-UA' || 'ru-UA' || 'ru' || 'ua' || 'uk'
	Lang_toggle "RU"
if navigator.language == 'en-EN'
#  || 'EN' || "en" || "en-US" || "en-EG" || "en-AU" || "en-GB" || "en-CA" || "en-NZ" || "en-IE" || "en-ZA" || "en-JM" || "en-BZ" || "en-TT"
	Lang_toggle "EN"
if navigator.language == 'zh-CN'
#  || 'zh' || "zh-TW" || "zh-HK" || "zh-SG" || 'zh-ZH'
	Lang_toggle "ZHO"
if navigator.language == 'es-ES'
#  || 'es' || "es-AR" || "es-GT" || "es-CR" || "es-PA" || "es-DO" || "es-MX" || "es-VE" || "es-CO" || "es-PE" || "es-EC" || "es-CL" || "es-UY" || "es-PY" || "es-BO" || "es-SV" || "es-HN" || "es-NI" || "es-PR"
	Lang_toggle "SPA"



Font_size = (size) ->
	f_size = id('html').style.fontSize
	f_size = f_size.substring(0, 2)
	font_size = +f_size + size
	id('html').style.fontSize = font_size+'px'
	id('Font_size_data').innerHTML = id('html').style.fontSize
Font_size()

Test2 = () ->
	correctlys = document.querySelectorAll('.correctly')
	wrongs = document.querySelectorAll('.wrong')
	for correctly in correctlys
		correctly.addEventListener('click', correctly_func)
	for wrong in wrongs
		wrong.addEventListener('click', wrong_func)