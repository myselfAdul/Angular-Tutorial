import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TutorialComponent } from "./tutorial/tutorial.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TutorialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial';
}

