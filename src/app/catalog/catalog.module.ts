import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CatalogModule {}
