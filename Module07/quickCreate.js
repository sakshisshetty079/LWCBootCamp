import { LightningElement,api } from 'lwc';

//import getAccountFields from '@salesforce/apex/ExploreCustomContactController.getAccountFields';
//import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class QuickCreate extends LightningElement {

    //@wire(getAccountFields) accfields;
    //accfields 
    accfields = ['Name','OwnerId'];
    confields = ['LastName','OwnerId'];
    oppfields = ['Name','OwnerId','CloseDate','StageName',];

    @api isallfields = false;
    @api isallcontactfields = false;
    @api isalloppfields = false;

    handleAccFields(event){
        
        const buttonLabel = event.target.label;
        if(buttonLabel.includes('all')){
            this.isallfields = true;
            event.target.label = 'Show required account fields';

        }
        else{
            this.isallfields = false;
            event.target.label = 'Show all account fields'
        }
    }

    handleConFields(event){
        
        const buttonLabel = event.target.label;
        if(buttonLabel.includes('all')){
            this.isallcontactfields = true;
            event.target.label = 'Show required contact fields';

        }
        else{
            this.isallcontactfields = false;
            event.target.label = 'Show all contact fields'
        }
    }

    handleOppFields(event){
        
        const buttonLabel = event.target.label;
        if(buttonLabel.includes('all')){
            this.isalloppfields = true;
            event.target.label = 'Show required Opportunity fields';

        }
        else{
            this.isalloppfields = false;
            event.target.label = 'Show all Opportunity fields'
        }
    }

    handleSuccess(){

        const event = new ShowToastEvent({
            variant: 'success',
            title: 'Success!',
            message: 'Record has been created',
        });
        this.dispatchEvent(event);
        
    }
}