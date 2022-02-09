import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 2rem;
`
export const ContSup = styled.div`
width: 500px;
`

export const Title = styled.h2`
    width: 100%;
    font-size: 1.7rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.typography.light};
`

export const Input = styled.input`
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.colors.typography.openSans};
    color: ${(props) => props.theme.colors.typography.darkest};
    ::placeholder {
        color: ${(props) => props.theme.colors.typography.darkest};
    }
    border-radius: 0.5rem;
    border: 0.5px solid ${(props) => props.theme.colors.backgrounds.base};
    :focus {
        outline: none;
    }
`
export const TagsCont = styled.div`
    padding: 1rem 0;
    width: 100%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    gap: 0.5rem;
`

export const Select = styled.select`
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.colors.typography.openSans};
    color: ${(props) => props.theme.colors.typography.darkest};
    ::placeholder {
        color: ${(props) => props.theme.colors.typography.darkest};
    }
    border-radius: 0.5rem;
    border: 0.5px solid ${(props) => props.theme.colors.backgrounds.base};
    :focus {
        outline: none;
    }
`
export const TextArea = styled.textarea`
    width: 100%;
    padding: 0.7rem 1rem;
    font-size: 1rem;
    font-family: ${(props) => props.theme.colors.typography.openSans};
    color: ${(props) => props.theme.colors.typography.darkest};
    border-radius: 0.5rem;
    border: 0.5px solid ${(props) => props.theme.colors.backgrounds.base};
    ::placeholder {
        color: ${(props) => props.theme.colors.typography.darkest};
    }
    :focus {
    outline: none;
    }
`

export const Button = styled.button`
  width:fit-content;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background:${(props) => props.theme.colors.details.primary};
  border: none;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 4px 4px 12px 5px rgba(93, 95, 239, 0.1);
  cursor: pointer;
  font-family: ${(props) => props.theme.colors.typography.light};
`;
export const Tag = styled.button`
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background:transparent;
  border: 0.5px solid ${(props) => props.theme.colors.details.primary};
  color: ${(props) => props.theme.colors.details.primary};
  border-radius: 0.5rem;
  box-shadow: 4px 4px 5px 5px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  font-family: ${(props) => props.theme.colors.typography.openSans};
`;

export const Form = styled.form`
width:100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
`
export const Aside = styled.aside`
width:inherit;
display: flex;
justify-content:space-evenly;
flex-direction: column;
gap: 1rem;
`
export const Section = styled.section`
width:inherit;
display: flex;
justify-content:space-evenly;
flex-direction:column;
`
export const Div = styled.div`
width:inherit;
display: flex;
justify-content:space-between;
flex-wrap: wrap;
gap:1rem;
`
export const InnerDiv = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content:flex-start;
gap:0.3rem;
`
export const InnerDiv2 = styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content:flex-start;
gap:0.3rem;
`

export const Label = styled.label`
font-size: 18px;
color: #757577;
font-weight: bolder;
`
