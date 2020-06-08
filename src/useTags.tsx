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
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    //获取需要更改的 tag 下标
    const index = findTagIndex(id);
    // 深拷贝 tags 得到 tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    // 把 tagsClone 的第 index 删掉，替换为 {id:id , name:obj,name}
    tagsClone.splice(index, 1, {id: id, name: obj.name}); // 返回的是被删除的那一项
    // 最后得到的就是 预期中的 tags
    setTags(tagsClone);
  };
  return {tags: tags, setTags: setTags, findTag, updateTag, findTagIndex};
};
export {useTags}