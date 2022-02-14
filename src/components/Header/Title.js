import styled from "styled-components";

const StyledTitle = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 45px;

    letter-spacing: 0.6px;

    color: #4A4A4A;

    @media (max-width: 992px) {
        text-align: center;
    }
`;

export default function Title({ children }) {
    return (
        <StyledTitle> {children} </StyledTitle>
    )
}