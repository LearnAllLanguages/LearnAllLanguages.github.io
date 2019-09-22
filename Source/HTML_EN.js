[{
    slide: {
        see: [{
            html: HTML_EN_code1
        }],
        time: 4000,
        globalStyle: '.attribute_name{color: #8ef}.tag{color: #27e;}.attribute_value{color: #f06500;}'
    }
}, {
    slide: {
        see: [{
            col: [{
                line: [{
                    'h2 text': 'HTML - HyperText Markup Language '
                }]
            }, {
                line: [{
                    text: ' It is a standard markup language for creating web pages and web applications. Using cascading style sheets (CSS) and JavaScript (JS), it forms a triad of cornerstone technologies for the World Wide Web.'
                }]
            }]
        }],
        voice: 'HTML_EN_html',
        time: 8000
    }
},
//   \/ HELLO WORLD
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h2 text': 'Hello World'
                }]
            }, {
                line: [{
                    text: '	In a text or code editor (Sublime Text, Visual Studio Code ...) click "File" > "Create a new file", write the code.'
                }]
            }, {
                line: [{
                    html: '<a class="button" href="http://">Open in CodePen</a>'
                }, {
                    html: '<div class="button" onclick="copyCode()" >Copy code</div>'
                }]
            }, {
                line: [{
                    tag: '<html>'
                }]
            }, {
                line: [{
                    tag: '	<head>'
                }]
            }, {
                line: [{
                    tag: '		<title>'
                }, {
                    text: 'title'
                }, {
                    tag: '</title>'
                }]
            }, {
                line: [{
                    tag: '	</head>'
                }]
            }, {
                line: [{
                    tag: '	<body>'
                }]
            }, {
                line: [{
                    tag: '		<div>'
                }, {
                    text: 'Hello World'
                }, {
                    tag: '</div>'
                }]
            }, {
                line: [{
                    tag: '	</body>'
                }]
            }, {
                line: [{
                    tag: '</html>'
                }]
            }, {
                line: [{
                    text: '	Click "File" > "Save As ...", select the folder, the file name is "Hello world.html", click "Save", open the file in the browser.'
                }]
            }]
        }],
        voice: 'HTML_EN_Hello_World',
        time: 6000,
        copyCode: HTML_RU_code2
    }
},
//   /\ HELLO WORLD
//   \/ tag, attribute

{
    slide: {
        see: [{
            col: [{
                line: [{
                    text: 'The code consists of tags and attributes.'
                }]
            }]
        }, {
            'w-100': []
        }, {
            'col code': [{
                line: [{
                    tag: '<body>'
                }]
            }, {
                line: [{
                    tag: '	<div '
                }, {
                    attribute_name: 'class='
                }, {
                    attribute_value: '"className"'
                }, {
                    tag: '>'
                }, {
                    text: 'Text'
                }, {
                    tag: '</div>'
                }]
            }, {
                line: [{
                    tag: '	<input '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"checkbox"'
                }, {
                    attribute_name: ' checked'
                }, {
                    tag: '>'
                }]
            }, {
                line: [{
                    tag: '</body>'
                }]
            }]
        }, {
            'w-100': []
        }, {
            col: [{
                line: [{
                    comment: 'Where'
                }]
            }, {
                line: [{
                    tag: '<body></body>, <div></div>'
                }, {
                    text: ' - pair tag (container). '
                }]
            }, {
                line: [{
                    tag: '<input>'
                }, {
                    text: ' - single tag.'
                }]
            }, {
                line: [{
                    attribute_name: 'checked'
                }, {
                    text: ' - attribute.'
                }]
            }, {
                line: [{
                    attribute_name: 'class='
                }, {
                    attribute_value: '"className", '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"checkbox"'
                }, {
                    text: ' - attribute with values.'
                }]
            }, {
                line: [{
                    text: 'Text'
                }, {
                    text: ' - text.'
                }]
            }, {
                line: [{
                    html: '<a class="button" href="http://">Open in CodePen</a>'
                }]
            }]
        }],
        voice: 'HTML_EN_tag_attribute',
        time: 17000
    }
},
//   /\ tag, attribute   8888888888888888888888888888888888888888888888888888

//   \/ Типы тегов  Types of tags  8888888888888888888888888888888888888888888888888888
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h1 text': 'Types of tags.'
                }]
            }, {
                line: [{
                    text: 'top level tags;'
                }]
            }, {
                line: [{
                    text: 'document title tags;'
                }]
            }, {
                line: [{
                    text: 'block elements;'
                }]
            }, {
                line: [{
                    text: 'lowercase elements;'
                }]
            }, {
                line: [{
                    text: 'lists;'
                }]
            }, {
                line: [{
                    text: 'tables;'
                }]
            }, {
                line: [{
                    text: 'frames;'
                }]
            }, {
                line: [{
                    text: 'universal elements.'
                }]
            }]
        }],
        voice: 'HTML_EN_tag_type',
        time: 6000
    }
},
//   /\ Типы тегов   8888888888888888888888888888888888888888888888888888

//   \/ Теги верхнего уровня   8888888888888888888888888888888888888888888888888888
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h1 text': 'Top level tags'
                }]
            }, {
                line: [{
                    tag: '<html></html>'
                }]
            }, {
                line: [{
                    tag: '<head></head>'
                }]
            }, {
                line: [{
                    tag: '<body></body>'
                }]
            }]
        }],
        time: 6000
    }
},
//   /\ Теги верхнего уровня Top level tags
//   \/ Теги заголовка документа
// {
//     slide: {
//         see: [{
//             col: [{
//                 line: [{
//                     'h1 text': 'Теги заголовка документа'
//                 }]
//             }, {
//                 line: [{
//                     tag: '<html></html>'
//                 }]
//             }, {
//                 line: [{
//                     tag: '<head></head>'
//                 }]
//             }, {
//                 line: [{
//                     tag: '<body></body>'
//                 }]
//             }]
//         }],
//         time: 6000
//     }
// },
//   /\ Теги заголовка документа   8888888888888888888888888888888888888888888888888888

//   \/ Test correctly wrong   8888888888888888888888888888888888888888888888888888
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h1 text': 'Test'
                }]
            }, {
                line: [{
                    'text': 'Choose the correct markup'
                }]
            }]
        }, {
            'w-100': []
        }, {
            'col wrong code': [{
                line: [{
                    tag: 'body'
                }]
            }, {
                line: [{
                    tag: '	div '
                }, {
                    attribute_name: 'class='
                }, {
                    attribute_value: '"className"'
                }, {
                    text: 'Text'
                }, {
                    tag: ' div'
                }]
            }, {
                line: [{
                    tag: '	input '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"checkbox"'
                }, {
                    attribute_name: ' checked'
                }]
            }, {
                line: [{
                    tag: 'body'
                }]
            }]
        },{
            'w-100': []
        }, {
            'col correctly code': [{
                line: [{
                    tag: '<body>'
                }]
            }, {
                line: [{
                    tag: '	<div '
                }, {
                    attribute_name: 'id='
                }, {
                    attribute_value: '"idName"'
                }, {
                    tag: '>'
                }, {
                    text: 'Hello'
                }, {
                    tag: '</div>'
                }]
            }, {
                line: [{
                    tag: '	<input '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"text"'
                }, {
                    tag: '>'
                }]
            }, {
                line: [{
                    tag: '</body>'
                }]
            }]
        }, {
            'w-100': []
        }, {
            'col wrong code': [{
                line: [{
                    tag: '<body>'
                }]
            }, {
                line: [{
                    tag: '	<div '
                }, {
                    attribute_name: 'id='
                }, {
                    attribute_value: '"idName"'
                }, {
                    tag: '>'
                }, {
                    text: 'Hello'
                }]
            }, {
                line: [{
                    tag: '	<input '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"text"'
                }, {
                    tag: '>'
                }]
            }, {
                line: [{
                    tag: '</div>'
                }]
            }]
        }],
        time: 12000
    }
},
//   /\ Test   8888888888888888888888888888888888888888888888888888

//   \/ practice            8888888888888888888888888888888888888888888888888888
{
    slide: {
        see: [{
            col: [{
                line: [{
                    html: '<a class="button" href="http://">Open in CodePen</a>'
                }, {
                    html: '<div class="button" onclick="copyCode()" >Copy code</div>'
                }]
            }, {
                line: [{
                    tag: '<html>'
                }]
            }, {
                line: [{
                    tag: '	<head>'
                }]
            }, {
                line: [{
                    tag: '		<title>'
                }, {
                    text: 'Practice'
                }, {
                    tag: '</title>'
                }]
            }, {
                line: [{
                    tag: '	</head>'
                }]
            }, {
                line: [{
                    tag: '	<body>'
                }]
            },{
                line: [{
                    tag: '		<nav>'
                }]
            }, {
                line: [{
                    tag: '			<a '
                }, {
                    attribute_name: 'href='
                }, {
                    attribute_value: '"#"'
                }, {
                    tag: '>'
                }, {
                    text: 'The main'
                }, {
                    tag: '</a>'
                }]
            }, {
                line: [{
                    tag: '			<a '
                }, {
                    attribute_name: 'href='
                }, {
                    attribute_value: '"#"'
                }, {
                    tag: '>'
                }, {
                    text: 'Products'
                }, {
                    tag: '</a>'
                }]
            }, {
                line: [{
                    tag: '			<a '
                }, {
                    attribute_name: 'href='
                }, {
                    attribute_value: '"#"'
                }, {
                    tag: '>'
                }, {
                    text: 'About Us'
                }, {
                    tag: '</a>'
                }]
            }, {
                line: [{
                    tag: '		</nav>'
                }]
            }, {
                line: [{
                    tag: '		<hr>'
                }]
            }, {
                line: [{
                    tag: '		<h1>'
                }, {
                    text: 'Well, very simple site'
                }, {
                    tag: '</h1>'
                }]
            }, {
                line: [{
                    tag: '		<p>'
                }, {
                    text: 'For a more beautiful design you need to study CSS.'
                }, {
                    tag: '</p>'
                }]
            }, {
                line: [{
                    tag: '		<p>'
                }, {
                    text: 'Far-far beyond the verbal mountains in the country, vowels and consonants live fish texts.'
                }, {
                    tag: '</p>'
                }]
            }, {
                line: [{
                    tag: '		<a '
                }, {
                    attribute_name: 'href='
                }, {
                    attribute_value: '"#"'
                }, {
                    tag: '>'
                }, {
                    text: 'Link to another page'
                }, {
                    tag: '</a>'
                }]
            }, {
                line: [{
                    tag: '	</body>'
                }]
            }, {
                line: [{
                    tag: '</html>'
                }]
            }]
        }],
        time: 12000,
        copyCode: HTML_RU_code3
    }
},
//   /\ practice

//   \/ Source
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h1 text': 'Useful links.'
                }]
            }, {
                line: [{
                    'html': '<a href="http://htmlbook.ru/">"HTML book" - Учебник</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="https://html5book.ru/">"HTML5 BOOK" - Учебник</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="https://codebra.ru/">"CODEBRA" - Учебник с практикой</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="www.cyberforum.ru/">"CyberForum" - Форум</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="https://ru.stackoverflow.com/">"StackOverflow" - Форум</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="http://programmersforum.ru/">"Клуб ПРОграммистов" - Форум</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="http://forum.vingrad.ru/">"VINGRAD" - Форум</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="http://www.html.by/">"HTML" - Форум</a>'
                }]
            }]
        }],
        time: 3000
    }
}
];

