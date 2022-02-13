import styled from "styled-components";
import Menu from "./Menu";
import Title from "./Title";

const StyledHeader = styled.header`
    margin: 85px 151px 65px 151px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default function Header() {
    return (
        <StyledHeader>
            <Title>Erick Bilhalba Abella</Title>
            <Menu items={[
                { title: "Works", url: "#works" },
                { title: "About", url: "#about" },
                { title: "Contact", url: "#contact" },
            ]} />
        </StyledHeader>
    )
}