import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import new HttpClient API
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CrudButtonsComponent } from './crud-buttons/crud-buttons.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    UpdateComponent,
    FormsModule
  ],  
  providers: [
    provideHttpClient(withFetch()) // Enable fetch in HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
