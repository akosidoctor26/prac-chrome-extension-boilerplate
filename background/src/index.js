console.log('background.js');

class Background {
  constructor() {}
}

const tout = () => {
  setTimeout(() => {
    console.log('test');
  }, 100);
};

tout();

var bg = new Background();
