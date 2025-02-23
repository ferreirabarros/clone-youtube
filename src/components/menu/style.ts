import styled from 'styled-components';

export const Container = styled.div<{openMenu:boolean}>`
  min-width: ${({openMenu})=> openMenu? '259px':'67px'};
  height: calc(100vh - 55px);
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction:column;
  overflow-y: auto;
  position: sticky;
  top: 55px;
`;

export const MenuItem = styled.div<{openMenu : boolean}>`
  width: 98%;
  min-height: ${({openMenu})=> openMenu? '45px':'70px'};
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${({openMenu})=> openMenu? 'row':'column'};
  align-items: center;
  justify-content:left;
  span{
    font-weight: 400 ;
    margin-left:  ${({openMenu})=> openMenu? '20px':'none'};
    font-size: ${({openMenu})=> openMenu? '14px':'10px'};
  }
  

  &:houver{
    background-color: #f2f2f2; 
  }

  `; 

export const ButtonIcon = styled.img`
width: 25px; 
`;


