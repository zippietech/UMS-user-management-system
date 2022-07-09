// collect all required testing objects for Angular App
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
// for Two-Way binding
import { FormsModule } from '@angular/forms';
// import component to be tested and its dependencies
import { User } from '@app/_models';
import { HomeComponent } from "./home.component";

// define the test suit
describe('HomeComponent', () => {
  // dfefine the required objects fot test
  let component: HomeComponent;
  // defining the Component Fixture to monitor changed in component
  // e.g. DataBinding changes
  let fixture: ComponentFixture;
  // define the HTML element
  let button: HTMLElement;
  // define the test env. so that the test will be
  // using Angular standard modules to execute test on component

  beforeEach(() => {
    // defin the TestBedConfiguration
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [FormsModule]
    }).compileComponents(); // the component will be compiled
                            // (includes HTML Tremplate)
  });
  // definition for all objects before test starts
  beforeEach(() => {
     // initiaze the fixture so that the component 'selector'
    // and its HTML template will be initialized
    fixture = TestBed.createComponent(HomeComponent);
    // read the component's instace to execute method in it
    component = fixture.componentInstance;
    // detect the first databinding changes
    fixture.detectChanges();
  });

  it('should show user profile', () => {
    // expect(element.querySelector('input[disabled]').value).toEqual('800');
  })
});