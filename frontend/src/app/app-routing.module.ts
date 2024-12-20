import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CrudButtonsComponent } from './crud-buttons/crud-buttons.component'; // Import the component
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CrudButtonsComponent },// Default route for CrudButtonsComponent
  { path: 'create', component: CreateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
