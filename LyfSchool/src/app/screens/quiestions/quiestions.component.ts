import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiestions',
  imports: [CommonModule],
  templateUrl: './quiestions.component.html',
  styleUrl: './quiestions.component.css'
})
export class QuiestionsComponent {
  faqs = [
    {
      question: 'Сургалтын төлбөр хэд вэ?',
      answer: 'Сургалтын төлбөр хөтөлбөрөөс хамааран ялгаатай байдаг. Илүү дэлгэрэнгүй мэдээллийг сургуулийн вэбсайтаас авна уу.',
      isOpen: false,
    },
    {
      question: 'Сургалт танхимаар явагдах уу?',
      answer: 'Манай сургалт танхимаар болон цахимаар явагддаг.',
      isOpen: false,
    },
    {
      question: 'Элсэлтийн хугацаа хэзээ дуусах вэ?',
      answer: 'Элсэлтийн хугацаа сар бүрийн сүүлийн өдөр дуусна.',
      isOpen: false,
    },
  ];

  toggleAnswer(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
