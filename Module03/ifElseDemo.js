import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {
    showTom = true;

    showJerry(event){
        this.showTom = false;
    }
    showTomNow(event){
        this.showTom = true;
    }
}