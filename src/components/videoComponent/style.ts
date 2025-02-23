import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
export const ImageBanner = styled.img`
  width: 100%;
  height:225px;
  border-radius:12px;
`;


export const TitleContainer = styled.div`
  width: 100%;
  display:flex;
  padding-top: 12px;
`;

export const ChannelImage = styled.div`
  background-color: beige;
  min-width: 40px;
  height: 40px;
  display: flex;
  justify-content:center;
  align-items: center;
  border-radius: 50%;
  margin-right: 12px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: 600;
  color: #0f0f0f;
`;

export const TextCard = styled.div`
  color: #8c8c8c;
  font-size: 14px;
`;