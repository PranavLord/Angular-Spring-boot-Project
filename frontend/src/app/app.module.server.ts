import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module'; // Import your AppModule for the server-side
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule, // Import the AppModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
