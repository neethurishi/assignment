import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titleDebugElement: DebugElement;
  let titleElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    titleDebugElement = fixture.debugElement.query(By.css('h3'));
    titleElement = titleDebugElement.nativeElement;
  });

  it('should have title of type Heading3 <h3>', () => {
    expect(titleElement.tagName.toLowerCase()).toEqual('h3');
  });
});
