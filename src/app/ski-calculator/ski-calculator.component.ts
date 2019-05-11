import { Component } from "@angular/core";
import { SkicalculatorService } from "../skicalculator.service";
import { Robustness } from "src/Utilities/Robustness";
import { EnumHelper } from "src/Utilities/EnumHelper";

export enum Discipline {
  Classic,
  FreeStyle,
}

@Component({
  selector: "app-ski-calculator",
  templateUrl: "./ski-calculator.component.html",
  styleUrls: ["./ski-calculator.component.scss"]
})
export class SkiCalculatorComponent {
  public Discipline = Discipline;
  public readonly maxClassicLength = 207;
  public length: number | null = null;
  public age: number | null = null;
  public selectedDiscipline: Discipline = Discipline.FreeStyle;
  public disciplines = EnumHelper.toNumbers(Discipline);

  constructor(private readonly service: SkicalculatorService) {
  }

  getDisciplineDescription(discipline: Discipline) {
    switch (discipline) {
      case Discipline.Classic:
        return "Fristil 🎿";
      case Discipline.FreeStyle:
        return "Klassisk ⛷";
      default:
        throw new Error(`Discipline: ${discipline} not covered in switch`);
    }
  }

  showInfoMessage(): boolean {
    return this.length != null && this.age != null;
  }

  get recommendedLength() {
    const age = Robustness.isNotNull(this.age, "age");
    const length = Robustness.isNotNull(this.length, "length");

    return this.service.recommendedLength(age, length, this.selectedDiscipline);
  }

  get recommendedMessage() {
    const recommendedLengthFormatted = typeof this.recommendedLength === "number"
      ? this.recommendedLength.toString()
      : `${this.recommendedLength[0]} - ${this.recommendedLength[1]}`;

    return `Rekommenderad skidstorlek: ${recommendedLengthFormatted}`;
  }

  get minCompetitionLengthMessage() {
    return `Tänk på att för tävling så får skidans längd inte understiga din kroppslängd med mer än 10cm.`
  }

  get notCreatedInRecommendedLengthMessage() {
    return "Dessvärre tillverkas klassiska skidor just nu bara i upp till 207 cm.";
  }

  getMinimumCompetitionSize(): number {
    return 1;
  }
}
