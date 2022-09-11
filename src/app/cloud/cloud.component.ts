import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cloud',
  template: '',
})
export class CloudComponent implements OnInit {


  private url: string = 'http://vladimirantin.ddns.net:7777/index.php/s';
  private key: string = '';

  constructor(private _act: ActivatedRoute) {
    this.key = this._act.snapshot.paramMap.get('key').trim();
  }

  ngOnInit(): void {
    window.location.href = `${this.url}/${this.key}`
  }

}
