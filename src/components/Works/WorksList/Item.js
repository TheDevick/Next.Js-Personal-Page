import styled from "styled-components";
import GithubLink from "../../GithubLink";

const Div = styled.div`
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

export default function Item({ Item, Reverse }) {
    const GithubUser = Item.Github.User ? false : "DinosDev";
    const GithubRepo = Item.Github.Repo;

    return (
        <Div Reverse={Reverse}>
            <Img src={Item.Img}></Img>
            <ContentDiv>
                <h3>{Item.Title}</h3>
                <ContentText>{Item.Content}</ContentText>
                <GithubLink User={GithubUser} Repository={GithubRepo} />
            </ContentDiv>
        </Div>
    );
}