var url = 'http://127.0.0.1:9001/';

module.exports = {
    'Wait for Slider': function (test) {
        test
            .open(url)
            .wait(10)
            .screenshot('screenshots/:browser/wait_for_images.png')
            .wait(6020)
            .screenshot('screenshots/:browser/wait_for_next_slider.png')
            .done();
    }
}
