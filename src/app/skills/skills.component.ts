import { Component, OnInit } from '@angular/core';
import { Skill} from '../skills/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills:Array<Skill>;
  activatedSkill:number = 0;
  constructor() { 
    this.skills = [
      new Skill("Mobile", ["Xcode", "Android Studio"], ["Swift", "Objective C", "Java"], ["Something"]),
      new Skill("Web Developer", ["Visual Studio", "Visual Studio Code"], ["C#", "JavaScript", "TypeScript", "CSS", "HTML"], ["ASP.NET MVC", "ASP.NET CORE", "Angular"]),
      new Skill ("Databases", ["SQL Server", "MySQL WorkBench", "FireBase"] , ["SQL"], []),
      new Skill ("IT Security", [], [], [])
    ]
  }

  ngOnInit() {
  }

  changeSkill(index:number):void{
    this.activatedSkill = index;
  }

}
