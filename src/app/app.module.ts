import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalariesComponent } from './components/salaries/salaries.component';
import { SalariesServiceService } from 'src/app/salaries-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SalariesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // AngularFontAwesomeModule
  ],
  providers: [SalariesServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
