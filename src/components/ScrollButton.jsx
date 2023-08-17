import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const Heading = styled.h1`
  text-align: center;
  color: green;
`;

const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
`;

const ScrollButton = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: white;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <ScrollButton visible={visible} onClick={scrollToTop}>
      <FaArrowCircleUp />
    </ScrollButton>
  );
};

export default ScrollToTop;
