import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 188px;
display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ContSup=styled.div`
width: 500px;
`

export const TopBackground = styled.div`
  position: absolute;
  height: 180px;
  top: 0;
  left: 0;
  background: rgba(200, 121, 255, 0.1);
  width: 100%;
  z-index: 998;
`;

export const Title = styled.h1`
font-size: 80px;
line-height: 70px;
text-align: center;
align-items: center;
top: 131px;
`
export const PT = styled.p`
  color: ${props => props.theme.colors.details.primary};
  margin: 0;
  text-align: center;
`;

export const Input = styled.input`
width: 306px;
  height: 42px;
  border-radius: 15px;
  border: 1px solid #ffb7ff;
  background: #ffb7ff1a;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.04em;
  text-align: left;
  margin-top:15px;
  margin-bottom:15px;
  padding-left: 1rem;
  ::placeholder {
    color: #afb0e9;
  }
  :focus {
    background: #ffb7ff30;
    outline: none;
  }
`
export const Input2 = styled.input`
width: 180px;
  height: 42px;
  border-radius: 15px;
  border: 1px solid #ffb7ff;
  background: #ffb7ff1a;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.04em;
  text-align: left;
  margin-top:15px;
  margin-bottom:15px;
  margin-right: 12px;
  padding-left: 1rem;
  ::placeholder {
    color: #afb0e9;
  }
  :focus {
    background: #ffb7ff30;
    outline: none;
  }
`

export const Select = styled.select`
width: 306px;
  height: 42px;
  border-radius: 15px;
  border: 1px solid #ffb7ff;
  background: #ffb7ff1a;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.04em;
  text-align: left;
  padding-left: 1rem;
  margin-top:15px;
  margin-bottom:15px;
  ::placeholder {
    color: #afb0e9;
  }
  :focus {
    background: #ffb7ff30;
    outline: none;
  }
`
export const TextArea = styled.textarea`
  border-radius: 15px;
  border: 1px solid #ffb7ff;
  background: #ffb7ff1a;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.04em;
  text-align: left;
  padding-left: 1rem;
  margin-top: 20px;
  margin-bottom: 20px;
  ::placeholder {
    color: #afb0e9;
  }
  :focus {
    background: #ffb7ff30;
    outline: none;
  }
`

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  position: static;
  width: 112px;
  height: 42px;
  left: 0px;
  top: 250.62px;
  background: lightblue;
  border: none;
  color: white;
  margin-left: 2px;
  border-radius: 10px;
  box-shadow: 4px 4px 12px 5px rgba(93, 95, 239, 0.1);
  margin-bottom: 20px;
  cursor: pointer;
  font-family: ${(props) => props.theme.colors.typography.light};
`;

export const Form= styled.form`
display: flex;
justify-content:space-evenly;
margin-top:30px;
margin-bottom: 30px;

`
export const Aside= styled.aside`
display: flex;
justify-content:space-evenly;
flex-direction: column;
`
export const Section= styled.section`
display: flex;
justify-content:space-evenly;
flex-direction:column;
`
export const Div= styled.div`
display: flex;
justify-content:space-evenly;
flex-direction:column;
`

export const Label=styled.label`
font-size: 18px;
color: #757577;
font-weight: bolder;
`
