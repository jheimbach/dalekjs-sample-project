var url = 'http://127.0.0.1:9001/';

module.exports = {
    'Menulink is working': function (test) {
        test
            .open(url)
            .screenshot('screenshots/:browser/before_menulink_is_working.png')
            .click('#menu-main-navigation>li:nth-of-type(2) a')
            .assert.title().is('Simple Responsive Template | Internal Site', 'It has title')
            .back()
            .screenshot('screenshots/:browser/after_menulink_is_working.png')
            .assert.title().is('Simple Responsive Template', 'It has title')
            .wait(10)
            .screenshot('screenshots/:browser/wait_for_images.png')
            .wait(6020)
            .screenshot('screenshots/:browser/wait_for_next_slider.png')
            .done();
    }
}
