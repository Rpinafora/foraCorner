import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

export class Career{
    year:number;
    title:string;
    text:string;
    yearsWorked:string;


    constructor(year:number, title:string, text:string, yearsWorked:string){
        this.year = year;
        this.title = title;
        this.text = text;
        this.yearsWorked = yearsWorked;     
    }
}