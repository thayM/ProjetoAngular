import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.page.html',
  styleUrls: ['./mensagem.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class MensagemPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
