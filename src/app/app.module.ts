import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { PostsService} from './services/posts.service';
import { CommentsService} from './services/comments.service';

import { ArticleComponent } from './views/article/article.component';
import { FormsModule} from '@angular/forms';
import { MainnavComponent } from './shared/mainnav/mainnav.component';
import { IconComponent } from './shared/icon/icon.component'


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    MainnavComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsService,CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
