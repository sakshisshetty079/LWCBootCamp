import { LightningElement } from 'lwc';

export default class CalcDemo extends LightningElement {
		
		expression='';
		totalvalue='';
		
		handleClick(event){
				this.expression=this.expression+event.target.label;
				try {
    				this.totalvalue=eval(this.expression);
				}catch(e) {
   						if (e instanceof SyntaxError) {
        					this.totalvalue="Invalid Expression";
    					}
				}				
		}

		handleSymbolClick(event){
                this.expression=this.expression+event.target.label;
		}

		clearInput(){
            	this.expression='';
			    this.totalvalue='';
		}

		handleResult(){
			try {
                if(this.expression !=''){
    				this.expression=eval(this.expression);
                }
			}catch(e) {
   					if (e instanceof SyntaxError) {
        				this.expression="Invalid Expression";
                        this.totalvalue="Invalid Expression";
    				}
			}			
		}
}