import React, {useState} from 'react';
import { Wrapper } from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';
// import Icon from '../../components/Icon';

type Props={
  onChange:(value: number)=>void
}
const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };
  const onclickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text==='ok'){
      let result
      if (output[output.length - 1] === '+' || output[output.length - 1] === '-'){
        window.alert('计算错误')
      }else{
        result=eval(output)
      }
      result===0? window.alert('请输入正确金额'):_setOutput('0')
      props.onChange(result)
    }
    if ('0123456789.+-'.split('').concat(['del','ok','AC']).indexOf(text)>=0){
      setOutput( generateOutput(text,output) )
    }
  }
  return(
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad" onClick={onclickButtonWrapper}>
        <button className="selected">1</button>
        <button>2</button>
        <button>3</button>
        <button className="ac">AC</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="symbol">
          {/*<Icon name="add"/>*/}
          +
        </button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="symbol">
          {/*<Icon name="reduce"/>*/}
          -
        </button>
        <button>.</button>
        <button>0</button>
        <button className="symbol">
          {/*<Icon name="delete"/>*/}
          del
        </button>
        <button className="ok" >ok</button>
      </div>
    </Wrapper>
  )
}
export {NumberPadSection}