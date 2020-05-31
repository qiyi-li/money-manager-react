import styled from 'styled-components';
import React, {useState} from 'react';

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

const TagsSection: React.FC=()=>{
  const [tags,setTags]=useState<string[]>(['衣','食','住','行']);
  const [selectedTags,setSelectedTags] = useState<string[]>([])
  const onAddTag=()=>{
    const tagName= window.prompt('新标签名称为：')
    if(tagName!==null){
      setTags([...tags,tagName])
    }
  }
  const onToggleTag=(tag:string)=>{
    const index=selectedTags.indexOf(tag);
    if(index>=0){
      // 意为：如果 tag 已被选中，就复制所有没有被选中的 tag，作为新的 selectedTags
      setSelectedTags(selectedTags.filter(t=>t!==tag))
    }else{
      setSelectedTags([...selectedTags,tag])
    }

  }
  const getClass=(tag:string)=>selectedTags.indexOf(tag) >=0 ? 'selected':'';


  return(
    <Wrapper>
      <ol>
        {tags.map(tag=>
          <li key={tag} onClick={
            ()=>{onToggleTag(tag);}
          } className={getClass(tag)}>{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )

};


export {TagsSection};