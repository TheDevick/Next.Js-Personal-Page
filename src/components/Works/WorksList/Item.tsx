import styled from "styled-components";
import GithubLink from "../../GithubLink";

interface DivProps {
    Reverse: boolean;
}

const Div = styled.div<DivProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: ${props => props.Reverse ? "row-reverse" : "row"};
    width: 100%;
    height: 300px;
    margin-bottom: 40px;
`;


const Img = styled.img`
    height: 100%;
    width: 40%;
    object-fit: cover;
`

const ContentDiv = styled.div`
    height: max-content;
    width: 40%;
    padding: 10px;
`

const ContentText = styled.p`
    white-space: pre-line;
`

const WebsiteLink = styled.a`
    display: block;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;

    letter-spacing: 0.45px;

    color: #4A4A4A;
`

export default function Item({ Item, Reverse }: any) {
    const GithubUser = Item.Github.User ? Item.Github.User : "DinosDev";
    const GithubRepo = Item.Github.Repo;

    const WebsiteLinkComponent = () => {
        if (Item.Link != false) {
            return (
                <WebsiteLink href={Item.Link} target="_blank">Page</WebsiteLink>
            )
        } else {
            return (<div> </div>);
        }
    }

    return (
        <Div Reverse={Reverse}>
            <Img src={Item.Img}></Img>
            <ContentDiv>
                <h3>{Item.Title}</h3>
                <ContentText>{Item.Content}</ContentText>
                <GithubLink User={GithubUser} Repository={GithubRepo} />
                <WebsiteLinkComponent />
            </ContentDiv>
        </Div>
    );
}