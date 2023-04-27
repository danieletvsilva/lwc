import { LightningElement } from "lwc";

export default class Lwc3_atividade1 extends LightningElement {
  //declaração de variáveis
  nome = "";
  peso = "";
  altura = "";
  imc = "";
  result = "";

  handleInputChange(event) {
    let nameinput = event.target.name;
    let value = event.detail.value;

    this[nameinput] = value; //acessar a variavel através do []. Valor do campo será atribuido à propriedade THIS
    console.log(this[nameinput]);
  }

  handleOnClick() {
    this.imc = this.peso / (this.altura * this.altura);
    this.result = `Olá ${this.nome}, seu IMC é ${this.imc.toFixed(2)}`; //toFixed para duas casas decimais após a virgula
  }
}
