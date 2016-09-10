import { Component } from '@angular/core';
import { NewcomponentComponent } from './newcomponent.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [NewcomponentComponent]
})
export class AppComponent {
  title = 'app works!';
}
