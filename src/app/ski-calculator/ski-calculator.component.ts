import { Component, OnInit } from "@angular/core";
import { SkicalculatorService } from "../skicalculator.service";

export enum Discipline {
  Classic,
  FreeStyle,
}

@Component({
  selector: "app-ski-calculator",
  templateUrl: "./ski-calculator.component.html",
  styleUrls: ["./ski-calculator.component.scss"]
})
export class SkiCalculatorComponent implements OnInit {
  values: Array<string> = [];
  length: number | null = null;
  age: number | null = null;
  selectedDiscipline: Discipline = Discipline.FreeStyle;
  disciplines = Object.keys(Discipline).map(x => Discipline[x as any]).filter(x => typeof x === "number");

  constructor(private readonly service: SkicalculatorService) {
  }

  getDisciplineDescription(disipline: Discipline) {
    switch (disipline) {
      case Discipline.Classic:
        return "Fristil 🎿";
      case Discipline.FreeStyle:
        return "Klassisk ⛷";
      default:
        throw new Error("Shiet bro");
    }
  }

  getRecommendedLength(length: number, age: number, discipline: Discipline) {

  }

  ngOnInit() {

  }

  async foo() {
    this.values = await this.service.getValue();
  }
}
