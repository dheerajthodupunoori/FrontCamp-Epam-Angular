import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { users } from "../Config/user-mock-data";
import { AdminComponent } from "./admin.component";
import { UserService } from "../services/user.service";
import { DebugElement } from "@angular/core";

fdescribe("AdminComponent", () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let _userService: UserService;
  let debugElement: DebugElement;
  let _userServiceSpy;
  let _userServiceFakeSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent],
      providers: [UserService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
    _userService = debugElement.injector.get(UserService);
    _userServiceSpy = spyOn(_userService, "getAllUsers").and.returnValue(users);
    // _userServiceSpy = spyOn(_userService, "getAllUsers").and.callFake(
    //   function() {
    //     return null;
    //   }
    // );
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("spyOn UserService getAllUsers() method", () => {
    component.ngOnInit();
    expect(_userServiceSpy).toHaveBeenCalled();
    expect(component.users).toEqual(users);
  });

  //.and.callFake test case for user service spy

  // it("getAllUsers() Fake Spy implementation", () => {
  //   component.ngOnInit();
  //   expect(_userServiceSpy).toHaveBeenCalled();
  //   expect(component.users).toEqual(null);
  // });
});
