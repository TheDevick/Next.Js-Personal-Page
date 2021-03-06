import styled from "styled-components";
import Title from "../SectionTitle";
import WorksList from "./WorksList";

const StyledDiv = styled.div`
    margin: 65px 151px 28px 151px;

    @media (max-width: 992px) {
        margin: 65px 10px 28px 10px;
    }
`

export default function Works() {
    return (
        <StyledDiv id="Works">
            <Title>Works</Title>
            <WorksList List={[
                {
                    Title: "My Personal Homepage",
                    Img: "/src/images/works/homepage.png",
                    Content: "Just This Page. I made it using React.Js and Styled-Components.\n Deployed on Vercel.",
                    Github: {
                        Repo: "Next.Js-Personal-Page"
                    },
                    Link: "https://dinosdev.vercel.app/"
                },
                {
                    Title: "Nystron Website",
                    Img: "/src/images/works/nystron.png",
                    Content: "The Madeireira Nystron Website. I made it using React.Js and Styled-Components.\n Deployed on Vercel.\n My First Project Using TypeScript and Next.Js.",
                    Github: {
                        Repo: "Next.Js-Personal-Page"
                    },
                    Link: "https://nystron.com"
                },
                {
                    Title: "Racing Coffe Backend",
                    Img: "/src/images/works/racingcoffe.png",
                    Content: "The Racing Coffe Blog Backend. I made it using Laravel.\n Not Deployed Yet.\n My First Project Using Laravel Cache and Laravel Sail.",
                    Github: {
                        User: "Racing-Coffe",
                        Repo: "backend"
                    },
                },
                {
                    Title: "Racing Coffe FrontEnd",
                    Img: "/src/images/works/racingcoffe.png",
                    Content: "The Racing Coffe Blog FrontEnd. I made it using Next.Js.\n Not Deployed Yet.\n My First Project Using an API Data.",
                    Github: {
                        User: "Racing-Coffe",
                        Repo: "frontend"
                    },
                }
            ]} />
        </StyledDiv>
    )
}