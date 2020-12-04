import { api,LightningElement } from 'lwc';

export default class ParentEvent extends LightningElement {

    @api statusone;
    @api statustwo;
    @api statusthree;
    
    handleOnSelected(event) {

        const details = event.detail;

        if(details.includes('Child One')){
            this.statusone = details;
        }
        else if(details.includes('Child Two')){
            this.statustwo = details;
        }
        else if(details.includes('Child Three')){
            this.statusthree = details;
        }

        this.dispatchEvent(new CustomEvent('select',{detail: details}));
    }

}
