import React from 'react';
import ReactToPrint from 'react-to-print';
 import Print, {KForm} from './KForm'
 import style  from  './style.css'
 
export default class WithPrint extends React.Component {
  render() {
    return (
      <div>
      <Print ref={el => (this.componentRef = el)} />
        <ReactToPrint
        
          trigger={() => <button className="printButton">Print</button>}
          content={() => this.componentRef}
          pageStyle={style}
        />
      </div>
    );
  }
}