import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  align-items: center;
    >span{ margin-right: 16px; white-space: nowrap;}
    >input{
      display: block;
      width: 100%;
      height: 72px;
      border: none;
      background:none;
    }
`;

type Props={ label:string; }&React.InputHTMLAttributes<HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  const {label,children,...rest}=props; // 接受 label、children 和所有 input 属性
  return (
    <Label>
      <span>{props.label}</span>
      {/*<input type={props.type}
             placeholder={props.placeholder}
             defaultValue={props.defaultValue}
             onBlur={props.onBlur}
      />*/}
      <input {...rest}/>
      {/*把除了 label children 的其他属性传给 input*/}
    </Label>
  );
};
export {Input};