import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationComponent],
      schemas: [NO_ERRORS_SCHEMA] // ignore unknown elements if any
    });
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all education cards with Bootstrap styling', () => {
    const cardElements = fixture.debugElement.queryAll(By.css('.card'));
    expect(cardElements.length).toBe(component.educationDetails.length);

    cardElements.forEach((card, index) => {
      const title = card.query(By.css('.card-title')).nativeElement.textContent;
      expect(title).toContain(component.educationDetails[index].level);
    });
  });
});
