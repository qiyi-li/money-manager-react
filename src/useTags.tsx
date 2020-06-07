import {useState} from 'react';
import {createId} from 'lib/createId';
// import {Id} from './lib/Id';
const defaultTags=[
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
]
const useTags = () => { //如此为： 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags
    // {id: (new Id).value, name: '食'},
  );
  const findTag=(id:number)=> tags.filter(tag=>tag.id===id)[0]
  return {tags: tags, setTags: setTags,findTag};
};
export {useTags}