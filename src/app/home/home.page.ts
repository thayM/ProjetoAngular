// import { Component } from '@angular/core';
// import { IonicModule } from '@ionic/angular';
// import { reverse } from 'dns';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
//   standalone: true,
//   imports: [IonicModule],
// })
// export class HomePage {
//   tela : any = ""
//   resultado: any = ""
//   //Funções uteis
//   //Inverter a ordem de uma String
//   inverterString(string: string) {
//     let textoInvertido = '';
//     for (var i = string.length - 1; i >= 0; i--) {
//         textoInvertido += string[i];
//     }
//     console.log(textoInvertido)
//     return textoInvertido;
//   }
//   //Funções basicas da calculadora

//   //Resetar a calculadora
//   limparTela(){
//     this.tela = ""
//     this.resultado = ""
//   }

//   //Apagar o ultimo Algoritmo 
//   del() {
//     let resultNumber = this.tela;
//     this.tela = resultNumber.substring(0, resultNumber.length - 1);
//   }

//   //Adicionar Tecla dentro da expressão numerica
//   setTecla(num: any){
//     // Resetando o calc
//     if(num == "0" || num == "1" ||num == "2" ||num == "3" ||num == "4" ||num == "5" ||num == "6" ||num == "7" ||num == "8" ||num == "9" ){
//       let index = this.tela.length - 1
//       if(this.tela[index] == "="){
//         this.tela = ""
//         this.resultado = ""
//         this.tela += num
//       }
//       else{
//         this.tela+=num
//       }
//     }
//     else{
//       this.tela += num
//     }
//   }

//   //Funções para calculo 
//   calc(){
//     if (this.tela != "") {
//       let calculo:any = this.tela
//       this.tela+= "="
//       this.resultado = eval(calculo);
//   } else {
//       this.tela = ""
//   }
//   }

//   trocaSinal(){
//   let array = this.tela.length
//   let numParaTrocarSinalInvertido = " "
//   let qtdAlgori = 0
//   //Ultimo numero digitado, OBS: qtdAlgori é o tamanho do ultimo numero para futura substituição
//     for (let index = array-1; index >= 0; index--) {
//       if(this.tela[index] != "-" && this.tela[index] != "+" && this.tela[index] != "/" && this.tela[index] != "*"){
//         numParaTrocarSinalInvertido += `${this.tela[index]}`
//         qtdAlgori++
//       }else{
//         index = 0
//       }
//     }
//     //Trocando o Sinal do numero desejado dentro da expressão numerica
//     if(qtdAlgori != 0){
//       let numParaTrocarSinal = eval(`${this.inverterString(numParaTrocarSinalInvertido)} *(-1)`)
//       let novoCalc = `${this.tela.substring(0,(array-qtdAlgori))}(${numParaTrocarSinal})`
//       this.tela = novoCalc 
//    }else{
//       let novoCalc = eval(`${this.tela}*-1`)
//       this.tela = novoCalc
//    }
//   }

<<<<<<< HEAD
  porcentagem(){
  let array = this.tela.length
  let numParaPorcentagemInvertido = ""
  //tamanho do ultimo numero para futura substituição 
  let qtdAlgori = 0
  for (let index = array-1; index >= 0; index--) {
    if(this.tela[index] != "-" && this.tela[index] != "+" && this.tela[index] != "/" && this.tela[index] != "*"){
      qtdAlgori++
    }else{
      index = 0
    }
  }
  //identificando os numeros da equação 
  for (let index = array-1; index >= 0; index--) {
      if(this.tela[index] != "-" && this.tela[index] != "+" && this.tela[index] != "/" && this.tela[index] != "*"){
        numParaPorcentagemInvertido += `${this.tela[index]}`
      }else{
        numParaPorcentagemInvertido +=","
      }
  }
  //Substituindo o valor da porcentagem dentro da expressão numerica
  let numeros = numParaPorcentagemInvertido.split(",")
    if (numeros.length <= 1) {
      this.tela = "SintaxError"
    }
    else{
      let numParaPorcentagem = eval(`(${this.inverterString(numeros[0])}*${this.inverterString(numeros[1])})/100`)
      let novoCalc = `${this.tela.substring(0,(array-qtdAlgori))}(${numParaPorcentagem})`
      this.tela = novoCalc 
    }
  }
<<<<<<< HEAD
}
//feito por Pedro e Thay
=======
}
>>>>>>> 2d5603d (commit teste)
=======
//   porcentagem(){
//   let array = this.tela.length
//   let numParaPorcentagemInvertido = ""
//   //tamanho do ultimo numero para futura substituição 
//   let qtdAlgori = 0
//   for (let index = array-1; index >= 0; index--) {
//     if(this.tela[index] != "-" && this.tela[index] != "+" && this.tela[index] != "/" && this.tela[index] != "*"){
//       qtdAlgori++
//     }else{
//       index = 0
//     }
//   }
//   //identificando os numeros da equação 
//   for (let index = array-1; index >= 0; index--) {
//       if(this.tela[index] != "-" && this.tela[index] != "+" && this.tela[index] != "/" && this.tela[index] != "*"){
//         numParaPorcentagemInvertido += `${this.tela[index]}`
//       }else{
//         numParaPorcentagemInvertido +=","
//       }
//   }
//   //Substituindo o valor da porcentagem dentro da expressão numerica
//   let numeros = numParaPorcentagemInvertido.split(",")
//     if (numeros.length <= 1) {
//       this.tela = "SintaxError"
//     }
//     else{
//       let numParaPorcentagem = eval(`(${this.inverterString(numeros[0])}*${this.inverterString(numeros[1])})/100`)
//       let novoCalc = `${this.tela.substring(0,(array-qtdAlgori))}(${numParaPorcentagem})`
//       this.tela = novoCalc 
//     }
//   }
// }
>>>>>>> 25855f1 (teste)
