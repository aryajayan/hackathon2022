import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDataComponent } from './article-data.component';

describe('ArticleDataComponent', () => {
  let component: ArticleDataComponent;
  let fixture: ComponentFixture<ArticleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
