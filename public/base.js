var isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry/),
    firstEnter,
    se = '',
    zoera = document.getElementById('zoera'),
    h1 = document.getElementsByTagName('h1')[0];

myTap = new Tap(document.body);
document.addEventListener('keydown', function(event) {
    keychar = String.fromCharCode(event.keyCode);
    keychar = keychar.toLowerCase();

    var asdas = String(atob('NDI='));
    if (firstEnter) {
        if (~'abcdefghijklmnopqrstuvwxyz0123456789'.indexOf(keychar)) {
            zoera.textContent = zoera.textContent + '*';
            se = se + keychar;
        } else if (event.keyCode === 8) {
            event.preventDefault();
            zoera.textContent = zoera.textContent.substring(0, zoera.textContent.length - 1);
            se = se.substring(0, se.length - 1);
        } else if (event.keyCode === 13) {
            if (se === asdas) {
                agoraVai();
            } else {
                h1.textContent = 'WRONG PASSWORD. TRY AGAIN';
                zoera.textContent = '';
                se = '';
            }
        }

    } else if (event.keyCode === 13) {
        h1.textContent = 'ENTER PASSWORD';
        h1.classList.remove('blink');
        document.getElementsByTagName('div')[0].className = 'top40 wrapper';
        document.getElementsByTagName('div')[2].className = 'blink cursor';
        firstEnter = true;
    }
});
var typewrite = function(str, du) {
    var p, nChar, strStyle, d = du,
        arrP = document.querySelectorAll(str),
        style = document.documentElement.appendChild(document.createElement('style'));

    for (var i = 0; i < arrP.length; i++) {
        p = arrP[i];
        p.className += ' typewrite ';
        nChar = p.textContent.length;

        var rule = p.id + '_typing { from { width: 0 } to { width: ' + p.offsetWidth + 'px } }';
        if (CSSRule.WEBKIT_KEYFRAMES_RULE) { // WebKit
            style.sheet.insertRule('@-webkit-keyframes ' + rule, 0);
        } else if (CSSRule.MOZ_KEYFRAMES_RULE) { // Moz
            style.sheet.insertRule('@-moz-keyframes ' + rule, 0);
        } else if (CSSRule.KEYFRAMES_RULE) { // W3C
            style.sheet.insertRule('@keyframes ' + rule, 0);
        }

        rule = '{width: auto;}';
        style.sheet.insertRule('#' + p.id + '.end' + rule, 0);

        strStyle = p.id + '_typing ' + d + 's steps(' + nChar + ', end) ' + i * d + 's';
        p.style['animation'] = strStyle;
        p.style['-webkit-animation'] = strStyle;
        p.style['MozAnimation'] = strStyle;
        p.style['-ms-animation'] = strStyle;

        p.className += ' startTypewrite ';

        p.addEventListener('animationend', typewrite_cb, false);
        p.addEventListener('webkitAnimationEnd', typewrite_cb, false);
    }
};

var typewrite_cb = function(e) {
    e.target.className += ' end ';
    var pList = document.querySelectorAll('.v-wrapper > div.l p'),
        lastP = pList[pList.length - 1];

    if (e.target !== lastP) {
        e.target.insertAdjacentHTML('afterend', '<div class="clear"></div>');
    }
};

var insertText = function(text) {
    document.querySelector('.v-wrapper > .l .cursor').insertAdjacentHTML('beforebegin', text);
};

var agoraVai = function() {
    zoera.textContent = '';
    document.getElementsByTagName('div')[2].className = 'cursor';
    se = '';
    firstEnter = false;
    document.querySelector('.wrapper').style.display = 'none';
    document.querySelector('.v-wrapper').style.transform = 'scale(1)';
    document.querySelector('.v-wrapper').style.opacity = '1';

    if (isMobile) {
        document.querySelectorAll('.v-w').innerHTML = '<img src="v.gif" alt="Gus">';
    } else {
        document.getElementById('video1').play();
    }

    var v = document.createElement('p');

    v.setAttribute('id', 'p01');
    v.textContent = 'Codename: Gus';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p02');
    v.textContent = 'Age: 25';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p02a');
    v.textContent = 'Fuel: Coffee ~ Pizza';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p03');
    v.textContent = 'Base of Operations: Amsterdam';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p04');
    v.textContent = 'Mission: to create awesome websites';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p05');
    v.textContent = ' ';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p06');
    v.textContent = 'Skills:';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p07');
    v.textContent = 'HTML5 ~ CSS3 ~ SASS ~ Javascript';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p08');
    v.textContent = 'React ~ Ember ~ ES6 ~ Gulp ~ Webpack';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p09');
    v.textContent = 'Django Framework ~ git ~ SEO';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p10');
    v.textContent = 'mobile ~ responsive layouts';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p11');
    v.textContent = ' ';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p12');
    v.textContent = 'Worked with:';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p13');
    v.textContent = 'Apache ~ nginx/uwsgi ~ http/2';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p14');
    v.textContent = 'Varnish ~ memcached ~ elasticsearch';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p15');
    v.textContent = 'PHP ~ Python ~ Ruby ~ Go';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p16');
    v.textContent = 'MySQL ~ PostgreSQL ~ MongoDB';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p17');
    v.textContent = 'performance optimization';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p18');
    v.textContent = ' ';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p19');
    v.textContent = 'Operating Systems:';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p20');
    v.textContent = 'macOS';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p21');
    v.textContent = 'Ubuntu';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p22');
    v.textContent = 'Windows';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p23');
    v.textContent = ' ';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p24');
    v.textContent = 'Secret Interests:';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p25');
    v.textContent = 'to take over the world';
    insertText(v.outerHTML);

    v.setAttribute('id', 'p26');
    v.textContent = 'long walks on the beach';
    insertText(v.outerHTML);

    typewrite('#p01, #p02, #p02a, #p03, #p04, #p05, #p06, #p07, #p08, #p09, #p10, #p11, #p12, #p13, #p14, #p15, #p16, #p17, #p18, #p19, #p20, #p21, #p22, #p23, #p24, #p25, #p26', 2);
}

if (isMobile) {
    document.querySelector('.wrapper h1').textContent = 'DOUBLE TAP IT';
    document.body.addEventListener('tap', agoraVai, false);
}
