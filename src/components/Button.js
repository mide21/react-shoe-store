import styled from 'styled-components';

export const Button = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: ${props => props.details ? "var(--Red)" : "var(--lightBlue)"};
    border: 0.05rem solid ${props => props.details ? "var(--Red)" : "var(--lightBlue)"};
    color: var(--Dark);
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 2rem;
    transition: all 0.5s ease-in-out;
&:hover {
    background:transparent;
    color: ${props => props.details ? "var(--Red)" : "var(--lightBlue)"};
    &:disabled {
        background:  ${props => props.details ? "var(--Red)" : "var(--lightBlue)"};
        color: var(--Dark);
    }
}
&:focus {
    outline: none;
}

`