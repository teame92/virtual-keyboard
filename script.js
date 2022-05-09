const arrKeys = [{
        text: { en: '`', ru: 'ё' },
        upperText: { en: '~', ru: 'Ё' },
        code: 'Backquote',
    },
    {
        text: { en: '1', ru: '1' },
        upperText: { en: '!', ru: '!' },
        code: 'Digit1',
    },
    {
        text: { en: '2', ru: '2' },
        upperText: { en: '@', ru: '"' },
        code: 'Digit2',
    },
    {
        text: { en: '3', ru: '3' },
        upperText: { en: '#', ru: '№' },
        code: 'Digit3',
    },
    {
        text: { en: '4', ru: '4' },
        upperText: { en: '$', ru: ';' },
        code: 'Digit4',
    },
    {
        text: { en: '5', ru: '5' },
        upperText: { en: '%', ru: '%' },
        code: 'Digit5',
    },
    {
        text: { en: '6', ru: '6' },
        upperText: { en: '^', ru: ':' },
        code: 'Digit6',
    },
    {
        text: { en: '7', ru: '7' },
        upperText: { en: '&amp;', ru: '?' },
        code: 'Digit7',
    },
    {
        text: { en: '8', ru: '8' },
        upperText: { en: '*', ru: '*' },
        code: 'Digit8',
    },
    {
        text: { en: '9', ru: '9' },
        upperText: { en: '(', ru: '(' },
        code: 'Digit9',
    },
    {
        text: { en: '0', ru: '0' },
        upperText: { en: ')', ru: ')' },
        code: 'Digit0',
    },
    {
        text: { en: '-', ru: '-' },
        upperText: { en: '_', ru: '_' },
        code: 'Minus',
    },
    {
        text: { en: '=', ru: '=' },
        upperText: { en: '+', ru: '+' },
        code: 'Equal',
    },
    {
        text: { en: 'Backspace', ru: 'Backspace' },
        upperText: { en: 'Backspace', ru: 'Backspace' },
        code: 'Backspace',
    },
    {
        text: { en: 'Tab', ru: 'Tab' },
        upperText: { en: 'Tab', ru: 'Tab' },
        code: 'Tab',
    },
    {
        text: { en: 'q', ru: 'й' },
        upperText: { en: 'Q', ru: 'Й' },
        code: 'KeyQ',
    },
    {
        text: { en: 'w', ru: 'ц' },
        upperText: { en: 'W', ru: 'Ц' },
        code: 'KeyW',
    },
    {
        text: { en: 'e', ru: 'у' },
        upperText: { en: 'E', ru: 'У' },
        code: 'KeyE',
    },
    {
        text: { en: 'r', ru: 'к' },
        upperText: { en: 'R', ru: 'К' },
        code: 'KeyR',
    },
    {
        text: { en: 't', ru: 'е' },
        upperText: { en: 'T', ru: 'Е' },
        code: 'KeyT',
    },
    {
        text: { en: 'y', ru: 'н' },
        upperText: { en: 'Y', ru: 'Н' },
        code: 'KeyY',
    },
    {
        text: { en: 'u', ru: 'г' },
        upperText: { en: 'U', ru: 'Г' },
        code: 'KeyU',
    },
    {
        text: { en: 'i', ru: 'ш' },
        upperText: { en: 'I', ru: 'Ш' },
        code: 'KeyI',
    },
    {
        text: { en: 'o', ru: 'щ' },
        upperText: { en: 'O', ru: 'Щ' },
        code: 'KeyO',
    },
    {
        text: { en: 'p', ru: 'з' },
        upperText: { en: 'P', ru: 'З' },
        code: 'KeyP',
    },
    {
        text: { en: '[', ru: 'х' },
        upperText: { en: '{', ru: 'Х' },
        code: 'BracketLeft',
    },
    {
        text: { en: ']', ru: 'ъ' },
        upperText: { en: '}', ru: 'Ъ' },
        code: 'BracketRight',
    },
    {
        text: { en: '\\', ru: '\\' },
        upperText: { en: '|', ru: '/' },
        code: 'Backslash',
    },
    {
        text: { en: 'Del', ru: 'Del' },
        upperText: { en: 'Del', ru: 'Del' },
        code: 'Delete',
    },
    {
        text: { en: 'Caps Lock', ru: 'Caps Lock' },
        upperText: { en: 'Caps Lock', ru: 'Caps Lock' },
        code: 'CapsLock',
    },
    {
        text: { en: 'a', ru: 'ф' },
        upperText: { en: 'A', ru: 'Ф' },
        code: 'KeyA',
    },
    {
        text: { en: 's', ru: 'ы' },
        upperText: { en: 'S', ru: 'Ы' },
        code: 'KeyS',
    },
    {
        text: { en: 'd', ru: 'в' },
        upperText: { en: 'D', ru: 'В' },
        code: 'KeyD',
    },
    {
        text: { en: 'f', ru: 'а' },
        upperText: { en: 'F', ru: 'А' },
        code: 'KeyF',
    },
    {
        text: { en: 'g', ru: 'п' },
        upperText: { en: 'G', ru: 'П' },
        code: 'KeyG',
    },
    {
        text: { en: 'h', ru: 'р' },
        upperText: { en: 'H', ru: 'Р' },
        code: 'KeyH',
    },
    {
        text: { en: 'j', ru: 'о' },
        upperText: { en: 'J', ru: 'О' },
        code: 'KeyJ',
    },
    {
        text: { en: 'k', ru: 'л' },
        upperText: { en: 'K', ru: 'Л' },
        code: 'KeyK',
    },
    {
        text: { en: 'l', ru: 'д' },
        upperText: { en: 'L', ru: 'Д' },
        code: 'KeyL',
    },
    {
        text: { en: ';', ru: 'ж' },
        upperText: { en: ':', ru: 'Ж' },
        code: 'Semicolon',
    },
    {
        text: { en: '\'', ru: 'э' },
        upperText: { en: '"', ru: 'Э' },
        code: 'Quote',
    },
    {
        text: { en: 'Enter', ru: 'Enter' },
        upperText: { en: 'Enter', ru: 'Enter' },
        code: 'Enter',
    },
    {
        text: { en: 'Shift', ru: 'Shift' },
        upperText: { en: 'Shift', ru: 'Shift' },
        code: 'ShiftLeft',
    },
    {
        text: { en: 'z', ru: 'я' },
        upperText: { en: 'Z', ru: 'Я' },
        code: 'KeyZ',
    },
    {
        text: { en: 'x', ru: 'ч' },
        upperText: { en: 'X', ru: 'Ч' },
        code: 'KeyX',
    },
    {
        text: { en: 'c', ru: 'с' },
        upperText: { en: 'C', ru: 'С' },
        code: 'KeyC',
    },
    {
        text: { en: 'v', ru: 'м' },
        upperText: { en: 'V', ru: 'М' },
        code: 'KeyV',
    },
    {
        text: { en: 'b', ru: 'и' },
        upperText: { en: 'B', ru: 'И' },
        code: 'KeyB',
    },
    {
        text: { en: 'n', ru: 'т' },
        upperText: { en: 'N', ru: 'Т' },
        code: 'KeyN',
    },
    {
        text: { en: 'm', ru: 'ь' },
        upperText: { en: 'M', ru: 'Ь' },
        code: 'KeyM',
    },
    {
        text: { en: ',', ru: 'б' },
        upperText: { en: '&lt;', ru: 'Б' },
        code: 'Comma',
    },
    {
        text: { en: '.', ru: 'ю' },
        upperText: { en: '&gt;', ru: 'Ю' },
        code: 'Period',
    },
    {
        text: { en: '/', ru: '.' },
        upperText: { en: '?', ru: ',' },
        code: 'Slash',
    },
    {
        text: { en: '&uarr;', ru: '&uarr;' },
        upperText: { en: '&uarr;', ru: '&uarr;' },
        code: 'ArrowUp',
    },
    {
        text: { en: 'Shift', ru: 'Shift' },
        upperText: { en: 'Shift', ru: 'Shift' },
        code: 'ShiftRight',
    },
    {
        text: { en: 'Ctrl', ru: 'Ctrl' },
        upperText: { en: 'Ctrl', ru: 'Ctrl' },
        code: 'ControlLeft',
    },
    {
        text: { en: 'Win', ru: 'Win' },
        upperText: { en: 'Win', ru: 'Win' },
        code: 'MetaLeft',
    },
    {
        text: { en: 'Alt', ru: 'Alt' },
        upperText: { en: 'Alt', ru: 'Alt' },
        code: 'AltLeft',
    },
    {
        text: { en: ' ', ru: ' ' },
        upperText: { en: ' ', ru: ' ' },
        code: 'Space',
    },
    {
        text: { en: 'Alt', ru: 'Alt' },
        upperText: { en: 'Alt', ru: 'Alt' },
        code: 'AltRight',
    },
    {
        text: { en: '&larr;', ru: '&larr;' },
        upperText: { en: '&larr;', ru: '&larr;' },
        code: 'ArrowLeft',
    },
    {
        text: { en: '&darr;', ru: '&darr;' },
        upperText: { en: '&darr;', ru: '&darr;' },
        code: 'ArrowDown',
    },
    {
        text: { en: '&rarr;', ru: '&rarr;' },
        upperText: { en: '&rarr;', ru: '&rarr;' },
        code: 'ArrowRight',
    },
    {
        text: { en: 'Ctrl', ru: 'Ctrl' },
        upperText: { en: 'Ctrl', ru: 'Ctrl' },
        code: 'ControlRight',
    }
];

function createElement(tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}

class Key {
    constructor({
        text,
        upperText,
        code,
    }, lang) {
        this.text = text;
        this.upperText = upperText;
        this.code = code;
        this.lang = lang;
    }

    generate() {
        const key = document.createElement('button');
        key.classList.add('keyboard__key');
        key.innerHTML = this.text[this.lang];
        if (key.innerHTML === ' ') {
            key.classList.add('space');
        } else if (key.innerHTML === 'Shift') {
            key.classList.add('shift');
        } else if (key.innerHTML === 'Enter') {
            key.classList.add('enter');
        }

        return key;
    }
}


class Keyboard {
    constructor(lang = 'en') {
        this.keys = [];
        this.lang = lang;
        this.isCaps = false;
        this.isShiftPressed = false;
        this.isCtrl = false;
        this.isAlt = false;
        this.textarea = null;
    }

    init() {
        const wrapper = createElement('div', 'wrapper');
        document.body.append(wrapper);

        const text = createElement('textarea', 'textarea');
        text.setAttribute('autofocus', 'autofocus');
        wrapper.append(text);

        this.textarea = document.querySelector('.textarea');

        const keyboard = createElement('div', 'keyboard');
        wrapper.append(keyboard);

        const keyboardKeys = createElement('div', 'keyboard__keys');
        keyboard.append(keyboardKeys);
        arrKeys.forEach((k) => {
            const key = new Key(k, this.lang);
            keyboardKeys.append(key.generate());
        });

        this.keys = document.querySelectorAll('.keyboard__key');

        this.textarea.addEventListener('blur', () => {
            this.textarea.focus();
        });

        const description = createElement('div', 'description');
        wrapper.append(description);

        const descOS = createElement('p', 'description__os');
        descOS.innerHTML = 'OS Windows';
        description.append(descOS);

        const descSwitchLang = createElement('p', 'description__switch-lang');
        descSwitchLang.innerHTML = 'Switch the language: Ctrl + Alt';
        description.append(descSwitchLang);

        keyboardKeys.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.innerHTML === 'Caps Lock') {
                if (e.target.classList.contains('keyboard__key-active')) {
                    e.target.classList.remove('keyboard__key-active');
                } else {
                    e.target.classList.add('keyboard__key-active');
                }
            }
            if (e.target.classList.contains('keyboard__key') && !e.target.classList.contains('shift')) {
                this.identifyKey(e.target.innerHTML);
            }
        });

        keyboardKeys.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('shift')) {
                this.isShiftPressed = true;
                this.shiftKeyHandler();
            }
        });

        keyboardKeys.addEventListener('mouseup', (e) => {
            if (e.target.classList.contains('shift')) {
                if (this.isCaps) {
                    this.isShiftPressed = false;
                    this.isCaps = !this.isCaps;
                    this.capsKeyHandler();
                    this.shiftKeyHandler();
                    this.isCaps = !this.isCaps;
                    this.capsKeyHandler();
                } else {
                    this.isShiftPressed = false;
                    this.shiftKeyHandler();
                }
            }
        });

        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            const { key, keyFoundCode } = this.findKey(e.code);
            if (!key) {
                return;
            }
            if (key === 'Ctrl') {
                this.isCtrl = !this.isCtrl;
            } else if (key === 'Alt') {
                this.isAlt = !this.isAlt;
            }
            this.identifyKey(key);
            const target = this.findTarget(key, keyFoundCode, e.code);
            if (target) {
                if (target.classList.contains('keyboard__key-active') && target.innerHTML === 'Caps Lock') {
                    target.classList.remove('keyboard__key-active');
                } else {
                    target.classList.add('keyboard__key-active');
                }
            }
        });

        document.addEventListener('keyup', (e) => {
            e.preventDefault();
            const { key, keyFoundCode } = this.findKey(e.code);
            if (!key) {
                return;
            }
            if (key === 'Caps Lock') {
                return;
            }
            if (key === 'Ctrl') {
                this.isCtrl = false;
            }
            if (key === 'Alt') {
                this.isAlt = false;
            }
            if (key === 'Shift') {
                if (this.isCaps) {
                    this.isShiftPressed = false;
                    this.isCaps = !this.isCaps;
                    this.capsKeyHandler();
                    this.shiftKeyHandler();
                } else {
                    this.isShiftPressed = false;
                    this.shiftKeyHandler();
                }
            }

            const target = this.findTarget(key, keyFoundCode, e.code);
            if (target) {
                target.classList.remove('keyboard__key-active');
            }
        });

    }

    findKey(eventCode) {
        let key;
        const keyFound = arrKeys.find((k) => k.code === eventCode);
        if (keyFound) {
            key = this.isShiftPressed ? keyFound.upperText[this.lang] : keyFound.text[this.lang];
        }
        const keyFoundCode = keyFound.code;
        return { key, keyFoundCode };
    }

    findTarget(key, keyFoundCode, eventCode) {
        let target;
        for (const k of this.keys) {
            if (k.innerHTML === key || k.innerHTML === key.toUpperCase() ||
                k.innerHTML === key.toLowerCase() || (k.innerHTML === '↑' && key === '&uarr;') ||
                (k.innerHTML === '←' && key === '&larr;') ||
                (k.innerHTML === '↓' && key === '&darr;') ||
                (k.innerHTML === '→' && key === '&rarr;')) {
                if (eventCode === keyFoundCode) {
                    target = k;
                    if (eventCode.includes('Left')) {
                        break;
                    } else if (eventCode.includes('Right')) {
                        continue;
                    }
                }
            }
        }
        return target;
    }

    switchLang() {
        const notLang = this.lang;
        this.lang = this.lang === 'en' ? 'ru' : 'en';
        localStorage.setItem('lang', this.lang);
        for (const btn of this.keys) {
            let key = arrKeys.find((k) => k.text[notLang] === btn.innerHTML ||
                k.upperText[notLang] === btn.innerHTML);
            if (key) {
                if (key.code.includes('Digit')) {
                    continue;
                }
                if (key.code.includes('Key') || key.code === 'Backquote' || key.code === 'BracketLeft' || key.code === 'BracketRight' || key.code === 'Semicolon' || key.code === 'Quote' || key.code === 'Comma' || key.code === 'Period' || key.code === 'Slash') {
                    key = this.isCaps ? key.upperText[this.lang] : key.text[this.lang];
                    btn.innerHTML = key;
                }
            }
        }
    }

    shiftKeyHandler() {
        this.keys.forEach((btn) => {
            let key = arrKeys.find((k) => k.text[this.lang] === btn.innerHTML ||
                k.upperText[this.lang] === btn.innerHTML);
            if (key) {
                key = this.isShiftPressed ? key.upperText[this.lang] : key.text[this.lang];
                btn.innerHTML = key;
            }
        });
        if (this.isCaps && this.isShiftPressed) {
            this.capsKeyHandler();
        }
    }

    capsKeyHandler() {
        this.keys.forEach((btn) => {
            let key = arrKeys.find((k) => k.text[this.lang] === btn.innerHTML ||
                k.upperText[this.lang] === btn.innerHTML);
            let shouldChangeKey = false;
            if (key) {
                if (key.code.includes('Key')) {
                    shouldChangeKey = true;
                }
                if (this.lang === 'ru') {
                    if (key.code === 'Backquote' || key.code === 'BracketLeft' || key.code === 'BracketRight' || key.code === 'Semicolon' || key.code === 'Quote' || key.code === 'Comma' || key.code === 'Period') {
                        shouldChangeKey = true;
                    }
                }
            }
            if (shouldChangeKey) {
                key = this.isCaps ^ this.isShiftPressed ? key.upperText[this.lang] : key.text[this.lang];
                btn.innerHTML = key;
            }
        });
    }

    setCursor(pos) {
        this.textarea.focus();
        this.textarea.selectionStart = pos;
        this.textarea.selectionEnd = pos;
    }

    handleStdTabEnter(value, cursorPos) {
        this.textarea.value = this.textarea.value.substring(0, cursorPos) +
            value + this.textarea.value.substring(cursorPos);
        this.setCursor(cursorPos + value.length);
    }

    handleBackspaceDelete(cursorPos) {
        this.textarea.value = this.textarea.value.substring(0, cursorPos) +
            this.textarea.value.substring(cursorPos + 1);
        this.setCursor(cursorPos);
    }

    stdKeyHandler(key) {
        switch (key) {
            case '&amp;':
                key = '&';
                break;
            case '&lt;':
                key = '<';
                break;
            case '&gt;':
                key = '>';
                break;
            default:
                break;
        }

        const value = this.isCaps ^ this.isShiftPressed ? key.toUpperCase() : key.toLowerCase();
        this.handleStdTabEnter(value, this.textarea.selectionStart);
    }

    arrowsKeyHandler(arrow) {
        switch (arrow) {
            case '↑':
            case '&uarr;':
                this.setCursor(0);
                break;
            case '→':
            case '&rarr;':
                this.setCursor(this.textarea.selectionStart + 1);
                break;
            case '↓':
            case '&darr;':
                this.setCursor(this.textarea.value.length);
                break;

            case '←':
            case '&larr;':
                this.setCursor(this.textarea.selectionStart - 1);
                break;
            default:
                break;
        }
    }

    identifyKey(key) {
        switch (key) {
            case 'Backspace':
                this.handleBackspaceDelete(this.textarea.selectionStart - 1);
                break;
            case 'Tab':
                this.handleStdTabEnter('    ', this.textarea.selectionStart);
                break;
            case 'Del':
                this.handleBackspaceDelete(this.textarea.selectionStart);
                break;
            case 'Caps Lock':
                this.isCaps = !this.isCaps;
                this.capsKeyHandler();
                break;
            case 'Shift':
                this.isShiftPressed = true;
                this.shiftKeyHandler();
                break;
            case 'Ctrl':
                if (this.isCtrl && this.isAlt) {
                    this.switchLang();
                }
                break;
            case 'Win':
                break;
            case 'Alt':
                if (this.isCtrl && this.isAlt) {
                    this.switchLang();
                }
                break;
            case 'Enter':
                this.handleStdTabEnter('\n', this.textarea.selectionStart);
                break;
            case '↑':
            case '&uarr;':
            case '→':
            case '&rarr;':
            case '↓':
            case '&darr;':
            case '←':
            case '&larr;':
                this.arrowsKeyHandler(key);
                break;
            default:
                this.stdKeyHandler(key);
                break;
        }
    }
}

const keyboard = new Keyboard(localStorage.getItem('lang') || 'en');
keyboard.init();