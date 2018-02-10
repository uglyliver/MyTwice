import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JeongyeonComponent } from './jeongyeon/jeongyeon.component';
import { NayeonComponent } from './nayeon/nayeon.component';
import { MomoComponent } from './momo/momo.component';
import { SanaComponent } from './sana/sana.component';
import { MinaComponent } from './mina/mina.component';
import { DahyunComponent } from './dahyun/dahyun.component';
import { JihyoComponent } from './jihyo/jihyo.component';
import { ChaeyoungComponent } from './chaeyoung/chaeyoung.component';
import { TzuyuComponent } from './tzuyu/tzuyu.component';
import { AllComponent } from './all/all.component';



@NgModule({
  declarations: [
    AppComponent,
    JeongyeonComponent,
    NayeonComponent,
    MomoComponent,
    SanaComponent,
    MinaComponent,
    DahyunComponent,
    JihyoComponent,
    ChaeyoungComponent,
    TzuyuComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
