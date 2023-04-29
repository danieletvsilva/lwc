import { LightningElement, wire } from "lwc";
import getOppLwc from "@salesforce/apex/lwc4_atividade2.getOppLwc";

export default class lwc4_atividade2 extends LightningElement {
  @wire(getOppLwc) //wire serve para chamar o metodo da minha classe e armazenar em um lugar que é a oportunidade
  Opportunity; //minha lista do apex fica aqui e pode ser chamado no html
}
