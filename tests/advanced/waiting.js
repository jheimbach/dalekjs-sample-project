var url = 'http://127.0.0.1:9001/';

module.exports = {
    'Wait for Slider': function (test) {
        test
            .open(url)
            .waitFor(function() {
                return window.dalek_flexslider_start === 'start';
            })
            .assert.text('.flex-active-slide .flex-caption').is('Love Brazil !!! Sea view from Rio de Janeiro fort.')
            .screenshot('screenshots/:browser/wait_for_images.png')
            .waitFor(function() {
                return window.dalek_flexslider_start === 'Element 1';
            })
            .assert.text('.flex-active-slide .flex-caption').is('El Arco Cabo Mexico. This image is wrapped in a link.')
            .screenshot('screenshots/:browser/wait_for_next_slider.png')
            //...
            .done();
    }
}
