import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RatingService } from '../../services/rating.service';
import { MockRatingService } from '../../services/rating.service.mock';
import { SingleRatingComponent } from './single-rating.component';

describe('SingleRatingComponent', () => {
  let component: SingleRatingComponent;
  let fixture: ComponentFixture<SingleRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleRatingComponent],
      imports: [],
      providers: [
        {
          provide: RatingService,
          useClass: MockRatingService
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should accept values a single-rating component', () => {
    component.rate('up', 2);
    component.rate('up', 2);
    component.rate('up', 2);
    component.rate('up', 2);
    component.rate('up', 2);
    component.rate('up', 2);
    component.rate('up', 2);
    component.rate('up', 2);
    component.rate('up', 2);
    component.rate('up', 2);
    expect(this.votes).toEqual(undefined);
    expect(this.id).toEqual(undefined);
  });
});
