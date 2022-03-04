import styled from "styled-components";

const Title = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    text-transform: uppercase;

    letter-spacing: 1.16667px;

    color: #4A4A4A;

    padding: 0 10px 3px 0;
    border-bottom: 3px solid #4A4A4A;
    width: max-content;

    @media (max-width: 992px) {
        padding: 0 0 3px 0;
        margin: 0 auto;
        text-align: center;
    }
`

export default Title;