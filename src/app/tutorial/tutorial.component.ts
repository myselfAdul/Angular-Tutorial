import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css'],
})
export class TutorialComponent {
  title = 'Angular Tutorial';
  description = 'This is an example of an Angular component.';
  items = ['Item 1', 'Item 2', 'Item 3'];
  localHostUrl = 'http://localhost:4200';

  // Manage visibility of FAQ answers
  visibilityStates: { [key: string]: boolean } = {
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
    faq6: false,
    faq7: false,
    faq8: false,
  };
  toggleVisibility(faqKey: keyof typeof this.visibilityStates): void {
    this.visibilityStates[faqKey] = !this.visibilityStates[faqKey]; // Toggle the visibility
  }
}
