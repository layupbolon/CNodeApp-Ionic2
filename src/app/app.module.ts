import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { List,TopicDetail} from '../pages';
import { Icon,UserImage} from '../components';
import { DateFormatPipe} from '../pipe';

@NgModule({
  declarations: [
    MyApp,
    List,
    TopicDetail,
    Icon,
    UserImage,
    DateFormatPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    List,
    TopicDetail,
    Icon,
    UserImage
  ],
  providers: []
})
export class AppModule {}
