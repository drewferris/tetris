(function(Tetris) {
  'use strict';

  function _init() {
    var tetris = new Tetris({
      rows: 25,
      cols: 13,
      placeholder: '#tetris'
    });
    tetris.init();
  }

  document.addEventListener('DOMContentLoaded', _init);

}(window.Tetris));
