import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightViewerComponent } from './highlight-viewer.component';

describe('HighlightViewerComponent', () => {
  let component: HighlightViewerComponent;
  let fixture: ComponentFixture<HighlightViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
