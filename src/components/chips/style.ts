import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 12px;
  position:sticky;
  top: 55px;
  ::-webkit-scrollbar{
    display: none;
  }
  `;

export const ChipsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  white-space:nowrap;
  flex-direction: row;
  align-items: center;
  overflow-x: scroll;
`;

export const Chip = styled.div`
  width:100%;
  cursor: pointer;
  span{
    height: 32px; 
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.05);
    margin: 10px;
    padding:5px 10px; 
    font-size: 14px;
    font-weight:500;
  }
`;