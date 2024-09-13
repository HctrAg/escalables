import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface'
import { NgForm, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Output()
  public deleteCard : EventEmitter<string> = new EventEmitter();

  @Output()
  public editElement : EventEmitter<Show> = new EventEmitter();

  @Input()
  public show: Show = {
    description: "",
    episodes: 0,
    genre: "",
    image: "",
    likes: [],
    name: "",
    year: 0
  };

  @Input()
  public tempShow: Show = {
    description: "",
    episodes: 0,
    genre: "",
    image: "",
    likes: [],
    name: "",
    year: 0
  };

  public isSelected : boolean = false;


  public changeSelected() : void{
    this.isSelected = !this.isSelected;
    console.log(this.show.name);
    console.log(this.isSelected);
  }

  public onDeleteCard(){
    //console.log("Evento desde el hijo")
    this.deleteCard.emit(this.show.name);
  }


  public openEditModal(): void {
    // Make a copy of the show to edit
    this.tempShow = { ...this.show };
  }

  public editShow(form : NgForm):void{
    const updatedShow: Show = {
      ...this.tempShow,
      ...form.value
    };
  
    this.editElement.emit(updatedShow);
    form.resetForm();
  }
}


