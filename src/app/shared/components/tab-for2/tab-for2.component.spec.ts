import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFor2Component } from './tab-for2.component';

describe('TabFor2Component', () => {
  let component: TabFor2Component;
  let fixture: ComponentFixture<TabFor2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFor2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabFor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
