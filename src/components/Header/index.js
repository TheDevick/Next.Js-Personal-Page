import styled from "styled-components";
import Title from "./Title";

export default function Header() {
    const StyledHeader = styled.header`
        margin: 85px 151px 65px 151px;
    `

    return (
        <StyledHeader>
            <Title>Erick Bilhalba Abella</Title>
        </StyledHeader>
    )
}