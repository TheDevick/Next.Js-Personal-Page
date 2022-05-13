import styled from "styled-components";
import Title from "../SectionTitle";

const StyledDiv = styled.div`
    margin: 65px 151px 28px 151px;

    @media (max-width: 992px) {
        margin: 65px 10px 28px 10px;
    }
`

export default function Contact() {
    return (
        <StyledDiv id="Contact">
            <Title>Contact</Title>
        </StyledDiv>
    )
}