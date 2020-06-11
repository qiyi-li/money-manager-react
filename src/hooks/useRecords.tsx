import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
/* eslint no-eval: 0 */
/*type newRecordItem={
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: string
}
type RecordItem = newRecordItem & {
  createdAt:string //ISO 8601
}*/

export type RecordItem =  {
  createdAt:string //ISO 8601
  tagIds: number[]
  note: string
  category: '+' | '-'
  amount: string
}
type newRecordItem= Omit <RecordItem, 'createdAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);
  const addRecord = (newRecord: newRecordItem) => {
    newRecord.amount=eval(newRecord.amount)
    const record={...newRecord,createdAt:(new Date()).toISOString()};
    setRecords([...records, record]);
  };

  return {records, addRecord};
};
export {useRecords};