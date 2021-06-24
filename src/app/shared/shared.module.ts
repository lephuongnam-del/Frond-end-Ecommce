import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
@NgModule({
    declarations:[NavbarComponent, FooterComponent],
    imports:[
        CommonModule,
        NzButtonModule,
        NzInputModule,
        NzSelectModule,
        NzDropDownModule,
        NzAvatarModule,
        NzBadgeModule,
        NzDividerModule,
        NzGridModule],
    exports:[CommonModule,NavbarComponent,FooterComponent],
    providers:[]
})
export class SharedModule {}