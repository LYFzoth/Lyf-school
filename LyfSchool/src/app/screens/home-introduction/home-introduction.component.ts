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
  carrouselData = [
    
    {
      img: 'assets/witcher.jpg',
      id: 1
    },
    {
      img:'assets/witcher2.jpg',
      id:2
    },
    {
      img:'assets/witcher3.jpg',
      id:3
    }
  ];
}