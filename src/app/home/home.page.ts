import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  tela : any = ""

  setTecla(num: any){
    this.tela += num
  }
  calc(){
    if (this.tela != "") {
      let calculo:any = this.tela
      this.tela = eval(calculo);
  } else {
      this.tela = ""
  }
  }
  limparTela(){
    this.tela =""
  }
  del() {
    let resultNumber = this.tela;
    this.tela = resultNumber.substring(0, resultNumber.length - 1);
}

}
