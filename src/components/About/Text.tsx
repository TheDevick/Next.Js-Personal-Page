import styled from "styled-components"

const StyledText = styled.p`
    white-space: pre-wrap;
    margin-top: 20px;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;

    letter-spacing: 0.45px;

    color: #4A4A4A;

    @media (max-width: 992px) {
        margin: 20px 5px 0 5px;
        text-align: center;
        line-height: 50px;
    }
`

const ItalicText = styled.span`
    font-style: italic;
`

const BoldText = styled.span`
    font-weight: bold;
`

const Link = styled.a`
    display: inline-block;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;

    letter-spacing: 0.45px;

    color: #4A4A4A;

    @media (max-width: 992px) {
        line-height: 50px;
    }
`

export default function Text() {
    return (
        <StyledText>
            Born in <ItalicText>Porto Alegre</ItalicText>, <ItalicText>Brazil</ItalicText>, I'm a <BoldText>Full-Stack Developer</BoldText>, currently studying <ItalicText>Laravel</ItalicText> and <ItalicText>Next.Js</ItalicText>.<br /><br />
            I'm currently working on this website, and have many plans for the future.<br /><br />
            I Study at <BoldText><Link href="https://alura.com.br">Alura</Link></BoldText> - A Brazilian Startup focused on technology and education.<br /><br />
            I'm a self-taught Programmer, and I'm always looking for new challenges and like to learn new things. <br /><br />
            <BoldText>Fun Fact</BoldText>: I <BoldText>don't deploy on Fridays</BoldText> and my Weekends are very busy watching <BoldText>F1 races</BoldText>. <br /><br />
        </StyledText>
    )
}