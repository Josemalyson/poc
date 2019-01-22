import { Component, OnInit } from '@angular/core';
import { TarefasService } from './tarefas.service';
import { Comments } from './Comments';
import { Usuario } from '../usuario/model/usuario';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  comments: Comments[];
  jose: Usuario;

  constructor(private tarefaService: TarefasService) { }

  ngOnInit() {
    this.jose = { nome: 'jose', idade: 12 };
    this.tarefaService.listar().subscribe(data => this.comments = data);
  }

}
