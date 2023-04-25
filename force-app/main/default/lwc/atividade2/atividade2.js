import { LightningElement } from 'lwc';

export default class Atividade2 extends LightningElement {


visible = true;

pokemon(){
    this.visible = !this.visible;
}

}