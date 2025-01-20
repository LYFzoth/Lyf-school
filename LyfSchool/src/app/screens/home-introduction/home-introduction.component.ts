import { Component, } from '@angular/core';

import {carouselData} from '../../dummyData/carrousel.dummy'
import {newsData} from '../../dummyData/newData.dummy'
import {reviews} from '../../dummyData/review.dummy'
import {schoolStats} from '../../dummyData/school.dummy'
import {stories} from '../../dummyData/story.dummy'
import {timelineData} from '../../dummyData/timeline.dummy'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home-introduction',
  templateUrl: './home-introduction.component.html',
  styleUrls: ['./home-introduction.component.css'],
  standalone: true,
  imports: [CommonModule],  
})
export class HomeIntroductionComponent  {
  carouselData = carouselData;
  newsData = newsData;
  timelineData = timelineData;
  schoolStats = schoolStats;
  reviews = reviews;
  stories = stories
}