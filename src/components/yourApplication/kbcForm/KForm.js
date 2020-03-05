import React, { Component,useState } from 'react'
import { InputFieldX,InputFieldT,InputFieldY, InputFieldYX,InputField,InputFieldZ,InputFieldZY,InputFieldZX,InputRowGroup,Radio,RadioY,RadioGroup,RadioGroupX, FormArea,AppA,Arow,AddressField, TableF, FormAreaX,HeaderX, Container,Applicants,AppaX,AppaY,TableD,RadioX,Just,Loader,SqRow,Bank,HeaderImg} from './style'
import TextInput from './utils/TextInput'
import TextInputXX from './utils/TextInputXX'

import ReactCodeInput from 'react-code-input'
import logo1 from './images/logo/logo1.png'
import logo2 from './images/logo/logo2.png'
import app1 from './images/headers/app1.png'
import app2 from './images/headers/app2.png'
import bank from './images/headers/bank.png'
import A1 from './images/headers/A1.png'
import A2 from './images/headers/A2.png'
import SQ from './images/headers/SQ.png'
import YPD from './images/headers/YPD.png'
import pg2b from './images/ripped/pg2xb.png'
import pg3x from './images/ripped/pg3x.png'
import pg4a from './images/ripped/pg4xa.png'
import pg4c from './images/ripped/pg4xc.png'
import pg5a from './images/ripped/pg5xa.png'
import pg5c from './images/ripped/pg5xc.png'
import svg from './images/loader/oval.svg'


export default class KForm extends Component {
    state = ({
        loading:false,
        aSur: "",
        aFirst: '',
        aMaiden: '',
        aSex: '',
        aAddress1: '',
        aAddress2: '',
        aPostcode: '',
        aDOB: 'ddmmyyyy',
        aMobile: '',
        aEmail: '',
        aCOB: '',
        aCOR: '',
        aEmp:'',
        aEmpDet:'',
        aEmpCon:'',
        aEmpConDet:'',
        aFutCha:'',
        aFutChaDet:'',
        aOp:'',
        aOpDet:'',
        rel:'',
        aCit:'',
        aTr:'',
        aTin:'',
        aOc:'',
        aOcName:'',
        aOcTin:'',
        aMMName:'',
        aPOB:'',
        aFavCol:'',
        aMPE:'',
        aMPS:'',
        aMPP:'',
        aMPL:'',
        aDS:'',
        aDD:'ddmmyyyy',
        aCS:'',
        aCD:'ddmmyyyy',
        test:'',
        bSur: "",
        bFirst: '',
        bMaiden: '',
        bSex: '',
        bAddress1: '',
        bAddress2: '',
        bPostcode: '',
        bDOB: 'ddmmyyyy',
        bMobile: '',
        bEmail: '',
        bCOB: '',
        bCOR: '',
        bEmp:'',
        bEmpDet:'',
        bEmpCon:'',
        bEmpConDet:'',
        bFutCha:'',
        bFutChaDet:'',
        bOp:'',
        bOpDet:'',
        bCit:'',
        bTr:'',
        bTin:'',
        bOc:'',
        bOcName:'',
        bOcTin:'',
        bMMName:'',
        bPOB:'',
        bFavCol:'',
        bMPE:'',
        bMPS:'',
        bMPP:'',
        bMPL:'',
        bDS:'',
        bDD:'ddmmyyyy',
        bCS:'',
        bCD:'ddmmyyyy',
        startDate: "",
        linkedin: '',
        youtube: '',
        instagram: '',
        errors: {}
      });


       onChange =(e,index)=>{
        this.setState({ [e.target.name]: e.target.value,index });
        
       }
       handleChange = date => {
        this.setState({
          startDate: date
        });
        console.log(this.state.startDate)
      };
      
       render() {

            if(this.state.loading===true){
              return (<Loader>
              <img src={svg} />
              
              </Loader>
              )
            }
            const {test, aSur,aFirst,aMaiden,aSex,aAddress1,aAddress2,aPostcode,aDOB,aMobile,aEmail,aCOB,aCOR,aEmp,aEmpDet,aEmpCon,aEmpConDet,aFutCha,aFutChaDet,aOp,aOpDet,rel,aCit,aTr,aTin,aOc,aOcName,aOcTin,aMMName,aPOB,aFavCol,aMPE,aMPS,aMPP,aMPL,aDS,aDD,aCS,aCD} = this.state
            const { bSur,bFirst,bMaiden,bSex,bAddress1,bAddress2,bPostcode,bDOB,bMobile,bEmail,bCOB,bCOR,bEmp,bEmpDet,bEmpCon,bEmpConDet,bFutCha,bFutChaDet,bOp,bOpDet,bCit,bTr,bTin,bOc,bOcName,bOcTin,bMMName,bPOB,bFavCol,bMPE,bMPS,bMPP,bMPL,bDS,bDD,bCS,bCD} = this.state
        return (
            
            <Container className="contain bg">
            {/**
            */}
            <Just className="blink" />
            <div style={{position:'relative'}}className="pg">
            <HeaderX className="headX">
            <img className="logo-sm" src={logo1} alt=""/>
              <img className="logox-sm" src={logo2} alt=""/>
          
            <p className="f-notice" style={{width:'97%', margin:'0 auto'}}>IF THIS FORM IS INCOMPLETE, WE WILL NOT BE ABLE TO ASSESS YOUR APPLICATION.</p>
            {/**
              <SecHeader>Your Personal Details - All Applicants</SecHeader>
            */}
            <HeaderImg style={{marginTop:'10px',marginBottom:'10px',marginLeft:'20px'}} src={YPD} />
            <FormAreaX style={{width:'97%', margin:'0 auto'}}>
            <HeaderImg src={app1} />
            <HeaderImg src={app2} />
{/**
  <SecHeader>Applicant 1</SecHeader>
  <SecHeader>Applicant 2</SecHeader>
*/}
            </FormAreaX>
                <FormArea style={{width:'97%', margin:'0 auto'}}>
                <AppA>
                {/**Surname here */}
                <InputField>
                <label htmlFor="" className="txt">Surname</label>
                <TextInput type="text" name="aSur" onChange={this.onChange} value={aSur} id=""/>
                </InputField>
                
                {/**firstname here */}
                <InputField>
                <label htmlFor="" className="txt">First Name</label>
                            <TextInput type="text" name="aFirst" onChange={this.onChange} value={aFirst} id=""/>
    
                </InputField>
                {/**maiden here */}
                <InputField>
                <label htmlFor="" className="txt">Maiden Name</label>
                            <TextInput type="text" name="aMaiden" onChange={this.onChange} value={aMaiden} id=""/>
    
                </InputField>
                <InputField>
                <label htmlFor="" className="txt">Sex</label>
                <RadioY>
                <label>
                <input type="radio" value="male" name="aSex" onChange={this.onChange} checked={aSex === "male"}/>
                <span>M</span>
                </label>
                
                <label>
                <input type="radio" value="female" name="aSex" onChange={this.onChange} checked={aSex === "female"}/>
                <span>F</span>
                </label>
                </RadioY>
                </InputField>
                {/**Postcode  */}
                <AddressField>
                <label htmlFor="" className="txt">Address</label>
                <div>
                            <TextInput type="text" name="aAddress1" onChange={this.onChange} value={aAddress1} id=""/>
    
                            <TextInput type="text" name="aAddress2" onChange={this.onChange} value={aAddress2} id=""/>
    
                </div>
                </AddressField>
                <InputFieldX>
                <label htmlFor="" className="txt">Postcode/Eircode</label>
                            <TextInput type="number" name="aPostcode" onChange={this.onChange} value={aPostcode} id=""/>
    
                </InputFieldX>
                {/**DOB */}
                
               
                <InputField>
                <label htmlFor="" className="txt">Date of Birth</label>
                  <ReactCodeInput 
                  autoFocus="false"
                  className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '4px',
                    
                    MozAppearance: 'textfield',
                    width: '15px',
                    borderRadius: '0',
                    fontSize: '14px',
                    height: '30px',
                    width:'30px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'grey',
                    fontSize:'16px',
                    fontWeight:'400',
                    border: '1px solid #003A65'
                    // border: '1px solid #0CB0EF'
                    
                  }} type='text' name="aDOB" 
                  onChange={(value, index) => {
                      this.setState({ aDOB:value,index })  }} 
                    value={this.state.aDOB} fields={8} />
                

  
    
                </InputField>
                {/**Mobile number */}
                <InputField>
                <label htmlFor="" className="txt">Mobile Number</label>
                            <TextInput type="text" name="aMobile" onChange={this.onChange} value={aMobile} id=""/>
    
                </InputField>
                {/**firstname here */}
                <InputField>
                <label htmlFor="" className="txt">Email Address</label>
                            <TextInput type="text" name="aEmail" onChange={this.onChange} value={aEmail} id=""/>
    
                </InputField>
                {/**COB */}
                <InputField>
                <label htmlFor="" className="txt">Country of Birth</label>
                            <TextInput type="text" name="aCOB" onChange={this.onChange} value={aCOB} id=""/>
    
                </InputField>
                {/**COR */}
                <InputFieldZY>
                <label htmlFor="" className="txt">Country of Residence</label>
                            <TextInput type="text" name="aCOR" onChange={this.onChange} value={aCOR} id=""/>
    
                </InputFieldZY>
                {/**Another one */}
                {/**Radio button start here */}
                <Radio>
                <p className="txt">Are you an employee or director of KBC Bank Ireland plc?</p>
                <label>
                <input type="radio" name="aEmp" value="yes" onChange={this.onChange} checked={aEmp === "yes"} />
                <span>Yes</span>
                </label>
                
                <label>
                <input type="radio" name="aEmp" value="no" onChange={this.onChange} checked={aEmp === "no"} /> <span>No</span>
                </label>
                </Radio>
                <InputFieldYX>
                <label htmlFor="" className="txt">If YES, please provide details</label>
                            <TextInput type="text" name="aEmpDet" onChange={this.onChange} value={aEmpDet} id=""/>
    
                </InputFieldYX>
                {/**Radio button ends here */}
                {/**Another one */}
                {/**Radio button start here */}
                <Radio>
                <p className="txt">Are you connected to an employee of KBC Bank Ireland plc?<br />
                For example a spouse, domestic partner or child?</p>
                <label>
                <input type="radio" name="aEmpCon" value="yes" onChange={this.onChange} checked={aEmpCon === "yes"} />
                <span>Yes</span>
                </label>
                
                <label>
                <input type="radio" name="aEmpCon" value="no" onChange={this.onChange} checked={aEmpCon === "no"}/>
                <span>No</span>
                </label>
                </Radio>
                <InputFieldYX>
                <label htmlFor="" className="txt">If YES, please provide details</label>
                            <TextInput type="text" name="aEmpConDet" onChange={this.onChange} value={aEmpConDet} id=""/>
    
                </InputFieldYX>
                {/**Radio button ends here */}
                {/**Another one */}
                {/**Radio button start here */}
                <Radio>
                <p className="txt">Are you aware of any known future changes to your circumstances
    which may affect your ability to repay the proposed mortgage?</p>
                <label>
                <input type="radio" name="aFutCha" value="yes" onChange={this.onChange} checked={aFutCha === "yes"} />
                <span>Yes</span>
                </label>
    
                <label>
                <input type="radio" name="aFutCha" value="no" onChange={this.onChange} checked={aFutCha === "no"}/>
                <span>No</span>
                </label>
                </Radio>
                <InputFieldYX>
                <label htmlFor="" className="txt">If YES, please provide details</label>
                            <TextInput type="text" name="aFutChaDet" onChange={this.onChange} value={aFutChaDet} id=""/>
    
                </InputFieldYX>
                {/**Radio button ends here */}
                
                </AppA>
                <div className="vr"></div>
                <AppA>
                {/**Surname here */}
                <InputField>
                <label htmlFor="" className="txt">Surname</label>
                <TextInput type="text" name="bSur" onChange={this.onChange} value={bSur} id=""/>
                </InputField>
                
                {/**firstname here */}
                <InputField>
                <label htmlFor="" className="txt">First Name</label>
                            <TextInput type="text" name="bFirst" onChange={this.onChange} value={bFirst} id=""/>
    
                </InputField>
                {/**maiden here */}
                <InputField>
                <label htmlFor="" className="txt">Maiden Name</label>
                            <TextInput type="text" name="bMaiden" onChange={this.onChange} value={bMaiden} id=""/>
    
                </InputField>
                <InputField>
                <label htmlFor="" className="txt">Sex</label>
                <RadioY>
                <label>
                <input type="radio" value="male" name="bSex" onChange={this.onChange} checked={bSex === "male"}/>
                
                <span>M</span>
                </label>
                
                <label>
                <input type="radio" value="female" name="bSex" onChange={this.onChange} checked={bSex === "female"}/>
                <span>F</span>
                </label>
                </RadioY>
                </InputField>
                <AddressField>
                <label htmlFor="" className="txt">Address</label>
                <div>
                            <TextInput type="text" name="bAddress1" onChange={this.onChange} value={bAddress1} id=""/>
    
                            <TextInput type="text" name="bAddress2" onChange={this.onChange} value={bAddress2} id=""/>
    
                </div>
                </AddressField>
                {/**Postcode  */}
                <InputFieldX>
                <label htmlFor="" className="txt">Postcode/Eircode</label>
                            <TextInput type="text" name="bPostcode" onChange={this.onChange} value={bPostcode} id=""/>
    
                </InputFieldX>
                {/**DOB */}
                
                <InputField>
                <label htmlFor="" className="txt">Date of Birth</label>
                <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '4px',
                    MozAppearance: 'textfield',
                    width: '15px',
                    borderRadius: '0',
                    fontSize: '14px',
                    height: '30px',
                    width:'30px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'grey',
                    fontSize:'16px',
                    // border: '1px solid #0CB0EF'
                    border: '1px solid #003A65'

                  }} type='text' name="bDOB" onChange={(value, index) => {
                    this.setState({ bDOB:value,index })  }} value={bDOB} fields={8} />
    
                </InputField>
                
                {/**Mobile number */}
                <InputField>
                <label htmlFor="" className="txt">Mobile Number</label>
                            <TextInput type="text" name="bMobile" onChange={this.onChange} value={bMobile} id=""/>
    
                </InputField>
                {/**firstname here */}
                <InputField>
                <label htmlFor="" className="txt">Email Address</label>
                            <TextInput type="text" name="bEmail" onChange={this.onChange} value={bEmail} id=""/>
    
                </InputField>
                {/**COB */}
                <InputField>
                <label htmlFor="" className="txt">Country of Birth</label>
                            <TextInput type="text" name="bCOB" onChange={this.onChange} value={bCOB} id=""/>
    
                </InputField>
                {/**COR */}
                <InputFieldZY>
                <label htmlFor="" className="txt">Country of Residence</label>
                            <TextInput type="text" name="bCOR" onChange={this.onChange} value={bCOR} id=""/>
    
                </InputFieldZY>
                {/**Another one */}
                 {/**Radio button start here */}
                 <Radio>
                 <p className="txt">Are you an employee or director of KBC Bank Ireland plc?</p>
                 <label>
                 <input type="radio" name="bEmp" value="yes" onChange={this.onChange} checked={bEmp === "yes"} />
                 <span>Yes</span>
                 </label>
                 
                 <label>
                 <input type="radio" name="bEmp" value="no" onChange={this.onChange} checked={bEmp === "no"} /> <span>No</span>
                 </label>
                 </Radio>
                 <InputFieldYX>
                 <label htmlFor="" className="txt">If YES, please provide details</label>
                             <TextInput type="text" name="bEmpDet" onChange={this.onChange} value={bEmpDet} id=""/>
     
                 </InputFieldYX>
                 {/**Radio button ends here */}
                 {/**Another one */}
                 {/**Radio button start here */}
                 <Radio>
                 <p className="txt">Are you connected to an employee of KBC Bank Ireland plc?<br />
                 For example a spouse, domestic partner or child?</p>
                 <label>
                 <input type="radio" name="bEmpCon" value="yes" onChange={this.onChange} checked={bEmpCon === "yes"} />
                 <span>Yes</span>
                 </label>
                 
                 <label>
                 <input type="radio" name="bEmpCon" value="no" onChange={this.onChange} checked={bEmpCon === "no"}/>
                 <span>No</span>
                 </label>
                 </Radio>
                 <InputFieldYX>
                 <label htmlFor="" className="txt">If YES, please provide details</label>
                             <TextInput type="text" name="bEmpConDet" onChange={this.onChange} value={aEmpConDet} id=""/>
     
                 </InputFieldYX>
                 {/**Radio button ends here */}
                 {/**Another one */}
                 {/**Radio button start here */}
                 <Radio>
                 <p className="txt">Are you aware of any known future changes to your circumstances
     which may affect your ability to repay the proposed mortgage?</p>
                 <label>
                 <input type="radio" name="bFutCha" value="yes" onChange={this.onChange} checked={bFutCha === "yes"} />
                 <span>Yes</span>
                 </label>
     
                 <label>
                 <input type="radio" name="bFutCha" value="no" onChange={this.onChange} checked={bFutCha === "no"}/>
                 <span>No</span>
                 </label>
                 </Radio>
                 <InputFieldYX>
                 <label htmlFor="" className="txt">If YES, please provide details</label>
                             <TextInput type="text" name="bFutChaDet" onChange={this.onChange} value={aFutChaDet} id=""/>
     
                 </InputFieldYX>
                 {/**Radio button ends here */}
                 
                </AppA>
                </FormArea>
                <InputRowGroup style={{width:'97%', margin:'0 auto'}}>
                <Arow>
                <p className="txt">Are there any other persons over the age of 17 years, who will occupy the property?</p>
                <Radio>
                <label>
                <input type="radio" name="aOp" value="yes" onChange={this.onChange} checked={aOp === "yes"} />
                <span>Yes</span>
                </label>
    
                <label>
                <input type="radio" name="aOp" value="no" onChange={this.onChange} checked={aOp === "no"} />
                <span>No</span>
                </label>
                </Radio>
                <InputFieldT>
                <label htmlFor="" className="txt">If yes, How Many?</label>
                            <TextInput type="text" name="aOpDet" onChange={this.onChange} value={aOpDet} id=""/>
    
                </InputFieldT>
                </Arow>
                <InputFieldZX>
                <label htmlFor="" className="txt">Relationship to Borrower</label>
                            <TextInput type="text" name="rel" onChange={this.onChange} value={rel} id=""/>
    
                </InputFieldZX>
                </InputRowGroup>
                <FormArea style={{width:'97%', margin:'0 auto'}}>
                <AppA> 
                {/**A radio question */}
                <RadioGroup>
                <label htmlFor="" className="txt">Are you a U.S. Citizen?</label>
                <Radio>
                <label>
                <input type="radio" name="aCit" value="yes" onChange={this.onChange} checked={aCit === "yes"} />
                <span>Yes</span>
                </label>
    
                <label>
                <input type="radio" name="aCit" value="no" onChange={this.onChange} checked={aCit === "no"}/>
                <span>No</span>
                </label>
                </Radio>
                </RadioGroup>
                {/**A radio question */}
                <RadioGroup>
                <label htmlFor="" className="txt">Are you a U.S. tax resident?</label>
                <Radio>
                <label>
                <input type="radio" name="aTr" value="yes" onChange={this.onChange} checked={aTr === "yes"} />
                <span>Yes</span>
                </label>
                
                <label>
                <input type="radio" name="aTr" value="no" onChange={this.onChange} checked={aTr === "no"}/>
                <span>No</span>
                </label>
                </Radio>
                </RadioGroup>
                <p className="txt">If yes, enter your U.S. TIN number (Taxpayers Identification No.)</p>
               
                <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '4px',
                    MozAppearance: 'textfield',
                    width: '15px',
                    borderRadius: '0',
                    fontSize: '14px',
                    height: '25px',
                    width:'25px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '1px solid #003A65'
                    // border: '1px solid #0CB0EF'

                  }} type='text' name="aTin" onChange={(value, index) => {
                    this.setState({ aTin:value,index })  }} value={aTin} fields={10} />
                {/**A radio question */}
                <p htmlFor="" className="txt">Are you resident for tax purposes in any country/ territory other<br/> <RadioGroupX style={{marginTop:'-4px'}}>
                <label htmlFor="" className="txt">
                than the Republic of Ireland or the U.S.?*</label>
                <Radio>
                <label>
                <input type="radio" name="aOc" />
                <span>Yes</span>
                </label>
    
                <label>
                <input type="radio" name="aOc"/>
                <span>No</span>
                </label>
                </Radio>
                </RadioGroupX>
                </p>
                <p className="txt-sm">If you answered yes to the above question, please list below all countries/territories in which<br />
                you are tax resident, and provide your TIN or functional equivalent for each country/territory.</p>
                <TableF>
                <tr>
                <th>Country of Residence</th>
                <th>TIN</th>
                </tr>
                <tr>
                <td className="">
                <TextInputXX type="text" name="aOcName" onChange={this.onChange} value={aOcName} id=""/>
                
                </td>
                <td className="">
                <TextInputXX type="text" name="aOcTin" onChange={this.onChange} value={aOcTin} id=""/>
                
                </td>
                </tr>
                </TableF>
               
                </AppA>
                <div className="vr"></div>
    
                <AppA> 
                {/**A radio question */}
                <RadioGroup>
                <label htmlFor="" className="txt">Are you a U.S. Citizen?</label>
                <Radio>
                <label>
                <input type="radio" name="bCit" value="yes" onChange={this.onChange} checked={bCit === "yes"} />
                <span>Yes</span>
                </label>
    
                <label>
                <input type="radio" name="bCit" value="no" onChange={this.onChange} checked={bCit === "no"} />
                
                <span>No</span>
                </label>
                </Radio>
                </RadioGroup>
                {/**A radio question */}
                <RadioGroup>
                <label htmlFor="" className="txt">Are you a U.S. tax resident?</label>
                <Radio>
                <label>
                <input type="radio" name="bTr" value="yes" onChange={this.onChange} checked={bTr === "yes"} />
                <span>Yes</span>
                </label>
                
                <label>
                <input type="radio" name="bTr" value="no" onChange={this.onChange} checked={bTr === "no"} />
                <span>No</span>
                </label>
                </Radio>
                </RadioGroup>
                <p className="txt">If yes, enter your U.S. TIN number (Taxpayers Identification No.)</p>
    
                <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '4px',
                    MozAppearance: 'textfield',
                    width: '15px',
                    borderRadius: '0',
                    fontSize: '14px',
                    height: '25px',
                    width:'25px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '1px solid #003A65'
                  }} type='text' name="bTin" onChange={(value, index) => {
                    this.setState({ bTin:value,index })  }} value={bTin} fields={10} />
                {/**A radio question */}
                <p htmlFor="" className="txt">Are you resident for tax purposes in any country/ territory other<br/> <RadioGroupX style={{marginTop:'-4px'}}>
                <label htmlFor="" className="txt">
                than the Republic of Ireland or the U.S.?*</label>
                <Radio>
                <label>
                <input type="radio" name="bOc" />
                <span>Yes</span>
                </label>
    
                <label>
                <input type="radio" name="bOc"/>
                <span>No</span>
                </label>
                </Radio>
                </RadioGroupX>
                </p>
                <p className="txt-sm">If you answered yes to the above question, please list below all countries/territories in which<br />
                you are tax resident, and provide your TIN or functional equivalent for each country/territory.</p>
                <TableF>
                <tr>
                <th>Country of Residence</th>
                <th>TIN</th>
                </tr>
                <tr>
                <td className="">
                
                <TextInputXX type="text" name="bOcName" onChange={this.onChange} value={bOcName} id=""/>
              
                </td>
                <td className="">
                <TextInputXX type="text" name="bOcTin" onChange={this.onChange} value={bOcTin} id="" />
                
                </td>
                </tr>
                </TableF>
               
               
                </AppA>
                </FormArea>
                <FormAreaX style={{marginTop:'15px',marginBottom:'15px'}}>
                <AppA> <p className="text-small p-show">KBC Bank Ireland plc is registered by central bank of Ireland</p>
                <p className="text-small p-show">The registered number is 40537 and registered office is SandwithStreet, Dublin 2.</p></AppA>
                <AppA>
                <p className="text-small p-show">*For further information on FATCA or CRS please refer to</p>
                <p className="text-link p-show"><a style={{textDecoration:'none', color:'#003A65', fontWeight:'bold',fontFamily: 'Neue Haas Grotesk Text Pro'}} href="http://www.revenue.ie/en/business/aeoi/index.html">http://www.revenue.ie/en/business/aeoi/index.html</a></p>
                </AppA>
                </FormAreaX>
                </HeaderX>
                <Bank src={bank} className="p-show" />
                <p style={{marginLeft:'15px',marginTop:'20px',fontSize:'12px'}} className="p-show">KBC/0256-6(04/18)</p>
                <p className="p-no p-show">1</p>
                <div className="page-break"></div>
                <HeaderX className="head">
                <div className="awo">
                <section className="security"style={{width:'97%',margin:'0 auto'}} >
                <SqRow>
                <HeaderImg  style={{height:'32px'}}src={SQ}/>
                <p>(Required for telephone/email account enquiries) Note: this section must be completed in full by each applicant.</p>
                </SqRow>
                </section>
                </div>
                <FormArea style={{width:'97%', margin:'0 auto'}}>
                <AppA>
                <InputFieldY>
                <label htmlFor="" className="txt">1. Mother's Maiden Name*</label>
                <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '2px 4px',
                    MozAppearance: 'textfield',
                    width: '15px',
                    borderRadius: '0',
                    fontSize: '14px',
                    height: '25px',
                    width:'25px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '1px solid #003A65'
                  }} type='text' name="aMMName" onChange={(value, index) => {
                    this.setState({ aMMName:value,index })  }} value={aMMName} fields={10} />
    
                </InputFieldY>
                <InputFieldY>
                <label htmlFor="" className="txt">2. Your Place of Birth*</label>
                <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '2px 4px',
                    MozAppearance: 'textfield',
                    width: '15px',
                    textAlign:'center',
                    borderRadius: '0',
                    fontSize: '16px',
                    height: '25px',
                    width:'25px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'grey',
                    border: '0.5px solid #003A65'
                  }} type='text' name="aPOB" onChange={(value, index) => {
                    this.setState({ aPOB:value,index })  }} value={aPOB} fields={10} />
                    </InputFieldY>
                <InputFieldY>
                <label htmlFor="" className="txt">3. Your Favourite Colour*</label>
                <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '2px 4px',
                    MozAppearance: 'textfield',
                    width: '15px',
                    borderRadius: '0',
                    fontSize: '14px',
                    height: '25px',
                    width:'25px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '1px solid #003A65'
                  }} type='text' name="aFavCol" onChange={(value, index) => {
                    this.setState({ aFavCol:value,index })  }} value={aFavCol} fields={10} />
                </InputFieldY>
                
                </AppA>
                <div className="vr"></div>
    
                <AppA>
                <InputFieldY>
                <label htmlFor="" className="txt">1. Mother's Maiden Name*</label>
                <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '2px 4px',
                    MozAppearance: 'textfield',
                    width: '15px',
                    borderRadius: '0',
                    fontSize: '14px',
                    height: '25px',
                    width:'25px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '1px solid #003A65'
                  }} type='text' name="bMMName" onChange={(value, index) => {
                    this.setState({ bMMName:value,index })  }} value={bMMName} fields={10} />
    
                </InputFieldY>
                <InputFieldY>
                <label htmlFor="" className="txt">2. Your Place of Birth*</label>
                <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '2px 4px',
                    MozAppearance: 'textfield',
                    width: '15px',
                    borderRadius: '0',
                    fontSize: '14px',
                    height: '25px',
                    width:'25px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '1px solid #003A65'
                  }} type='text' name="bPOB" onChange={(value, index) => {
                    this.setState({ bPOB:value,index })  }} value={bPOB} fields={10} />
                    </InputFieldY>
                <InputFieldY>
                <label htmlFor="" className="txt">3. Your Favourite Colour*</label>
                <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
                    fontFamily: 'monospace',
                    margin:  '2px 4px',
                    MozAppearance: 'textfield',
                    width: '15px',
                    borderRadius: '0',
                    fontSize: '14px',
                    height: '25px',
                    width:'25px',
                    paddingLeft: '7px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '1px solid #003A65'
                  }} type='text' name="bFavCol" onChange={(value, index) => {
                    this.setState({ bFavCol:value,index })  }} value={bFavCol} fields={10} />
                </InputFieldY>
                
                </AppA>
                </FormArea>
                    <img src={pg2b} />
                </HeaderX>
                <p className="p-no p-show">2</p>
                <div className="page-break"></div>
                <HeaderX className="head">
                <img src={pg3x} className='awo' />
                </HeaderX>
                <p className="p-no p-show">3</p>
     {/**Page break here */}
     <div className="page-break"></div>
    <HeaderX className="head">
    
     <img src={pg4a} className='awo' alt="" srcset=""/>
     <Applicants style={{width:'97%', margin:'0 auto'}}>
     <AppaX>
     <HeaderImg src={A1}/>
     
     <TableD>
     <tr className="tx">
     <th className='gx'></th>
     <th className="">Yes</th>
     <th className="">No</th>
     </tr>
     {/**Email */}
     <tr className="ghen">
     <td className="da">Email</td>
     <td className="db"><RadioX><label> <input  type="radio" name="aMPE" value="yes" onChange={this.onChange} checked={aMPE === "yes"} /><span></span></label></RadioX></td>
     <td className="db"><RadioX><label> <input type="radio" name="aMPE" value="no" onChange={this.onChange} checked={aMPE === "no"}/><span></span></label></RadioX></td>
     </tr>
     {/**SMS */}
     <tr className="ghen">
     <td className="da">SMS</td>
     <td className="db"><RadioX><label> <input  type="radio" name="aMPS" value="yes" onChange={this.onChange} checked={aMPS === "yes"} /><span></span></label></RadioX></td>
     <td className="db"><RadioX><label> <input type="radio" name="aMPS" value="no" onChange={this.onChange} checked={aMPS === "no"}/><span></span></label></RadioX></td>
     </tr>
     {/**Phone */}
     <tr className="ghen">
     <td className="da">Phone</td>
     <td className="db"><RadioX><label> <input  type="radio" name="aMPP" value="yes" onChange={this.onChange} checked={aMPP === "yes"} /><span></span></label></RadioX></td>
     <td className="db"><RadioX><label> <input type="radio" name="aMPP" value="no" onChange={this.onChange} checked={aMPP === "no"}/><span></span></label></RadioX></td>
     </tr>
     {/**Letter */}
     <tr className="ghen">
     <td className="da">Letter</td>
     <td className="db"><RadioX><label> <input  type="radio" name="aMPL" value="yes" onChange={this.onChange} checked={aMPL === "yes"} /><span></span></label></RadioX></td>
     <td className="db"><RadioX><label> <input type="radio" name="aMPL" value="no" onChange={this.onChange} checked={aMPL === "no"}/><span></span></label></RadioX></td>
     </tr>
     </TableD>
     </AppaX>
     <AppaY>
     <HeaderImg src={A2}/>
     
     <TableD >
     <tr className="tx">
     <th></th>
     <th className="">Yes</th>
     <th className="">No</th>
     </tr>
     {/**Email */}
     <tr className="ghen">
     <td className="da">Email</td>
     <td className="db"><RadioX><label> <input  type="radio" name="bMPE" value="yes" onChange={this.onChange} checked={bMPE === "yes"} /><span></span></label></RadioX></td>
     <td className="db"><RadioX><label> <input type="radio" name="bMPE" value="no" onChange={this.onChange} checked={bMPE === "no"}/><span></span></label></RadioX></td>
     </tr>
     {/**SMS */}
     <tr className="ghen">
     <td className="da">SMS</td>
     <td className="db"><RadioX><label> <input  type="radio" name="bMPS" value="yes" onChange={this.onChange} checked={bMPS === "yes"} /><span></span></label></RadioX></td>
     <td className="db"><RadioX><label> <input type="radio" name="bMPS" value="no" onChange={this.onChange} checked={bMPS === "no"}/><span></span></label></RadioX></td>
     </tr>
     {/**Phone */}
     <tr className="ghen">
     <td className="da">Phone</td>
     <td className="db"><RadioX><label> <input  type="radio" name="bMPP" value="yes" onChange={this.onChange} checked={bMPP === "yes"} /><span></span></label></RadioX></td>
     <td className="db"><RadioX><label> <input type="radio" name="bMPP" value="no" onChange={this.onChange} checked={bMPP === "no"}/><span></span></label></RadioX></td>
     </tr>
     {/**Letter */}
     <tr className="ghen">
     <td className="da">Letter</td>
     <td className="db"><RadioX><label> <input  type="radio" name="bMPL" value="yes" onChange={this.onChange} checked={bMPL === "yes"} /><span></span></label></RadioX></td>
     <td className="db"><RadioX><label> <input type="radio" name="bMPL" value="no" onChange={this.onChange} checked={bMPL === "no"}/><span></span></label></RadioX></td>
     </tr>
     </TableD>
     </AppaY>
     
     </Applicants>
     <img src={pg4c} />
</HeaderX>
<p className="p-no p-show">4</p>
{/**Page break here */}
<div className="page-break"></div>
<HeaderX className="head">
{/**
    <img src={pg5_} className="p-show" />
*/}
<img src={pg5a} className="awo"/>

 <FormAreaX style={{width:'97%', margin:'0 auto'}}>
 
 <div>
 <InputFieldZ>
 <label htmlFor="" className="label">Signature of applicant 1</label>
 <input type="text" name="" id=""/>
 </InputFieldZ>
 <InputFieldZ style={{marginTop:'25px'}}>
 <label htmlFor="" className="label">Date</label>
 <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
   fontFamily: 'monospace',
   margin:  '4px',
   MozAppearance: 'textfield',
   width: '15px',
   borderRadius: '0',
   fontSize: '14px',
   height: '25px',
   width:'25px',
   paddingLeft: '7px',
   backgroundColor: 'transparent',
   color: 'black',
   border: '1px solid #003A65'
  }} type='text' name="aDD" onChange={(value, index) => {
    this.setState({ aDD:value,index })  }} value={aDD} fields={8} />
    </InputFieldZ>
    </div>
    <div>
    <InputFieldZ>
    <label htmlFor="" className="label">Signature of applicant 2</label>
<input type="text" name="" id=""/>
</InputFieldZ>
<InputFieldZ style={{marginTop:'25px'}}>
<label htmlFor="" className="label">Date</label>
<ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
  fontFamily: 'monospace',
  margin:  '4px',
  MozAppearance: 'textfield',
  width: '15px',
  borderRadius: '0',
  textAlign:'center',
  fontSize: '14px',
  height: '25px',
  width:'25px',
  paddingLeft: '7px',
  backgroundColor: 'transparent',
  color: 'black',
  border: '1px solid #003A65'
}} type='text' name="bDD" onChange={(value, index) => {
  this.setState({ bDD:value,index })  }} value={bDD} fields={8} />
  </InputFieldZ>
  </div>
  </FormAreaX>
  
  <div className="sec">
  <img style={{margin:'0'}} src={pg5c}  />
        <FormAreaX style={{width:'97%', margin:'0 auto'}}>
        
        <div >
        <InputFieldZ>
    <label htmlFor="" className="label">Signature of applicant 1</label>
    <input type="text" name="" id=""/>
    </InputFieldZ>
    <InputFieldZ style={{marginTop:'25px'}}>
    <label htmlFor="" className="label">Date</label>
    <ReactCodeInput className="reactCodeInput" autoFocus="false" inputStyle={{
      fontFamily: 'monospace',
        margin:  '4px',
        MozAppearance: 'textfield',
        width: '15px',
        borderRadius: '0',
        fontSize: '14px',
        height: '25px',
        width:'25px',
        paddingLeft: '7px',
        backgroundColor: 'transparent',
        color: 'black',
        border: '1px solid #003A65'
      }} type='text' name="aCD" onChange={(value, index) => {
        this.setState({ aCD:value,index })  }} value={aCD} fields={8} />
        </InputFieldZ>
        </div>
        <div>
        <InputFieldZ>
        <label htmlFor="" className="label">Signature of applicant 2</label>
        <input type="text" name="" id=""/>
        </InputFieldZ>
        <InputFieldZ style={{marginTop:'25px'}}>
        <label htmlFor="" className="label">Date</label>
        <ReactCodeInput 
        autoFocus="false"
        className="reactCodeInput"  inputStyle={{
          fontFamily: 'monospace',
          margin:  '4px',
          MozAppearance: 'textfield',
          width: '15px',
          textAlign:'center',
          borderRadius: '0',
          fontSize: '14px',
          height: '25px',
          width:'25px',
          paddingLeft: '0',
          backgroundColor: 'transparent',
          color: 'black',
          border: '1px solid #003A65'
        }} type='text' name="bCD" onChange={(value, index) => {
          this.setState({ bCD:value,index })  }} value={bCD} fields={8} />
          </InputFieldZ>
          </div>
          </FormAreaX>
          </div>
          </HeaderX>
          <p className="p-no p-show">5</p>
        </div>
            </Container>
        )
    }
}
