import React from 'react';
import ReactToPrint from 'react-to-print';
 import KForm from './KForm'
 import style  from  './style.css'
 
export default class WithPrint extends React.Component {
  render() {
    return (
      <div>
      <KForm ref={el => (this.componentRef = el)} />
        <ReactToPrint
        
          trigger={() => <a className="printButton" href="#">Print</a>}
          content={() => this.componentRef}
          pageStyle={style}
        />
      </div>
    );
  }
}