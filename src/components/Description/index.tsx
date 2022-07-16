import styled from "styled-components";
import Subtitle from "./Subtitle"
import About from "./About"
import GithubLink from "../GithubLink"

const StyledDiv = styled.div`
    margin: 65px 151px 28px 151px;

    @media (max-width: 992px) {
        margin: 65px 10px 28px 10px;
    }
`

const StyledLink = styled.a`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;

    letter-spacing: 0.45px;

    color: #4A4A4A;
`

export default function Description() {
    return (
        <StyledDiv>
            <Subtitle>Hi 👋, I'm Erick, a 15 Years Old Brazilian Developer! Currently Studying Laravel and Symfony.</Subtitle>

            <About>
                With a Lot of Projects in <GithubLink>Github</GithubLink>, I Love to Explore New Things.
                <br />
                Solid Experiences With {' '}
                <StyledLink href="https://git-scm.com/">Git</StyledLink>, {' '}
                <StyledLink href="https://github.com/">Github</StyledLink> and {' '}
                <StyledLink href="https://pt.wikipedia.org/wiki/Linux">Linux</StyledLink>, A Little Bit of {' '}
                <StyledLink href="https://www.docker.com/">Docker</StyledLink>, {' '}
                <StyledLink href="https://www.python.org/">Python</StyledLink>, {' '}
                <StyledLink href="https://unity.com/">C# (Unity)</StyledLink>, And Of Course, {' '}
                <StyledLink href="https://laravel.com/">Laravel</StyledLink> and <StyledLink href="https://nextjs.org/">Next.js</StyledLink>!
            </About>
        </StyledDiv>
    )
}
