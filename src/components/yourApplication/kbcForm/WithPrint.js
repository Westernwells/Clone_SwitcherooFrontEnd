import React from 'react';
import ReactToPrint from 'react-to-print';
 import Print, {KForm} from './KForm'
 import print  from  './print.css'
 
export default class WithPrint extends React.Component {
  render() {
    return (
      <div>
      <KForm ref={el => (this.componentRef = el)} />
        <ReactToPrint
        
          trigger={() => <button className="printButton">Print</button>}
          content={() => this.componentRef}
        //  pageStyle={print}
        />
      </div>
    );
  }
}