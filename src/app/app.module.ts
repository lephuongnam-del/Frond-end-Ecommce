import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { MainModule } from './main/main.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from "@ant-design/icons-angular";


//import nzIcon
import * as AllIcons from '@ant-design/icons-angular/icons';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    SharedModule,
    BrowserAnimationsModule,
    NzIconModule.forRoot(icons),
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top-right',
      preventDuplicates:true
    })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
