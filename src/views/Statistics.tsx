import Layout from '../components/Layout';
import React, { useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import {NavLink} from 'react-router-dom';


const Item=styled.div`
  display: flex;
  justify-content: space-between;
  background-color:#fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  padding: 10px 16px;
  >.note{
    color: #999;
    margin-right: auto;
    margin-left: 10px;
  }
  >.tags>span{
  margin-right: 6px;
  }
`
const Header = styled.h3`
  font-size: 18px;
  padding: 10px 16px;
  line-height:  20px;
`;
const Prompt=styled.div`
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 16px;
  margin-top: 48px;
`
const Link=styled.span`
  color: #fd6600;

`

const CategoryWrapper = styled.div`
  background-color:#fff;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  const hash: { [K: string]: RecordItem[] } = {}; //{'2020-6-10': [item,item]}
  const selectedRecords = records.filter(r => r.category === category);
  selectedRecords.map(r => {
    const key = day(r.createdAt).format('YYYY年M月D日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    return hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  console.log(array);
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </CategoryWrapper>


       {
          array.length!==0 ?
            array.map(([date,records] )=>
            <div key={date}>
              <Header>{date}</Header>
              <div>
                {records.map(r => {
                  return (
                    <Item key={r.createdAt}>
                      <div className="tags oneLine">
                        {r.tagIds.map(tagId => <span key={tagId}> {getName(tagId)}</span>)
                          /*.reduce((result,span,index,array)=>
                            result.concat( index < array.length-1 ? [span,'，']:[span]),[]as ReactNode)*/
                        }
                      </div>
                      {r.note &&
                      <div className="note">
                        {r.note}
                      </div>
                      }
                      <div className="amount">
                        ￥{r.amount}
                      </div>
                    </Item>
                  );
                })}
              </div>
            </div>)
            :
            <Prompt>
              <NavLink to="/money">
                暂无相关记录，点击 <Link>记账</Link> 记一笔吧
              </NavLink>
            </Prompt>
        }


    </Layout>
  );
}
export default Statistics