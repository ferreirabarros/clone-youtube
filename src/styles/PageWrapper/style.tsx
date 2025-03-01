import styled from "styled-components";

export const PageWrapper = styled.div<{openMenu:boolean}>`
  width: ${({openMenu})=> openMenu? 'calc(100% - 259px)':'calc(100% - 67px)'};
  display:flex;
`;



