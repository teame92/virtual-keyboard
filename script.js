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
            key.classList.add('space')
        } else if (key.innerHTML === 'Shift') {
            key.classList.add('shift')
        } else if (key.innerHTML === 'Enter') {
            key.classList.add('enter')
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
        text.setAttribute('autofocus', 'autofocus')
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

        const description = createElement('div', 'description');
        wrapper.append(description);

        const descOS = createElement('p', 'description__os');
        descOS.innerHTML = 'OS Windows';
        description.append(descOS);

        const descSwitchLang = createElement('p', 'description__switch-lang');
        descSwitchLang.innerHTML = 'Switch the language: Ctrl + Alt';
        description.append(descSwitchLang);
    }


}

const keyboard = new Keyboard(localStorage.getItem('lang') || 'en')
keyboard.init()