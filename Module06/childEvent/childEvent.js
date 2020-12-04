import { api,LightningElement } from 'lwc';

export default class ChildEvent extends LightningElement {

    @api childno;
    @api status;
    isSelected = false;
    handleChildEvent(event) {
       
        if(!this.isSelected){
            event.target.label = 'DeSelect';
            event.target.variant = 'destructive';
            this.isSelected = true;
            this.status = 'selected';
        }
        else{
            event.target.label = 'Select';
            event.target.variant = 'success';
            this.isSelected = false;
            this.status = 'deselected';
        }

        this.dispatchEvent(new CustomEvent('notify',{detail: this.childno +': '+ this.status}));
    
    }

}