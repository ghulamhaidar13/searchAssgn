import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
// import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
// import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import { ProfileDataService } from './services/profile-data.service';
import { MessageService } from 'primeng/components/common/messageservice';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // TableModule,
    // DropdownModule,
    ToastModule,
    FormsModule,
    CardModule,
    InputTextModule
  ],
  providers: [ProfileDataService,MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
