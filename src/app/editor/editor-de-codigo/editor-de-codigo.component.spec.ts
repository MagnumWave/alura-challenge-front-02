import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDeCodigoComponent } from './editor-de-codigo.component';

describe('EditorDeCodigoComponent', () => {
  let component: EditorDeCodigoComponent;
  let fixture: ComponentFixture<EditorDeCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorDeCodigoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorDeCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
