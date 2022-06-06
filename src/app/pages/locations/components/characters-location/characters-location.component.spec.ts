import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersLocationComponent } from './characters-location.component';

describe('CharactersLocationComponent', () => {
  let component: CharactersLocationComponent;
  let fixture: ComponentFixture<CharactersLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
