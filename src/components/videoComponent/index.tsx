import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style";

function VideoComponent(){
  
  
  return ( 
      <>
        <Container>
          <ImageBanner src='https://img.youtube.com/vi/4eU3Ykk5z70/mqdefault.jpg'/>
          <TitleContainer>
            <ChannelImage>
              FB
            </ChannelImage>
            <TextContainer>
              <Title>24 HORAS PROVANDO AS COMIDAS MAIS ESTRANHAS DA ESTÔNIA - ME ARREPENDI?</Title>
              <TextCard>Fe Leal</TextCard>
              <TextCard>127 mil visualizações  há 4 dias</TextCard>
            </TextContainer>
          </TitleContainer>
        </Container>
      </>
  )
}

export default VideoComponent;