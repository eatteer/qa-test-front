import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRootComponent } from './panel-root.component';

describe('PanelRootComponent', () => {
  let component: PanelRootComponent;
  let fixture: ComponentFixture<PanelRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelRootComponent]
    });
    fixture = TestBed.createComponent(PanelRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
