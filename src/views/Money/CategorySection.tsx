import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  >ul{
    display: flex;
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

type Props={
  value:'-'|'+',
  onChange:(value:'-'|'+')=>void
}
const CategorySection:React.FC<Props>=(props)=>{
  const categoryMap={'-':'支出','+':'收入'}
  type Keys=keyof typeof categoryMap
  const [categoryList]=useState<Keys[]>(['-','+'])
  const category=props.value
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c=>
          <li className={category===c? 'selected':''}
              onClick={()=>{props.onChange(c)}}
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