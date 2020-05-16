import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html'
})
export class ParticlesComponent implements OnInit {
  style = {};
  params = {};

  ngOnInit() {
    this.style = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.params = {
      particles: {
        number: {
          value: 30,
        },
        color: {
          value: '#fff'
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
      }
    };
  }
}
