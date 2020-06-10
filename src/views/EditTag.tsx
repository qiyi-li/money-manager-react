import React from 'react';
import {useTags} from 'hooks/useTags'
import{useParams,useHistory} from "react-router-dom";
import Layout from "components/Layout"
import Icon from 'components/Icon';
import {Button} from 'components/Button';
import styled from 'styled-components';
import {Input} from 'components/Inpute';
import {Center} from 'components/Center';
import {Space} from 'components/Space';

type Params={
  id:string
}
const InputWrapper = styled.div`
  background-color:#fff;
  padding: 0 16px;
  margin-top: 12px;
`;
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center ;
  line-height: 20px;
  padding: 14px 16px ;
  background-color:#fff;
`;

const EditTag: React.FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  let {id: idString} = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const deleteAndBack=(id:number)=>{
    deleteTag(id)
    history.goBack()
  }
  const tagContent = (tag: { id: number, name: string }) => (
    <div>
      <InputWrapper>
        <Input label="标签名"
               type="text"
               placeholder="标签名"
               value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={() => deleteAndBack(tag.id)}>删除标签</Button>
      </Center>
    </div>
  );
  const history = useHistory()
  const onClickBack=()=>{
    history.goBack()
  }
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon name="submit" onClick={()=>{window.alert('修改成功');history.goBack()}}/>
      </Topbar>
      {tag ? tagContent(tag) : <Center>tag 不存在</Center>}

    </Layout>

  );
}
export {EditTag};