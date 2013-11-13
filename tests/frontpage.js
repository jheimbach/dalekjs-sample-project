var url = 'http://127.0.0.1:9001/';

module.exports = {

    'Page title is correct': function (test) {
        test
            .open(url)
            .assert.title().is('Simple Responsive Template', 'It has title')
            .done();
    }
};