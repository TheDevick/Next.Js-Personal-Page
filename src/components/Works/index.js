import styled from "styled-components";
import Title from "./Title";

const StyledDiv = styled.div`
    margin: 65px 151px 28px 151px;

    @media (max-width: 992px) {
        margin: 65px 10px 28px 10px;
    }
`

export default function Works() {
    return (
        <StyledDiv id="works">
            <Title>Works</Title>
        </StyledDiv>
    )
}