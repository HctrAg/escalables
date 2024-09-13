import { Component, EventEmitter, Output } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-filter',
  standalone: true,
  imports: [],
  templateUrl: './show-filter.component.html',
  styleUrl: './show-filter.component.css'
})
export class ShowFilterComponent {
  @Output() onOrdenarAbecedario = new EventEmitter<void>();
  @Output() onOrdenarEpisodio = new EventEmitter<void>();
  @Output() onOrdenarAno = new EventEmitter<void>();

  ordenarPorAbecedario(){
    this.onOrdenarAbecedario.emit();
  }
  public ordenarPorEpisodio(){
    this.onOrdenarEpisodio.emit();
  }
  public ordenarPorAno(){
    this.onOrdenarAno.emit();
  }
}


