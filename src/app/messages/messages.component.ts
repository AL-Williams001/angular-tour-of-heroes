import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'], // corrected styleUrls instead of styleUrl
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
