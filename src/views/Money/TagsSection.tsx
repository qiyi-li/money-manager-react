import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../useTags';

const Wrapper = styled.section`
  flex-grow: 1;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-color:#fff;
  padding: 12px 16px;
  >ol{
    margin: 0 -12px;
    >li{
      background-color:#d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background-color:#fd6600;
        color: #fff;
      }
    }
  }
  >button{
    background:none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: number[];
  onChange: (selected:number[]) => void;
}
const TagsSection: React.FC<Props> = (props) => {
  const  {tags,addTag}= useTags()
  const selectedTagIds = props.value;
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      // 意为：如果 tag 已被选中，就将 tag 从 setSelectedTags 里面移除
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }

  };
  const getClass = (tagId: number) => selectedTagIds.indexOf(tagId) >= 0 ? 'selected' : '';


  return (
    <Wrapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={
            () => {onToggleTag(tag.id);}
          } className={getClass(tag.id)}>
            {tag.name}
          </li>
        )}
      </ol>
      <button onClick={addTag}>新增标签</button>
    </Wrapper>
  )

};


export {TagsSection};