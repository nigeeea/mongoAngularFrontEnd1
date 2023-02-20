import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search.component';
import { BGGService } from './bgg.service';
import { DisplayComponent } from './components/display.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BGGService],
  bootstrap: [AppComponent]
})
export class AppModule { }
