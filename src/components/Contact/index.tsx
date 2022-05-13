import styled from "styled-components";
import Title from "../SectionTitle";

const StyledDiv = styled.div`
    margin: 65px 151px 28px 151px;

    @media (max-width: 992px) {
        margin: 65px 10px 28px 10px;
    }
`

const StyledText = styled.p`
    white-space: pre-wrap;
    margin-top: 20px;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;

    letter-spacing: 0.45px;

    color: #4A4A4A;

    @media (max-width: 992px) {
        margin: 20px 5px 0 5px;
        text-align: center;
        line-height: 50px;
    }
`

export default function Contact() {
    return (
        <StyledDiv id="Contact">
            <Title>Contact</Title>
            <StyledText>You can text me on Github, Linkedin Or Twitter.</StyledText>
        </StyledDiv>
    )
}