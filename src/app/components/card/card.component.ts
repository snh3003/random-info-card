import { Component, Input, OnInit } from '@angular/core';
import { 
  faEnvelope, 
  faMapMarkedAlt, 
  faPhone, 
  faDatabase,
  faCalendarTimes 
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

export class CardComponent implements OnInit {

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;
  faCalendarTimes = faCalendarTimes;

  @Input() user: any;
  constructor() {}

  ngOnInit(): void {}
}
