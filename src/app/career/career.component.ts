import { Component, OnInit } from '@angular/core';
import {Career} from "../career/career";



@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  career:any;
  slides:any;
  slidesText:any;
  
  constructor() {
    this.career = {
      '2018' : new Career(2018, "frontend developer - zenn web solutions", "development of frotend solutions for e-commerces and info pages", "2013 - 2015 (2 years)"),
      '2019' : new Career(2019, "frontend developer - zenn web solutions", "development of frotend solutions for e-commerces and info pages", "2013 - 2015 (2 years)"),
      '2020' : new Career(2020, "frontend developer - zenn web solutions", "development of frotend solutions for e-commerces and info pages", "2013 - 2015 (2 years)")
    }


  }

  ngOnInit() {
      this.slides = [{'image': ''}, {'image': ''}];
      this.slidesText = ['Neste ano tive a trabalhar ali', 'Neste ano tive a trabalhar lá']
  }

}


