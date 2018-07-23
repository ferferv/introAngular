import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ArticleComponent } from './article/article.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCardComponent,
    UserProfileComponent,
    ArticleComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
