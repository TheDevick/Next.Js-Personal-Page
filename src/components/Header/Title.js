import styled from "styled-components";

export default function Title({ children }) {
    const StyledTitle = styled.h1`
        font-style: normal;
        font-weight: bold;
        font-size: 38px;
        line-height: 45px;

        letter-spacing: 0.6px;

        color: #4A4A4A;
    `;

    return (
        <StyledTitle> {children} </StyledTitle>
    )
}