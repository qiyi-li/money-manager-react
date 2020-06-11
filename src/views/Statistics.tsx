import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import dayjs from 'dayjs'; dayjs()


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
const CategoryWrapper=styled.div`
  background-color:#fff;
`
function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records}=useRecords()
  const {getName}= useTags()
  const selectedRecords=records.filter(r=>r.category===category)
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      <h2>
        {selectedRecords.map(r=>{
          return (
            <Item key={r.createdAt} >
              <div className="tags">
                {r.tagIds.map(tagId=><span key={tagId}>{getName(tagId)}</span>)}
              </div>
              {r.note &&
                <div className="note">
                  {r.note}
                </div>
              }
              <div className="amount">
               ￥{r.amount}
              </div>
              {/*{dayjs(r.createdAt).format('YYYY年MM月DD日')}*/}
            </Item>
          )
        })}
      </h2>
    </Layout>
  );
}
export default Statistics