import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
 
const TextInputField = styled.div`

input{
    width:100%;
    /* border: 0.3px solid #0CB0EF; */
    border:none;
    padding:5px;
    
}
.info{
    color:blue;
    font-size:0.65rem;

}
.error{
    color:red;
    font-size:0.65rem;
}
`;
const TextInput = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <TextInputField>
    <input type="text" placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    disabled={disabled}/>
    </TextInputField>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;