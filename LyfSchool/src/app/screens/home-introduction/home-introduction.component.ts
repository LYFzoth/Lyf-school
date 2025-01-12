import { Component, } from '@angular/core';


@Component({
  selector: 'app-home-introduction',
  templateUrl: './home-introduction.component.html',
  styleUrls: ['./home-introduction.component.css'],
  standalone: true,
  imports: [],  
})
export class HomeIntroductionComponent  {
  schoolData = {
    teachers: 5, 
    students: 120, 
    courses: 10 
  };
}