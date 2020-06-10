import {useEffect, useRef} from 'react';

// 实现在 非第一次渲染时执行
const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
    // eslint-disable-next-line
  }, deps); //必须是不可变数据
};
export {useUpdate}