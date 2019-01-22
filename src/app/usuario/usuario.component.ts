import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  @Input() usuario: Usuario;

  constructor() { }

  ngOnInit() {
  }

}
