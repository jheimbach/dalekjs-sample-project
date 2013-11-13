var url = 'http://127.0.0.1:9001/';

module.exports = {

    'Page title is correct': function (test) {
        test
            .open(url)
            .resize({width: 1280, height: 1024})
            .assert.title().is('Simple Responsive Template', 'It has title')
            .done();
    },

    'Menu is active': function (test) {
        test
            .open(url)
            .assert.text('#menu-main-navigation li.current').is('Home page')
            .done();
    },

    'Menu is complete': function (test) {
        test
            .open(url)
            .assert.numberOfElements('#menu-main-navigation>li', 5, '5 Menuitems are there')
            .done();
    },

    'Menulink is working': function (test) {
        test
            .open(url)
            .screenshot('screenshots/:browser/before_menulink_is_working.png')
            .click('#menu-main-navigation>li:nth-of-type(2) a')
            .assert.title().is('Simple Responsive Template | Internal Site', 'It has title')
            .back()
            .screenshot('screenshots/:browser/after_menulink_is_working.png')
            .assert.title().is('Simple Responsive Template', 'It has title')
            .wait(5000)
            .screenshot('screenshots/:browser/wait_for_images.png')
            .wait(5000)
            .screenshot('screenshots/:browser/wait_for_next_slider.png')
            .done();
    },

    'Flexslider changes visibility on small screens': function (test) {
        test
            .open(url)
            .assert.visible('#hero .flexslider','Flexslider is visible')
            .resize({width: 768, height: 1024})
            .assert.notVisible('#hero .flexslider','Flexslider is not visible')
            .done();
    }
};