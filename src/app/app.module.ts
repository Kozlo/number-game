// dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';

// services
import { GameService } from './game.service';
import { GameComponent } from './game/game.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full'
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
