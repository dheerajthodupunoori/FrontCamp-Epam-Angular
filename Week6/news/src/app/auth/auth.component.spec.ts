import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AuthComponent } from "./auth.component";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";

describe("AuthComponent", () => {
  const { _routerSpy, _activatedRouteSpy } = setup();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthComponent,
        { provide: Router, useValue: _routerSpy },
        { provide: ActivatedRoute, useValue: _activatedRouteSpy },
        AuthService
      ]
    }).compileComponents();
  });

  it("Component should be created", () => {
    const _authComponent = TestBed.get(AuthComponent);
    expect(_authComponent).toBeTruthy();
  });

  it("is isLoggedIn property should be undefined after creating the component", () => {
    const _authComponent = TestBed.get(AuthComponent);
    expect(_authComponent.isLoggedIn).toBeUndefined();
  });

  it("isLoggedIn property should be either true or false after calling ngOnInIt() method", () => {
    localStorage.setItem("isLoggedIn", "true");
    const _authComponent = TestBed.get(AuthComponent);
    _authComponent.ngOnInit();
    expect(_authComponent.isLoggedIn).toEqual(true);
  });

  it("displayLogInForm property should be true after calling showLogInForm() method", () => {
    const _authComponent = TestBed.get(AuthComponent);
    // _authComponent.displayLogInForm = true;
    _authComponent.showLogInForm();
    expect(_authComponent.displayLogInForm).toEqual(true);
  });
});

function setup() {
  const _routerSpy = jasmine.createSpyObj("Router", ["navigateByUrl"]);
  const _activatedRouteSpy = jasmine.createSpyObj("ActivatedRoute", [
    "toString"
  ]);
  return { _routerSpy, _activatedRouteSpy };
}
