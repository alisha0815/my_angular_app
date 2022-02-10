import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  brews: any = Object;

  constructor(private _http: HttpService) {}

  ngOnInit() {
    this._http.getBeer().subscribe((data) => (this.brews = data));
    console.log(this.brews);
  }
}
