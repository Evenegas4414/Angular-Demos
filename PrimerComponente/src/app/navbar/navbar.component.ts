import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navTitle = 'Evenegas4414'

  link1 = 'Proyectos';

  link2 = 'Contacto';

  link3 = 'Ayuda'
  constructor() { }

  ngOnInit(): void {
  }

}
