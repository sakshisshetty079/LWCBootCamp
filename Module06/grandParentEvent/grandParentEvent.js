import { LightningElement } from 'lwc';

export default class GrandParentEvent extends LightningElement {

   totalselect =0;

   handleReset() { 
      eval("$A.get('e.force:refreshView').fire();");
   }
 
   handleGrandParent(event) { 
    
      const details = event.detail;
      if(details.includes('deselected')){
         this.totalselect = this.totalselect - 1;
      }
      else{
         this.totalselect =  this.totalselect + 1;
      }
  }

}
