import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sendMercadoPago } from "../../redux/actions/companyActionCreators";
import { useQueryParams } from "./useQueryParams";

const Button = styled.button`
  background: #c879ff;
  border: none;
  border-radius: 15px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  font-family: Open sans/Regular;`


const ButtonMELI = () => {
  const dispatch= useDispatch();
  const query= useQueryParams();

  console.log(query);

  const send = {
    title: 'Premium Access',
    price: 2500
  }

  const handleSubmit = (e:any ) => {
    e.preventDefault();
    dispatch(sendMercadoPago(send))
  }


return (
  <>
    <Button onClick={handleSubmit} >Pagar</Button>
  </>
)
}

export default ButtonMELI;