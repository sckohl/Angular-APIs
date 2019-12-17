import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDisplayComponent } from './form-display/form-display.component';
import { DummyRestAPIComponent } from './dummy-rest-api/dummy-rest-api.component';
import { FilterIDPipe } from './filter-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormDisplayComponent,
    DummyRestAPIComponent,
    FilterIDPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
