import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const VALID_OPERATION_STYLE = "color: green;"
const VALID_OPERATION_TEXT = "Operación permitida"
const INVALID_OPERATION_STYLE = "color: red;";
const INVALID_OPERATION_TEXT = "Operación no permitida";

@Component({
  selector: 'app-operacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operacion.component.html',
  styleUrl: './operacion.component.css'
})
export class OperacionComponent {

  numberA:number = 0;
  numberB:number = 0;
  result:number = 0;
  comprobandoOperacion:string = "";
  estiloComprobandoOperacion:string = INVALID_OPERATION_STYLE;

  public sum() {
    this.result = this.numberA + this.numberB;
  }

  public subtract() {
    this.result = this.numberA - this.numberB;
  }

  public multiply() {
    this.result = this.numberA * this.numberB;
  }

  public divide() {
    this.result = this.numberA / this.numberB;
  }

  public checkNumbers() {
    if(this.numberA == 0 || this.numberB == 0) {
      this.comprobandoOperacion = INVALID_OPERATION_TEXT;
      this.estiloComprobandoOperacion = INVALID_OPERATION_STYLE;
    }else{
      this.comprobandoOperacion = VALID_OPERATION_TEXT;
      this.estiloComprobandoOperacion = VALID_OPERATION_STYLE;
    }
  }
}
