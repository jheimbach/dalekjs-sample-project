var url = 'http://127.0.0.1:9001/index-internal.html';

module.exports = {
    'Page title is correct': function (test) {
        test
            .open(url)
            .resize({width: 1280, height: 1024})
            .assert.title().is('Simple Responsive Template | Internal Site', 'It has title')
            .done();
    },

    'Menu is active': function (test) {
        test
            .open(url)
            .assert.text('#menu-main-navigation li.current').is('Internal page demo')
            .done();
    },

    'Submenu is visible': function (test) {
        test
            .open(url)
            .assert.visible('#secondary-navigation', 'Submenu is visible')
            .done();
    },

    'Header is right': function (test) {
        test
            .open(url)
            .assert.text('#content h1').is('Header 1')
            .assert.text('#content h2').is('Header 2')
            .assert.text('#content h3').is('Header 3')
            .assert.text('#content h4').is('Header 4')
            .assert.text('#content h5').is('Header 5')
            .done();
    }
};