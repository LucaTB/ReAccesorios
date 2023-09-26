import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompNavbarComponent } from './components/comp-navbar/comp-navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AbtusComponent } from './pages/abtus/abtus.component';
import { ProdComponent } from './pages/prod/prod.component';
import { VelasComponent } from './pages/prod/velas/velas.component';
import { AlmoComponent } from './pages/prod/almo/almo.component';
import { OtrosComponent } from './pages/prod/otros/otros.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrunComponent } from './pages/scrun/scrun.component';
import { VinComponent } from './pages/vin/vin.component';
import { CestComponent } from './pages/cest/cest.component';

@NgModule({
  declarations: [
    AppComponent,
    CompNavbarComponent,
    HomeComponent,
    AbtusComponent,
    ProdComponent,
    VelasComponent,
    AlmoComponent,
    OtrosComponent,
    HeaderComponent,
    FooterComponent,
    ScrunComponent,
    VinComponent,
    CestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
