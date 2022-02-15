import styled from "styled-components";
import Subtitle from "./Subtitle"

const StyledDiv = styled.div`
    margin: 65px 151px 28px 151px;

    @media (max-width: 992px) {
        margin: 65px 10px 28px 10px;
    }
`

export default function Description() {
    return (
        <StyledDiv>
            <Subtitle>Hi 👋, I'm Erick, a 15 Years Old Brazilian Developer! Currently Studying Lumen (Laravel) and Next.Js.</Subtitle>
        </StyledDiv>
    )
}