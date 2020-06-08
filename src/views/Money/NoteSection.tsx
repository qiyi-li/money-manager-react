import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Inpute';

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  
`;

type Props={
  value: string;
  onChange: (value:string)=>void
}
const NoteSection:React.FC<Props>=(props)=> {
  const note = props.value;
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <label>
        {/*<span>备注</span>*/}
        {/*<input type="text" placeholder="在这里添加备注"*/}
        {/*       ref={refInput}*/}
        {/*       defaultValue={note}*/}
        {/*       onBlur={onBlur}*/}
        {/*/>*/}
        <Input label="备注 " type="text" value={note} onChange={onChange}>

        </Input>
      </label>
    </Wrapper>
  )
}
export {NoteSection}