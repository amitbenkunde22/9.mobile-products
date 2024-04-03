import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  selectedFrameWork : string = 'vue'
  constructor() { }

  ngOnInit(): void {
  }
  // onTabClick(val : string){
  //   console.log(val)
  //   this.selectedFrameWork = val
  // }
  onTabClick(eve : Event ){
    // let val = (eve.target as HTMLAnchorElement).getAttribute('data-framework') as string
    // let val = (eve.target as HTMLAnchorElement).dataset['framework'] as string
    // console.log(val)
    // this.selectedFrameWork = val
    /* Another way */
    this.selectedFrameWork = (eve.target as HTMLAnchorElement).dataset['framework'] as string
  }

}
