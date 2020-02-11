import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlotiesComponent } from './zloties.component';

describe('ZlotemysliComponent', () => {
  let component: ZlotiesComponent;
  let fixture: ComponentFixture<ZlotiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZlotiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlotiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
