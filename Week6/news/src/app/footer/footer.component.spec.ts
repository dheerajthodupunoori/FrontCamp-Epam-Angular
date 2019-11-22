import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let h4;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    h4 = fixture.nativeElement.querySelector("h4");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should contain footer text as expected", () => {
    expect(h4.textContent).toContain("@NewsFeed 2019");
  });
});
