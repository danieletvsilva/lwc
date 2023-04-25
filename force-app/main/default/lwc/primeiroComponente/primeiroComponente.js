import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Atividade LWC";

//variáveis
empresa = "Chocolate´s";
cnpj = "123.456.789-77";
end = "Rua dos Morangos, 88";
prod = "Chocolate";
descricao = "Chocolate suíço";
preco = 39.99;
oferta1 = "Kit Chocolate meio amargo";
oferta2 = "Kit fondue";
visible = true;


handleClick(){
this.visible = !this.visible;
}
}