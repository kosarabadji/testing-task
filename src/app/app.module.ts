import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faPencilAlt,
  faTimesCircle,
  faSave
} from "@fortawesome/free-solid-svg-icons";

import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faPencilAlt, faTrashAlt, faTimesCircle, faSave);
  }
}
