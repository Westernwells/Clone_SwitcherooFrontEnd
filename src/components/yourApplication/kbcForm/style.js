import styled, {createGlobalStyle} from 'styled-components'
import img from './images/background/bgl.png'
import imgx from './images/background/bgmx.png'

const GlobalStyle = createGlobalStyle`
:root {
  /* Not my favorite that line-height has to be united, but needed */
  --lh: 1.4rem;
  --max-lines: 2;
}
 *, *:before, *:after { box-sizing: border-box; -moz-box-sizing: border-box; image-rendering: -webkit-optimize-contrast;}
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline; -webkit-text-size-adjust: 100%;}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {display: block;}
body {line-height: 1;}
ul, ol{list-style: none;}
blockquote, q {quotes: none;}
blockquote:before, blockquote:after,
q:before, q:after {content: '';content: none;}
table {border-collapse: collapse;border-spacing: 0;}
button, html input[type=button], input[type=reset], input[type=submit] { -webkit-appearance: button; cursor: pointer; }
input:not([type='radio']):not([type='checkbox']), textarea, select{-webkit-appearance: none;}
mark {background-color: transparent;font-weight: bold;color: inherit;}
/* end reset */
/preset/
body{font-size: 17px; line-height: 27.92px; font-family: Helvetica, sans-serif; color:#1a1a1a;}
p,h1,h2,h3,h4,h5,h6{
  /* margin:0,5rem; */
  /* padding:0.3rem; */
}
.clearfix:before, .clearfix:after { content:""; display: table; clear: both; }
.clearfix {clear: both; overflow: hidden;}
.wrapper{max-width: 1080px;margin: 0 auto;width: 100%;position: relative;}
Link{
    text-decoration:none;
    color:#169CBF;
}
`
;

const DecTextY = styled.div`
display:grid;
grid-template-columns:16px 1fr;
grid-column-gap:10px;
justify-content:flex-start;
margin:0;
.d-bul{

}
.dot{
  font-weight:600;
font-size:0.86rem;
  
}
.d-text{
/* font-size:0.865rem; */
font-size:0.86rem;
/* word-spacing:2.7px; */


font-family: 'Neue Haas Grotesk Text Pro';

}
.bold{
  font-weight:600;
  font-family: 'Neue Haas Grotesk Text Pro';

}
`;



const SecHeader = styled.p`
font-size:1.4rem;
color:#00AEEF; 
font-family: 'Neue Haas Grotesk Text Pro';
font-weight:600;
margin:10px 0;

/* color:#EC008C; */
/* pink like color */
`;
const SecHeaderX = styled.p`
font-size:1.4rem;
font-family: 'Boing-Bold';
font-weight:600;
color:#EC008C;
margin:10px 0;
/* color:#00AEEF;  */
/* light blue */
`;

const Section = styled.p`
font-size:1.5rem;
font-family: 'Neue Haas Grotesk Text Pro';
font-weight:600;
color:#EC008C;
margin:20px 0 10px 0 ;
/* color:#00AEEF;  */
/* light blue */
`;

// Form Field

const FormArea = styled.div`
display:grid;
grid-template-columns:1fr 3px 1fr;
grid-column-gap:10px;

`;
const FormAreaX = styled(FormArea)`
grid-template-columns:1fr 1fr;
`;
const AppA = styled.div`
width:100%;
`;

const InputField = styled.div`
display:grid;
grid-template-columns:25% 1fr;
/* grid-column-gap:20px; */
margin:7.5px 0 7.5px 0;
align-items:flex-end;

.label{
font-size:1rem;
font-family: 'Neue Haas Grotesk Text Pro';
}
input{
    width:100%;
    /* border: 1px solid #0CB0EF; */

    border:solid 1px #003A65;
    padding:5px;
    /* height:px; */
    
}
`;
const InputFieldT = styled(InputField)`
grid-template-columns:1fr 45%;
grid-column-gap:5px;

`;

const InputFieldX = styled(InputField)`
grid-template-columns:30% 1fr;

`;

const InputFieldY = styled(InputField)`
grid-template-columns:40% 1fr;
/* grid-column-gap:10px; */
justify-content:space-between;
margin:2.5px 0 2.5px 0;


`;
const InputFieldYX = styled(InputField)`
grid-template-columns:50% 1fr;
margin:5px 0;

`;
const InputFieldZ = styled(InputField)`
grid-template-columns:28% 1fr;

`;
const InputFieldZY = styled(InputField)`
grid-template-columns:35% 1fr;

`;
const InputFieldZX = styled(InputField)`
grid-template-columns:25% 1fr;

`;


const AddressField = styled(InputField)`
grid-template-columns:25% 1fr;
align-items:flex-start;
input{
  margin-bottom:5px;
}
`;
const Radio = styled.div`
font-family: 'Neue Haas Grotesk Text Pro';

input {
  display: none;
}
label:first-of-type {
  display: inline-block;
  padding: 5px 10px 5px 0;
  cursor: pointer;
}

label {
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
}

label span {
  position: relative;
  line-height: 22px;
  font-family: 'Neue Haas Grotesk Text Pro';

}

label span:before,
label span:after {
  content: '';
}

label span:before {
  /* border: 1px solid #0CB0EF; */
  border: 1px solid #003A65;
  width: 27px;
  height: 27px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: top;
}

label span:after {
  background: #222021;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 2px;
  left: 4px;
  transition: 300ms;
  opacity: 0;
}

label input:checked+span:after {
  opacity: 1;
}
.f-text{
  font-size:1rem;
  font-family: 'Neue Haas Grotesk Text Pro';

}

`;
const RadioY = styled(Radio)`
label:first-child {
  /* display: inline-block; */
  padding: 5px 0;
  /* cursor: pointer; */
}


`;
const RadioX = styled.div`
margin:5px 0;
input {
  display: none;
}
label {
  display: inline-block;
  /* padding: 5px 10px; */
  cursor: pointer;
}

label span {
  position: relative;
  line-height: 22px;
}

label span:before,
label span:after {
  content: '';
}

label span:before {
  border: 1px solid #003A65;
  width: 30px;
  height: 30px;
  /* margin-right: 10px; */
  display: inline-block;
  vertical-align: top;
}

label span:after {
  background: #222021;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 2px;
  left: 4px;
  transition: 300ms;
  opacity: 0;
}

label input:checked+span:after {
  opacity: 1;
}
`;
const RadioGroup = styled.div`
display:grid;
grid-template-columns:65% 35%;
justify-content:space-between;
align-items:center;
`;
const RadioGroupX = styled(RadioGroup)`
grid-template-columns:65% 35%;
`;
const InputRowGroup = styled.div``;
const Arow = styled.div`
display:grid;
grid-template-columns:60% 15% 1fr;
justify-content:space-between;
/* grid-column-gap:; */
align-items:center;
`;

const TableA = styled.table`
border:solid 1px #013A65;
width:100%;
border-collapse:collapse;
margin: 15px 0;

th{
  border:solid 1px #013A65;
  text-align:center;
  border-collapse:collapse;
  padding:5px;
  font-family: 'Neue Haas Grotesk Text Pro';

}
td{
  border-bottom:none;
  text-align:center;
  border-right:1px solid black;
  padding:5px;
  font-family: 'Neue Haas Grotesk Text Pro';

}
td:last-child{
  border-right:none;
}
`;
const TableB = styled.table`
border:solid 1px #013A65;
width:100%;
border-collapse:collapse;
font-family: 'Neue Haas Grotesk Text Pro';
margin: 7.5px 0;

th{
  border:solid 1px #013A65;
  text-align:center;
  border-collapse:collapse;
  padding:5px;
  font-family: 'Neue Haas Grotesk Text Pro';

}
td{
  border-bottom:1px solid #013A65;
  text-align:center;
  border-right:1px solid #013A65;
padding:5px;
font-family: 'Neue Haas Grotesk Text Pro';

}
td:last-child{
  border-right:none;
}

.da{
width:50px;
text-align:center;
}
.db{
  width:50px;
text-align:center;
}
.dc{
text-align:left;
padding-left:10px;
}
`;
const TableC = styled.table`
border:solid 1px #013A65;
width:100%;
border-collapse:collapse;
margin: 7px 0 15px 0;

th{
  border:solid 1px #013A65;
  text-align:left;
  border-collapse:collapse;
  padding:5px;
  font-family: 'Neue Haas Grotesk Text Pro';

}
td{
  border-bottom:1px solid #013A65;
  text-align:left;
  border-right:1px solid #013A65;
  padding:5px;
  font-family: 'Neue Haas Grotesk Text Pro';


}
td:last-child{
  border-right:none;
}
`;
const TableD = styled.table`
margin:10px 0;

tr .gx{
  margin:55px 0;
}
tr{
  
    height:30px;
}
th{
    /* padding-bottom:10px; */
    font-weight:bold;
}
 td{
  padding:20px 0;
}
/* td .gx{
  padding-top:0;
} */
.tx{height:15px;}
.da{
padding-right:10px;
text-align:left;
width:30px;
}
.db{
    width:20px;
    padding:2.5px;
    text-align:center;
}
`;
const TableF = styled.div`
width:100%;
margin:10px 0;
.g1{
width:100%;
border-top:1px solid #003A65;
border-right:1px solid #003A65;
border-left:1px solid #003A65;
  display:grid;
grid-template-columns:repeat(2,1fr);
p{
padding:7px 5px;
}
}
.br{
  border-right:solid 0.5px #003A65
}
.bl{
  border-left:solid 0.5px #003A65
}
.g2{
width:100%;

  display:grid;
grid-template-columns:repeat(2,1fr);
}
.no-padding{
    padding:0;
  border:solid 1px #013A65;
}
`;
const Header = styled.div`

.head{

  /* background-image:url(${img}); */
  height:20px;
  width:94%;
padding:0 40px;
  margin:0 auto;
  background-repeat:no-repeat;
  background-size:contain;
}
`;
const HeaderX = styled.div`
width:98%;
margin:0 auto;

`;
const Container = styled.div`
  font-family: 'Neue Haas Grotesk Text Pro';
  display:block;
  color:#003A65;
  margin:0 auto;
  padding:0 1%;
  position:relative;
.psuedo{
  height:100px;
  display:block;
  margin-bottom:100px;
}
  .p-no{
    font-size:16px;
    color:#003A65;
    position: relative;
    text-align:center;
    margin-top:10px;
    bottom:0;
  }
  /* width:96%; */
  .reactCodeInput{
    margin-left:-4px;
  }
  .sec{
    margin:80px 0;
  }
.containx{

}
.left{
  margin-left:-23px;
}
.c-text{
/* font-size:0.865rem; */
font-size:0.86rem;
margin:1.3px 0;

font-family: 'Neue Haas Grotesk Text Pro';

}
.d-text{
/* font-size:0.865rem; */
font-size:0.905rem;
margin:1.3px 0;

font-family: 'Neue Haas Grotesk Text Pro';

}
.m-text{
  font-size:0.84;
}
      .text{
        /* font-size:0.865rem; */
        /* working fine abit except 4 */
        /* font-size:0.865rem;  */
        font-size:0.858rem; 

      
        margin:1.3px 0;
        font-family: 'Neue Haas Grotesk Text Pro';
      
      }
.vr{
  /* background-color: none !important
  border:none !important;
  border-top: 3px dotted #00AEEF !important;
    border-top-width:3px;
    border-right-width:0px;
    border-bottom-width:0px;
    border-left-width:0px; */

  width:3px;
  border-left:1px dotted #00AEEF;
  height:100%;
}
.txt{
  font-size:1.1rem;
  font-weight:500;
  margin:3.5px 0;
  font-family: 'Neue Haas Grotesk Text Pro';

}
.txt-sm{
  font-size:0.75rem;
  margin:3.5px 0;
  font-family: 'Neue Haas Grotesk Text Pro';

}
.f-notice{
  font-size:0.9rem;
  font-weight:bold;
  font-family: 'Neue Haas Grotesk Text Pro';
  margin-bottom:20px;
} 
.info{
  font-weight:600;
  font-family: 'Neue Haas Grotesk Text Pro';
  font-size:0.9rem;
  margin:5px 0;


}
.f-text{
  font-size:0.85rem;
  margin:1.5px 0;
  line-height:1.3;
  font-family: 'Neue Haas Grotesk Text Pro';

}
.label{
  font-size:0.85rem;

  font-family: 'Neue Haas Grotesk Text Pro';

}
.text-small{
  font-size:14px;
  margin:7.5px 0;
}
.p-show{
  display:none;
}

.pg{
  border-left:1px solid #0CB0EF;
  border-right:solid 1px #0CB0EF;
  background-repeat:no-repeat;
  margin-top:-7px;
  padding:20px;
  border-bottom:solid 1px #0CB0EF;
  /* border-top:yellow solid 5px;
  margin-top:5px;
  background-color:blue; */

}
.bold{
  font-weight:bold;
}
.blink{
  background:url(${imgx}) top;
  background-size:100% 100%;
  background-repeat:no-repeat;
  margin-top:40px;
  margin-bottom:3px;
  height:20px;
  width:100%;
}
.logo-sm{
  margin-top:-60px;
  margin-bottom:5px;
  display:inline-block;
  padding-right:5px;
  padding-left:20px;
  background:white;
  padding-top:10px;
  height:70px;
}
.logox-sm{
  margin-top:-30px;
  margin-bottom:20px;
  display:block;
  /* padding-right:px; */
  padding-left:20px;
  background:white;
  padding-top:10px;
  height:165px;
}
/* .mg{
  margin-top:260px;
} */
@media print{
  .logo-sm{
  margin-top:-5px;
  margin-bottom:5px;
  /* height:60px;  */
  /* display:inline-block;
  padding-right:10px;
  padding-left:10px; */
  /* background:white;
  padding-top:10px;
  */
}

.logox-sm{
  margin-top:-30px;
  margin-bottom:20px;
  /* display:block; */
  /* height:145px; */
  /* padding-right:px; */
  /* padding-left:10px;
  background:white;
  padding-top:10px;
   */
}
  /* .contain{
    border-top:20px solid red;
    padding:0 20px;
    width:100%;
    margin:0 auto;
  } */
  .p-show{
  display:block;
}
.pg{
  border-bottom:none;
  border-left:none;
  border-right:none;
  background-repeat:no-repeat;
  margin-top:-100px;
  width:100%;

  margin:0 auto;
}
.bg{
  color:green;
}

.headX{
  background-image:url(${img});
height:1600px;
width:100%;
margin-top:-20px;
margin:0 auto;
background-repeat: no-repeat;
background-size:100% 100%;
padding:0 20px 10px 20px;
size:0.65%;
}
.head{
  background-image:url(${img});
height:1620px;
width:100%;

margin:0 auto;
background-repeat: no-repeat;
background-size:100% 100%;
border-top:solid 10px transparent;
padding:10px 20px;
size:0.65%;
}
.head3{
  background-image:url(${img});
height:1640px;
width:100%;

margin:0 auto;
background-repeat: no-repeat;
background-size:100% 100%;
border-top:solid 10px transparent;
padding:10px 20px;
size:0.65%;
}
.head4{
  background-image:url(${img});
height:1660px;
width:100%;

margin:0 auto;
background-repeat: no-repeat;
background-size:100% 100%;
border-top:solid 10px transparent;
padding:10px 20px;
size:0.65%;
}
.head5{
  background-image:url(${img});
height:1500px;
width:100%;

margin:0 auto;
background-repeat: no-repeat;
background-size:100% 100%;
border-top:solid 10px transparent;
padding:10px 20px;
size:0.65%;
}
.awo{
  margin-top:80px;
}
.blink{
    display:none;
  }
}
`;

const Applicants = styled.div`

display:grid;
grid-template-columns:30% 30%;
grid-column-gap:20px;
`;

const Just = styled.div`

  /* border-top:yellow solid 5px;
  margin-top:5px;
  background-color:blue; */
`;
const AppaX = styled.div``;

const AppaY = styled.div``;

const Loader = styled.div`
display:flex;
width:100%;
height:100Vh;
justify-content:center;
align-items:center;
`;

const SqRow = styled.div`
display:grid;
grid-template-columns:19.5% 1fr;
justify-content:flex-start;
align-items:center;
height:32px;
p{
font-size:0.83rem;
font-weight:bold;
margin-top:10px;
}
`;


const Bank = styled.img`
height:58px;
margin:10px auto;
`;

const HeaderImg = styled.img`
height:32px;
`;

export{
    GlobalStyle,
    SecHeader,
    SecHeaderX,
    FormArea,
    FormAreaX,
    AppA,
    InputField,
    InputFieldT,
    InputFieldX,
    InputFieldY,
    InputFieldYX,
    InputFieldZ,
    InputFieldZY,
    InputFieldZX,
    AddressField,
    Radio,
    RadioX,
    RadioY,
    RadioGroup,
    RadioGroupX,
    Arow,
    InputRowGroup,
    TableA,
    TableB,
    TableC,
    TableD,
    TableF,
    Header,
    HeaderX,
    Container,
    Applicants,
    AppaX,
    AppaY,
    Just,
    Section,
    Loader,SqRow,Bank,HeaderImg
}