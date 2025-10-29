import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})

export class Calculadora {

  numeros: number[] = [7,8,9,4,5,6,1,2,3,0];
  display = '';
  currentChain = '';
  currentChain2 = '';
  display2 = '';

   /*para hacere este ejercicio he decicido utilizar la funcion match con uan expresión regular para detectar cada numero y su respectivo operador o signo
    que ya he utilizado previamente en ejercicios anteriores.
    esta funcion me permite recoger en un array los números para hacer operaciones con ellos
    una vez tengo el array de numeros lo que hago es utilizar .join('') para separalos por espacios en vez de comas para poder utilizar
    la funcion eval la cual me transforma un string en una operacion.  */

  control(){
    this.display2 = ''
  }

  numberToDisplay2(num: number){
    this.display2 = this.display2 + num;
  

  }
  

  numberToDisplay(num: number){
    if(this.display == 'Error de calculo'){
      this.display = ''
    }

    this.display = this.display + num;
    const currentNumbers = this.display.match(/[+-]?\d+|[*/]/g);
    

    this.currentChain = currentNumbers?.join('') || '' ; //hay que asignar un valor por defecto sino da error, he usado join para deshacerme de las ',' para evitar error con evaluate
    
    console.log(currentNumbers);
    
  }

  clearDisplay(){
    this.display= ''
    this.display2= ''
  }

  operatorToDisplay(oper: string){
    this.display = this.display + '' + oper;
    this.display2 = this.display2 + '' + oper;
  }

  calculate(){
    const result = eval(this.currentChain);
    const resultStr: string = result?.toString() || ''; 
    if(resultStr == 'Infinity'){ // es decir, se ha dividido entre 0
      this.display = 'Error'
      this.display2 = 'Error de calculo'
    }else{
      this.display = resultStr;
      this.display2 = resultStr;
    }
    

  }

}
