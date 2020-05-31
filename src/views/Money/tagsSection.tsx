import styled from 'styled-components';

const TagsSection = styled.section`
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
export {TagsSection}