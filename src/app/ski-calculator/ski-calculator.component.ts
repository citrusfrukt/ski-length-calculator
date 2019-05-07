import { Component, OnInit } from '@angular/core';
import { SkicalculatorService } from '../skicalculator.service';

@Component({
  selector: 'app-ski-calculator',
  templateUrl: './ski-calculator.component.html',
  styleUrls: ['./ski-calculator.component.scss']
})
export class SkiCalculatorComponent implements OnInit {
  values: Array<string> = [];

  constructor(private readonly service: SkicalculatorService) { 
  }

  ngOnInit() {

  }

  async foo(){
    this.values = await this.service.getValue();
  }
}
