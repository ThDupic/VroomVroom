import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TripCardItemComponent } from './trip-card-item/trip-card-item.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TabHeaderComponent } from './tab-header/tab-header.component';


@NgModule({
    declarations: [TripCardItemComponent, TripListComponent, TabHeaderComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [TripCardItemComponent, TripListComponent, TabHeaderComponent]
})
export class ComponentsModule {}
