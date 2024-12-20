import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-crud-buttons',
  standalone: true,  // Mark this component as standalone
  imports: [RouterModule],  // Ensure RouterModule is imported
  templateUrl: './crud-buttons.component.html',
  styleUrls: ['./crud-buttons.component.css']
})
export class CrudButtonsComponent {
  constructor(private router: Router) {}

  onCreate() {
    this.router.navigate(['/create']);  // Navigate to the create route
  }

  onRead() {
    this.router.navigate(['/read']);
  }

  onUpdate() {
    this.router.navigate(['/update']);
  }

  onDelete() {
    this.router.navigate(['/delete']);
  }
}
