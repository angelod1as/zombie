import styled from 'styled-components'

export const Wrapper = styled.div`
  label,
  input {
    display: block;
    box-sizing: border-box;
  }

  @media (min-width: 700px) {
    min-width: 300px;
  }

  input {
    margin-top: 5px;
    border: 3px solid ${p => p.theme.colors.darkGreen};
    background-color: ${p => p.theme.colors.lightGreen};
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 0.95em;
    line-height: 120%;
    width: 100%;

    color: ${p => p.theme.colors.red};

    &:focus {
      outline: none;
      border: 3px solid ${p => p.theme.colors.red};
      border-radius: 5px;
    }
  }
`
