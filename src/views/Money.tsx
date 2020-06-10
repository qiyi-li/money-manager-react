import Layout from '../components/Layout';
import React, { useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';
import {useRecords} from '../hooks/useRecords';
/* eslint no-eval: 0 */

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

type Category = '-' | '+'
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: '0'
};

function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  const submit = () => {
    let output =selected.amount
     if (output[output.length - 1] === '+' || output[output.length - 1] === '-') {
       return window.alert('计算错误');
     } else if(eval(output)===0){
       return alert('请输入有效值')
     }else if(selected.tagIds.length===0){
       return alert('请选择至少一个标签')
     }
     else{
       addRecord(selected)
       setSelected(defaultFormData)
       alert('保存成功')
     }
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds: tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note: note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category: category})}/>
      <NumberPadSection
        onChange={amount => onChange({amount: amount})}
        onOk={submit}
      />
    </MyLayout>
  );
}
export default Money