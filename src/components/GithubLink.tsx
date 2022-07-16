import styled from "styled-components";

const BasicStyledLink = styled.a`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;

    letter-spacing: 0.45px;

    color: #4A4A4A;
`

export default function GithubLink({
    User = "TheDevick",
    Repository = "", 
    StyledLink = BasicStyledLink,
    children = "Github",
    target = "_blank"
}: any) {
    const GithubLink = `https://github.com/${User}/${Repository}`;

    return (
        <StyledLink href={GithubLink} target={target}>{children}</StyledLink>
    )
}
