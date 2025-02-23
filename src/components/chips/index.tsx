import { ChipItems } from "./chipItems";
import { Chip, ChipsContainer, Container } from "./style";

function Chips(){
  return(
    <Container>
      <ChipsContainer>
        <Chip>
        {ChipItems.map((ChipItems)=>(
            <span>{ChipItems}</span>
          ))}
        </Chip> 
      </ChipsContainer>
    </Container>
  )
}

export default Chips;