import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {}

  navigateTo(section: string): void {
    if (section === 'kosu') {
      this.router.navigate(['/kosu-list']);
    } else if (section === 'incident') {
      this.router.navigate(['/incident-list']);
    }
  }
}
