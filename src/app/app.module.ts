import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Main/Main.component';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Home/Home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { NavbareComponent } from './Navbare/Navbare.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule,NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap' ; 
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [				
    AppComponent,
      MainComponent,
      LoginComponent,
      HomeComponent,
      NavbareComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
