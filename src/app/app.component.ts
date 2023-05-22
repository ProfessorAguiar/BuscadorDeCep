import { Component } from '@angular/core';
import { CepService } from './cep.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cep:any = [];
  public nCep:string='21351390'
  constructor(private cepService: CepService) { }

  ngOnInit(): void {
    this.cepService.getCep(this.nCep).subscribe(
      data => {
        this.cep = data;
      }
    );
  }
}
