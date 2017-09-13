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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
