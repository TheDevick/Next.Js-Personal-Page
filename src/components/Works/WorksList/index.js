import styled from "styled-components";
import Item from "./Item";

let isReverse = true;

const StyledDiv = styled.div`
    margin: 65px 151px 28px 151px;

    @media (max-width: 992px) {
        margin: 65px 10px 28px 10px;
    }
`

export default function WorksList({ List }) {
    return (
        <StyledDiv>
            {List.map((item, index) => {
                isReverse = !isReverse;

                return <Item key={index} Item={item} Reverse={isReverse} />
            })}
        </StyledDiv>
    );
}