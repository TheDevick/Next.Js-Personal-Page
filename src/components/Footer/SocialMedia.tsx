import styled from "styled-components";

const StyledSocialMedia = styled.div``
const StyledList = styled.ul`
    list-style: none;
`

const SocialMedias = [
    {
        Name: "Github",
        Link: "https://github.com/DinosDev",
    },
    {
        Name: "Linkedin",
        Link: "https://linkedin.com/in/erick-bilhalba-abellla-b92872203/",
    },
    {
        Name: "Twitter",
        Link: "https://twitter.com/DinosDev",
    }
]

export default function SocialMedia() {
    return (
        <StyledSocialMedia>
            <h4>My Social Media</h4>

            <StyledList>
                {SocialMedias.map((socialMedia, index) => {
                    return (
                        <li key={index}>
                            <a href={socialMedia.Link} target="_blank">
                                {socialMedia.Name}
                            </a>
                        </li>
                    )
                })}
            </StyledList>
        </StyledSocialMedia>
    )
}