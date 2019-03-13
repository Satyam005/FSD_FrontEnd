import { Component, OnInit } from '@angular/core';
import { UsercalService   } from '../usercal.service'
@Component({
  selector: 'app-usercalc',
  templateUrl: './usercalc.component.html',
  styleUrls: ['./usercalc.component.css']
})
export class UsercalcComponent implements OnInit {

  constructor( private calc : UsercalService) { }
  numbers;

  ngOnInit() {
    this.numbers = this.calc.getNumbers();
  }

}
