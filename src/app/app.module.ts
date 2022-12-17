import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './shoppingCart/list/list.component';
import { EditComponent } from './shoppingCart/edit/edit.component';
import { ItemComponent } from './recipes/item/item.component';
import { DetailsComponent } from './recipes/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    ItemComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
