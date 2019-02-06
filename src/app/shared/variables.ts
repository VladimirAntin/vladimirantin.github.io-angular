
export const ngxProgress = {
  radius: 60,
  space: -10,
  outerStrokeWidth: 10,
  innerStrokeColor: '#e7e8ea',
  innerStrokeWidth: 10,
  showSubtitle: false,
  clockwise: false,
  startFromZero: true,
  animation: true,
  animationDuration: 200,
};


export const particles = {
  style : {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'opacity': 0.6
  },
  params:  {
    particles: {
      number: {
        value: 60,
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'triangle',
      },
      move: {
        speed: 6,
        out_mode: 'bounce'
      }
    },
    retina_detect: false
  }
};
