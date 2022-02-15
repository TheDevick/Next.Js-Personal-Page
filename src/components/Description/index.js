import styled from "styled-components";

const StyledDiv = styled.div`
    margin: 65px 151px 28px 151px;

    @media (max-width: 992px) {
        margin: 65px 10px 28px 10px;
    }
`

export default function Description() {
    return (
        <StyledDiv>
            <h2>Description</h2>
        </StyledDiv>
    )
}