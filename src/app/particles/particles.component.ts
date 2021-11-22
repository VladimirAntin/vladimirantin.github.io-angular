import { Component } from '@angular/core';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html'
})
export class ParticlesComponent {
  style = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    'z-index': -1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };
  params = {
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        enable: true,
      },
      move: {
        enable: true,
        speed: 1,
      },
      number: {
        value: 50
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000'
        },
        polygon: {
          nb_sides: 8
        },
      }
    },
    detectRetina: true
  };
}
