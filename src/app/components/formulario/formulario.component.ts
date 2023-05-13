import { Component } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  rua!: string
  bairro: string = ''
  cidade: string = ''
  estado: string = ''
  cep: string = ''
  buscarCEP(value: string) {
    const endereco = {
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: '',
    }
    const options = { method: 'GET', url: `http://viacep.com.br/ws/${value}/json/` };
    axios.request(options).then(function (response) {
      endereco.rua=(response.data.logradouro);
      console.log(response.data.bairro);
      console.log(response.data.localidade);
      console.log(response.data.uf);
    }).catch(function (error) {
      console.error(error);
    });
  }
}
