import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  >ul{
    display: flex;
    background:#c4c4c4;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      >.underline{
        height: 3px;
        background-color:#fd6600;
        position: absolute;
        width: 0;
        left: 50%;
        bottom: 0;
        transform: translate(-50%);
      }
      &.selected{
        background-color:#fff;
        color: #fd6600;
        >.underline{
          width: 100%;
          transition: width .3s;
        }
        }
    }
  }
`
const CategorySection:React.FC=()=>{
  const categoryMap={'-':'支出','+':'收入'}
  type Keys=keyof typeof categoryMap
  const [categoryList]=useState<Keys[]>(['-','+'])
  const [category,setCategory]=useState('-')//+: 收入 —: 支出
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c=>
          <li className={category===c? 'selected':''}
              onClick={()=>{setCategory(c)}}
          key={c}>
            {categoryMap[c]}
            <div className="underline"/>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}
export {CategorySection}