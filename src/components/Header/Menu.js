import styled from "styled-components";

const StyledMenu = styled.nav`
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 45px;

    letter-spacing: 0.6px;

    color: #4A4A4A;
    width: 20%;

    @media (max-width: 992px) {
        width: 90%;
        margin-top: 30px;
    }
`;

const StyledList = styled.ul`
    display: flex;
    justify-content: space-between;

    @media (max-width: 370px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledItem = styled.li`
    display: block;
    height: max-content;
    
    @media (max-width: 370px) {
        margin-top: 10px;
    }
`

const StyledLink = styled.a`
    font-style: normal;
    font-weight: medium;
    font-size: 22px;
    line-height: 26px;

    letter-spacing: 0.55px;

    color: #4A4A4A;
    text-decoration: none;
    display: block;
`;

export default function Menu({ items }) {
    return (
        <StyledMenu>
            <StyledList>
                {items.map((item, key) => (
                    <StyledItem key={key}>
                        <StyledLink href={item.url}>{item.title}</StyledLink>
                    </StyledItem>
                ))}
            </StyledList>
        </StyledMenu>
    )
}