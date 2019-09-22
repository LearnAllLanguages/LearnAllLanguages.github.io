const supportSlide = [{'html m-auto': `<div class="mt-5 h-50" id="supportHistory">Sorry support, authorization in development...</div>
	<input type="text" class="form-control mt-2" id="supportInput" placeholder="Your question">
	<style>.Theme_dark #supportInput { background: #000; color: #fff; }#supportInput, #supportHistory{margin: auto}<style>`}]
const accountSlide = [{'html m-auto mt-5': `Sorry account in development...`}]
const downloadSlide = [{'html m-auto mt-5': `Sorry download in development...<br><a href="https://github.com/BI4HUU/learn-all-languages">github</a>`}]
const authorSlide = [{'html m-auto mt-5': `BI4HUU`}]
var language = false
var lang_name = false
var gEval = eval;

function load_voice(name_voice) {
	gEval(`if(typeof ${name_voice} == "undefined") {var ${name_voice} = new Pizzicato.Sound('./audio/${name_voice}.mp3')}`)
}

function play_voice (name_voice) {
	gEval(`${name_voice}.play()`)
}
var this_voice = false

function load_lang(lang_name_noMod) {
	lang_name = `${lang_name_noMod}_${lang_name_mod_var}`
	gEval(`if (typeof ${lang_name} == "undefined") {load_lang2 ("${lang_name}")} else {run_language (${lang_name})}`)
}

function load_lang2 (lang_name) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			gEval(`var ${lang_name} = ${xhttp.responseText}`)
			gEval(`run_language (${lang_name})`)
		}
	};
	// xhttp.open("GET", `${lang_name}.js`, true);
	xhttp.open("GET", `${lang_name}.csom`, true);
	xhttp.send();
}
function correctly_func(block) {
	block.target.style.backgroundColor = 'rgba(50, 205, 50, .3)'
}
function wrong_func(block2) {
	block2.target.style.backgroundColor = 'rgba(205, 50, 50, .3)'
}
// correctly wrong

function Test() {
	setTimeout(function() {
		Test2()
	},200)
}
function copyCode() {
	navigator.clipboard.writeText(allSlides[numberNextSlide].copyCode)
 }
let fontInput = document.getElementById('FontInput');
fontInput.oninput = function() {
	slider.style.fontFamily = fontInput.value
	localStorage.fontFamily = fontInput.value
}
function SlidesParser(SlidesStr) {
	let a = SlidesStr
	c = a.split(/\n/)
	let Slides = []
	let х = false
	let obj = {}
	let strLineVar = ''

	function sortGroupSlide(data) {
		if (data[0] == 1) {
			let doubleDot = data[1].indexOf(':')
			obj[data[1].slice(0, doubleDot)] = data[1].slice(doubleDot+2)
		}
		if (data[0] > 1) {
			for (var i = 2; i < data[0]; i++) {
				strLineVar += `	`
			}
			strLineVar += data[1]
			strLineVar += `\n`
		}
		if (data[0] == 0 && х) {
			strLineVar = strLineVar.substr(0, strLineVar.length - 1)
			obj['see'] = seeTooObj(strLineVar)
			Slides.push(obj)
			obj['time'] = parseInt(obj['time'])
			obj = {}
			strLineVar = ''
		}

		if (data[0] == 0 && !х) {х = true}
	}
	let iMod = 0
	let iiMod = 1
	for (var xMod = 0; xMod < c.length; xMod++) {
			while(c[xMod].slice(iMod, iiMod) == `	`){
				iMod++
				iiMod++
			}
			sortGroupSlide([iMod, c[xMod].slice(iMod, c[xMod].length)])
			iMod = 0
			iiMod = 1
	}
	function seeTooObj(str) {
		let SlideObj = []
		let strArrAll = []
		strArr = str.split(/\n/)
		for (var xx = 0; xx < strArr.length; xx++) {
			function ff(n) {
				while (strArr[n].slice(iMod, iiMod) == `	`){
					iMod++
					iiMod++
				}
				let strArrSec = [iMod, strArr[n].slice(iMod, strArr[n].length)]
				strArrAll.push(strArrSec)
				iMod = 0
				iiMod = 1
			}
			ff(xx)
		}
		for (var i3 = 0; i3 < strArrAll.length; i3++) {
			if (strArrAll[i3][0] == 0) {
				let doubleDot = strArrAll[i3][1].indexOf(':')
				let strLine0 = {}
				strLine0[strArrAll[i3][1].slice(0, doubleDot)] = strArrAll[i3][1].slice(doubleDot+2)
				let arrVarLvl2 = []
				let koef = 1
				if (i3+koef < strArrAll.length) {
					while(strArrAll[i3+koef][0] == 1){
						let doubleDotLvl2 = strArrAll[i3+koef][1].indexOf(':')
						let strLineLvl2 = {}
						strLineLvl2[strArrAll[i3+koef][1].slice(0, doubleDotLvl2)] = strArrAll[i3+koef][1].slice(doubleDotLvl2+2)
						let anti_koef = 0
						let arrVarLvl3 = []
						if (i3+koef+1 < strArrAll.length) {
							let strLineLvl3 = {}
							while(strArrAll[i3+koef+1][0] == 2){
								let doubleDotLvl3 = strArrAll[i3+koef+1][1].indexOf(':')
								strLineLvl3[strArrAll[i3+koef+1][1].slice(0, doubleDotLvl3)] = strArrAll[i3+koef+1][1].slice(doubleDotLvl3+2)
								arrVarLvl3.push(strLineLvl3)
								strLineLvl3 = {}
								koef+=1
								anti_koef-=1
								if (i3+koef+1 < strArrAll.length) {
									if (strArrAll[i3+koef+1][0] == 2) {
									} else {
										break
									}
								} else {
									break
								}
								if (i3+1 >= strArrAll.length) {
									break
								}
							}
							if (arrVarLvl3.length > 0) {
								strLineLvl2[strArrAll[i3+koef+anti_koef][1].slice(0, doubleDotLvl2)] = arrVarLvl3
								anti_koef = 0
							}
						}
						arrVarLvl2.push(strLineLvl2)
						if (i3+koef+1 < strArrAll.length) {
							if (strArrAll[i3+koef+1][0] == 1) {
								koef+=1
							} else {
								break
							}
						} else {
							break
						}
						if (i3+koef >= strArrAll.length) {
								break}


					}
					if (arrVarLvl2.length > 0) {
						strLine0[strArrAll[i3][1].slice(0, doubleDot)] = arrVarLvl2
					}
				}
				SlideObj.push(strLine0)

			}

		}
		return SlideObj
	}
	console.log(Slides)
	return Slides
}


























