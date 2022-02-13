import styled from "styled-components";
import Title from "./Title";

const StyledHeader = styled.header`
    margin: 85px 151px 65px 151px;
`

export default function Header() {
    return (
        <StyledHeader>
            <Title>Erick Bilhalba Abella</Title>
        </StyledHeader>
    )
}