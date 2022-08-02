import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroTitle = 'Exequiel Venegas';

  heroText = `Soy programador junior Full Stack Java.
   Me interesa desarrollar mi campo laboral y obtener experiencia.
   Cualquier oportunidad para aprender es bienvenida.`

  githubLink = 'https://github.com/Evenegas4414';

  linkedLink = 'https://www.linkedin.com/in/evenegas4414/';
  constructor() {
  }

  ngOnInit(): void {
  }

}
