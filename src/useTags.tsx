import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './hooks/useUpdate';

// import {Id} from './lib/Id';
const useTags = () => { //如此为： 封装一个自定义 Hook
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);

  }, []);//组件挂载时 执行

  // 实现在 非第一次渲染时执行
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);//tags changed 执行 (必须是一个不可变数据)
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
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
  };
  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  const addTag = () => {
    const tagName = window.prompt('新标签名称为：') || '';
    const realTagName=tagName.replace(/(^\s*)|(\s*$)/g, '')
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].name === realTagName){
        return window.alert('标签名已重复')
      }
    }
    if (realTagName !== null && realTagName !== '' ) {
      setTags([...tags, {id: createId(), name: realTagName}])
    } else {
      window.alert('标签名为空')
    }
  };
  return {tags, setTags, findTag, updateTag, findTagIndex, deleteTag, addTag};
};
export {useTags}