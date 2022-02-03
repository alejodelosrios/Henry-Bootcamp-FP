import styled from "styled-components";
import { FC } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAndSort } from "../redux/actions/actionCreators";
import { useNavigate } from "react-router";

const Container = styled.div`
  padding: 1.5rem 0;
  z-index: 999;
  margin-bottom: 80px;
`;

const Button = styled.a`
  margin-top: 3rem;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.10000000149011612px;
  text-align: center;
  color: white;
  background: #c879ff;
  border-radius: 15px;
  padding: 10px 30px;
  cursor: pointer;
  user-select: none;
  transition-duration: 0.5s;
  :hover {
    transform: scale(1.01, 1.01);
    box-shadow: 6px 6px 5px -4px rgba(0, 0, 0, 0.43);
    -webkit-box-shadow: 6px 6px 5px -4px rgba(0, 0, 0, 0.43);
    -moz-box-shadow: 6px 6px 5px -4px rgba(0, 0, 0, 0.43);
    transition-duration: 0.5s;
  }
`;
const MainFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  width: 900px;
  height: 123px;
  background: white;
  padding: 20px 40px 20px 40px;
  justify-content: space-between;
  align-items: flex-end;
  box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
  -webkit-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
  -moz-box-shadow: -6px -2px 15px -7px rgba(0, 0, 0, 0.73);
`;
const IndDivs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Titles = styled.h3`
  padding: 13px 0 10px 0;
  font-weight: 100;
  color: #757577;
  padding-left: 7px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
  text-align: center;
`;

const Inputs = styled.input`
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
  ::placeholder {
    color: #afb0e9;
  }
  :focus {
    background: #ffb7ff30;
    outline: none;
  }
`;

interface Search {
  postulacion?: string | undefined;
  localizacion?: string | undefined;
}

const SearchBar: FC = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const filters_and_sort = useSelector(
    (state: any) => state.postsReducer.filters_and_sort
  );

  const [search, setSearch] = useState<Search>({
    postulacion: "",
    localizacion: "",
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!search.postulacion && !search.localizacion) {
      return null;
    }
    if (!search.localizacion) {
      dispatch(
        filterAndSort({
          ...filters_and_sort,
          inputNames: [...filters_and_sort.inputNames, search.postulacion],
        })
      );
    }
    if (!search.postulacion) {
      dispatch(
        filterAndSort({
          ...filters_and_sort,
          location: {
            ...filters_and_sort.location,
            city: [...filters_and_sort.location.city, search.localizacion],
          },
        })
      );
    }
    if (search.postulacion && search.localizacion) {
      dispatch(
        filterAndSort({
          ...filters_and_sort,
          inputNames: [...filters_and_sort.inputNames, search.postulacion],
          location: {
            ...filters_and_sort.location,
            city: [...filters_and_sort.location.city, search.localizacion],
          },
        })
      );
    }
    setSearch({
      postulacion: "",
      localizacion: "",
    });
    navigate("/home");
  };

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <MainFlexDiv>
          <IndDivs>
            <Titles>Buscar trabajo</Titles>
            <Inputs
              type="text"
              name="postulacion"
              placeholder="Ingrese palabras clave"
              onChange={handleChange}
              value={search?.postulacion}
            />
          </IndDivs>
          <IndDivs>
            <Titles>Localización</Titles>
            <Inputs
              type="text"
              name="localizacion"
              placeholder="Ingrese ciudad"
              onChange={handleChange}
              value={search?.localizacion}
            />
          </IndDivs>
          <Button onClick={(e) => handleSubmit(e)}>Buscar</Button>
        </MainFlexDiv>
      </form>
    </Container>
  );
};

export default SearchBar;
