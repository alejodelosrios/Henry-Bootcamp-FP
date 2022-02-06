import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sendMercadoPago, updateInfo } from "../../redux/actions/private/companyActions";
import { useQueryParams } from "./useQueryParams";

const Button = styled.button`
  background: #c879ff;
  border: none;
  border-radius: 15px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  font-family: Open sans/Regular;
  margin-top: 2vw;
  z-index: 200;`


const ButtonMELI = ( compId:any ) => {

  const dispatch= useDispatch();
  const query:any= useQueryParams();

  console.log(query);

  if(query.status && query.status === 'approved'){
    const premium = {
      mercadopagoCode: query.payment_id,
      date: new Date(),
      companyId: compId,
    }
    console.log(premium);
    dispatch(updateInfo(premium))
    /* setIsPremium(true) */
  }

  const send = {
    title: 'Premium Access',
    price: 2500
  }

  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(sendMercadoPago(send))
  }


return (
  <>
    <Button onClick={(e)=>handleSubmit(e)} >Suscribirse</Button>
  </>
)
}

export default ButtonMELI;
