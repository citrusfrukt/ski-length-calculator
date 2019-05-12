import { Component } from "@angular/core";
import { SkiCalculatorWebService, Discipline } from "../skicalculatorwebservice";
import { EnumHelper } from "src/Utilities/EnumHelper";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-ski-calculator",
  templateUrl: "./ski-calculator.component.html",
  styleUrls: ["./ski-calculator.component.scss"]
})
export class SkiCalculatorComponent {
  public Discipline = Discipline;
  public readonly maxClassicLength = 207;
  public disciplines = EnumHelper.toNumbers(Discipline);
  public calculationResult: [number | [number, number], Discipline] | null = null;

  public skiLengthForm = this.formBuilder.group({
    age: ["", [Validators.required, Validators.min(0)]],
    length: ["", [Validators.required, Validators.min(1)]],
    discipline: [Discipline.Classic, Validators.required]
  });

  constructor(
    private readonly service: SkiCalculatorWebService,
    private readonly formBuilder: FormBuilder
  ) { }

  public async calculate() {
    if (!this.skiLengthForm.valid) {
      return;
    }

    this.calculationResult = await this.service.calculate(this.skiLengthForm.value);
    console.log(this.calculationResult);
  }

  getDisciplineDescription(discipline: Discipline) {
    switch (discipline) {
      case Discipline.FreeStyle:
        return "Fristil 🎿";
      case Discipline.Classic:
        return "Klassisk ⛷";
      default:
        throw new Error(`Discipline: ${discipline} not covered in switch`);
    }
  }

  public recommendedMessage(recommendedLength: number | [number, number]) {
    const recommendedLengthFormatted = typeof recommendedLength === "number"
      ? recommendedLength.toString()
      : `${recommendedLength[0]} - ${recommendedLength[1]}`;

    return `Rekommenderad skidstorlek: ${recommendedLengthFormatted} cm`;
  }

  get minCompetitionLengthMessage() {
    return `Tänk på att för tävling så får skidans längd inte understiga din kroppslängd med mer än 10cm.`;
  }

  get notCreatedInRecommendedLengthMessage() {
    return `Dessvärre tillverkas klassiska skidor bara i upp till ${this.maxClassicLength} cm.`;
  }
}
