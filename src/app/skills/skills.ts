import { ThrowStmt } from '@angular/compiler';

export class Skill{
    name:string;
    ide: Array<string>;
    programmingLanguages: Array<string>;
    frameworks: Array<string>;

    constructor(name:string, ide:Array<string>, programmingLanguages:Array<string>, frameworks:Array<string>){
        this.name = name;
        this.ide = ide;
        this.programmingLanguages = programmingLanguages;
        this.frameworks = frameworks;
    }

    
}