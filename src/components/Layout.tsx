import Nav from './Nav';
import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

type Props= {
  className?: string
  scrollTop?: number
}
const Layout: React.FC<Props> = (props) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(()=>{
      if (!mainRef.current) {return;}
      mainRef.current.scrollTop = props.scrollTop!
    },0)
  } , [props.scrollTop]);

  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};
if (document.documentElement.clientWidth > 500) {
  window.alert('为保证浏览效果，请用手机打开此页面');
  const img = document.createElement('img',);
  img.src = 'qrcode-r.png';
  img.style.position = 'fixed';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow='0 0 10px rgba(0,0,0,0.25)'
  document.body.appendChild(img);
}

Layout.defaultProps={
  scrollTop:0
}

export default Layout;