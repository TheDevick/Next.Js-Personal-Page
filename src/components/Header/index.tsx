import styled from "styled-components";
import Menu from "./Menu";
import Title from "./Title";

const StyledHeader = styled.header`
    margin: 85px 151px 65px 151px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 992px) {
        margin: 10px;
        flex-direction: column;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <Title>Erick Bilhalba Abella</Title>
            <Menu items={[
                { title: "Works", url: "#Works" },
                { title: "About", url: "#About" },
                { title: "Contact", url: "/contact" },
            ]} />
        </StyledHeader>
    )
}