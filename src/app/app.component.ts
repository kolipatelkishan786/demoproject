import {Component, OnInit} from '@angular/core';
import {Idata} from './interfaces/Idata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Idata[] = [];


  ngOnInit() {
  }

  onSave(obj: Idata) {
    this.data.push(obj);
  }
}
