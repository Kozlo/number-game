// dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// components
import { AppComponent } from './app.component';

// services
import { GameService } from './game.service';
import { GameComponent } from './game/game.component';
import { ExistingGameComponent } from './game/existing-game.component';

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
  },
  {
    path: 'game/:id',
    component: ExistingGameComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ExistingGameComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
