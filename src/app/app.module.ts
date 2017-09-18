import { environment } from '../environments/environment';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './shared-components/map/map.component';
import { HomeComponent } from './containers/home/home.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { LoginComponent } from './containers/login/login.component';
import { ChatComponent } from './containers/home/chat/chat.component';
import { ChatCreateComponent } from './containers/home/chat-create/chat-create.component';
import { MessageComponent } from './containers/home/message/message.component';

import { routes } from './app-routes';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {AuthService} from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    ChatComponent,
    ChatCreateComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
