import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  sendMercadoPago,
  updateInfo,
} from "../../redux/actions/private/companyActions";
import { useQueryParams } from "./useQueryParams";
import { FC, useEffect } from "react";

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
  z-index: 200;
`;

const SubscribedBtn = styled.div`
  background: ${(props) => props.theme.colors.details.secondary};
  border-radius: 15px;
  padding: 12px 20px;
  font-size: 20px;
  color: white;
  font-family: Open sans/Regular;
  margin-top: 2vw;
  z-index: 200;
`;

type Props = {
  compId: number;
};

const ButtonMELI: FC<Props> = ({ compId }) => {
  const dispatch = useDispatch();
  const query: any = useQueryParams();
  const premium = useSelector(
    (state: any) => state.userReducer.company.premium
  );

  useEffect(() => {
    if (query.status && query.status === "approved") {
      const premium = {
        mercadopagoCode: query.payment_id,
        date: new Date().toISOString(),
        companyId: compId,
      };

      dispatch(updateInfo(premium));
    }
  }, [compId]);

  const send = {
    title: "Premium Access",
    price: 2500,
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(sendMercadoPago(send));
  };

  return (
    <>
      {premium ? (
        <SubscribedBtn>Suscrito</SubscribedBtn>
      ) : (
        <Button onClick={(e) => handleSubmit(e)}>Suscribirse</Button>
      )}
    </>
  );
};

export default ButtonMELI;
