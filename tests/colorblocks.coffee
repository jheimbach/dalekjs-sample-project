url = 'http://127.0.0.1:9001/colorblocks.html';

module.exports = {

  'Page title is correct': (test) ->
    test
      .open(url)
      .resize({width: 1280, height: 1024})
      .assert.title().is('Simple Responsive Template | Colorblocks', 'It has the right title')
      .done();

  'Menu is active and has right color': (test) ->
    test
      .open(url)
      .screenshot('screenshots/:browser/menu_active_and_right_color.png')
      .assert.text('#menu-main-navigation li.current').is('Home page')
      .assert.css('#menu-main-navigation li.current a', 'background-color', 'rgba(94, 199, 158, 1)')
      .done();
}