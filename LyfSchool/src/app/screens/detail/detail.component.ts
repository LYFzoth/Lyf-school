import { Component } from '@angular/core';
import {newsData} from '../../dummyData/newData.dummy'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  newsData = newsData;
}
