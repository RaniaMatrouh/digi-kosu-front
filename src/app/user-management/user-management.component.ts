import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent {
  users: User[] = [
    { id: 1, name: 'Ali Ghorbali', email: 'Ali.Ghorbali@leoni.com', role: 'Admin' },

    { id: 2, name: 'Rania matrouh', email: 'rania.matrouh@leoni.com', role: 'User' },
  ];

  editUser(userId: number): void {
    // Implement user edit functionality
    alert(`Editing user with ID: ${userId}`);
  }

  deleteUser(userId: number): void {
    // Implement user delete functionality
    alert(`Deleting user with ID: ${userId}`);
    this.users = this.users.filter(user => user.id !== userId);
  }
}
