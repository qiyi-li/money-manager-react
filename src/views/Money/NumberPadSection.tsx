import React, {useState} from 'react';
import { Wrapper } from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';

type Props={
  onChange: (value: string) => void
  onOk: () => void

}
const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState('0');

  const setOutput = (output: string) => {
    let newOutput: string;
    if (output.length > 16) {
      newOutput = output.slice(0, 16);
    } else if (output.length === 0) {
      newOutput = '0';
    } else {
      newOutput = output;
    }
    _setOutput(newOutput);
    props.onChange(newOutput);
  };
  const onclickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}

    if (text === 'ok') {
      setOutput('')
      if (props.onOk) {props.onOk(); return}
    }

    if ('0123456789.+-'.split('').concat(['del', 'ok', 'AC']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
      return
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
          +
        </button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="symbol">
          -
        </button>
        <button>.</button>
        <button>0</button>
        <button className="symbol">
          del
        </button>
        <button className="ok" >ok</button>
      </div>
    </Wrapper>
  )
}
export {NumberPadSection}