import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';

@NgModule({
  declarations: [FilterByNamePipe],
  imports: [CommonModule],
  exports: [FilterByNamePipe],
})
export class SharedModule {}
