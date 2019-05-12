import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SkiCalculatorComponent } from "./ski-calculator/ski-calculator.component";
import { SkiCalculatorWebService } from "./skicalculatorwebservice";

@NgModule({
  declarations: [
    AppComponent,
    SkiCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SkiCalculatorWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
