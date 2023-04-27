import { LightningElement } from "lwc";

export default class Lwc3_atividade2 extends LightningElement {
  input = {
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    company: "",
    annualRevenue: ""
  };
  result;
  new = [];

  handleInputChange(event) {
    let nameinput = event.target.name;
    let value = event.detail.value;

    //Montando o objeto input com valores
    this.input = {
      ...this.input,
      [nameinput]: value // ... ativação do spread
    };
    console.log(this.input);

    this.new = [this.input]; // considera o objeto index 0, com todos os dados.
    console.log(this.new);
  }

  handleOnClick() {
    this.result = "Conta criada!";
  }
}
