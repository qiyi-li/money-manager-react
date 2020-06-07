import {useState} from 'react';
import {createId} from 'lib/createId';
// import {Id} from './lib/Id';
const useTags = () => { //如此为： 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    // {id: (new Id).value, name: '食'},
    {id: createId(), name: '食'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'},
  ]);
  return {tags: tags, setTags: setTags};
};
export {useTags}