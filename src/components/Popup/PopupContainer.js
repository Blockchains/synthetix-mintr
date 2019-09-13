import React, { useContext } from 'react';
import styled from 'styled-components';
import { Cross } from '../Icons';
import { Store } from '../../store';

import { toggleTransactionSettingPopup } from '../../ducks/ui';

const Popup = ({ children }) => {
  const { dispatch } = useContext(Store);
  return (
    <PopupWrapper>
      <Nav>
        <ButtonClose
          onClick={() => toggleTransactionSettingPopup(false, dispatch)}
        >
          <Cross />
        </ButtonClose>
      </Nav>
      {children}
    </PopupWrapper>
  );
};

// const Background = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: #000;
//   filter: blur(8px);
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   z-index: 100;
// `;

const PopupWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  top: 80px;
  right: 40px;
`;

const ButtonClose = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  // 210 210 210 60
`;

export default Popup;
