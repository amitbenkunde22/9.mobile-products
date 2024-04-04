import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';

@Component({
  selector: 'app-tab-for2',
  templateUrl: './tab-for2.component.html',
  styleUrls: ['./tab-for2.component.scss']
})
export class TabFor2Component implements OnInit {
  selectedFrameWork : string = 'Angular'
  tabArr : Array<Itab> = [
    {
      tabTitle : 'Angular',
      tabContent : '<strong>Angular</strong>Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.'
    },
    {
      tabTitle : 'React',
      tabContent : '<strong>React</strong>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript'
    },
    {
      tabTitle : 'Bootstrap',
      tabContent : '<strong>Bootstrap</strong>Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites. Bootstrap 5 is the newest version of Bootstrap.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
