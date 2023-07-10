import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Eduardo',
      modelo: 'modelo3'
    },
    {
      conteudo: 'tua mae',
      autoria: 'Eduardo',
      modelo: 'modelo2'
    }
  ];

}
