import { Component, OnInit } from '@angular/core';
import { TarefasService } from './tarefas.service';
import { Comments } from './Comments';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  comments: Comments[];

  constructor(private tarefaService: TarefasService) { }

  ngOnInit() {
    this.tarefaService.listar().subscribe(data => this.comments = data);
  }

}
