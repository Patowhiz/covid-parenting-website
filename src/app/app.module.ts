import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpreadsheetService } from './shared/services/spreadsheet.service';
import { CaseworkersComponent } from './caseworkers/caseworkers.component';
import { PsaComponent } from './psa/psa.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContributorsComponent,
    CaseworkersComponent,
    PsaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    SpreadsheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
