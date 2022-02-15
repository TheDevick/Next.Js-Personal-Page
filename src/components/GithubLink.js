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
    User = "DinosDev",
    StyledLink = BasicStyledLink,
    children = "Github"
}) {
    const GithubLink = `https://github.com/${User}`

    return (
        <StyledLink href={GithubLink}>{children}</StyledLink>
    )
}