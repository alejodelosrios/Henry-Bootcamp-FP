import styled from "styled-components";
import { FC } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAndSort } from "../redux/actions/public/postsActions";
import { useNavigate } from "react-router";

const Container = styled.div`
  padding: 1.5rem 0;
  z-index: 999;
  margin-bottom: 20px;
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

const Titles = styled.h2`
  padding: 13px 0 10px 0;
  /* font-weight: 300; */
  color: #757577;
  padding-left: 7px;
  font-size: 1.2vw;
  /* font-style: normal; */
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  text-align: center;
  font-family: ${(p) => p.theme.colors.typography.poppins};
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

const Select = styled.select`
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

  const posts = useSelector((state: any) => state.postsReducer.posts);

  let cities: any[] = [];
  let jobs: any[] = [];

  for (const obj of posts) {
    if (!cities.includes(obj.location)) {
      cities.push(obj.location);
    }
    if (!jobs.includes(obj.title)) {
      jobs.push(obj.title);
    }
  }

  const [search, setSearch] = useState<Search>({
    postulacion: "",
    localizacion: "",
  });

  const [lists, setList] = useState({ postulacion: [] });

  const handleChange = ({ target: { name, value } }: any) => {
    setSearch({
      ...search,
      [name]: value,
    });

    if (name === "postulacion") {
      setList({
        ...lists,
        [name]: value
          ? jobs.filter((e) => e.toLowerCase().search(value.toLowerCase()) >= 0)
          : [],
      });
    }
  };
  const onlyUnique = (value: string, index: number, self: string[]) => {
    return self.indexOf(value) === index;
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
          inputNames: [
            ...filters_and_sort.inputNames,
            search.postulacion,
          ].filter(onlyUnique),
        })
      );
    }
    if (!search.postulacion) {
      dispatch(
        filterAndSort({
          ...filters_and_sort,
          location: {
            ...filters_and_sort.location,
            city: [
              ...filters_and_sort.location.city,
              search.localizacion,
            ].filter(onlyUnique),
          },
        })
      );
    }
    if (search.postulacion && search.localizacion) {
      dispatch(
        filterAndSort({
          ...filters_and_sort,
          inputNames: [
            ...filters_and_sort.inputNames,
            search.postulacion,
          ].filter(onlyUnique),
          location: {
            ...filters_and_sort.location,
            city: [
              ...filters_and_sort.location.city,
              search.localizacion,
            ].filter(onlyUnique),
          },
        })
      );
    }
    setSearch({
      postulacion: "",
      localizacion: "",
    });
    setList({
      postulacion: [],
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
              list="postulacion"
              autoComplete="off"
            />
            <datalist id="postulacion">
              {lists.postulacion.slice(0, 4).map((e, i) => (
                <option key={i} value={e} />
              ))}
            </datalist>
          </IndDivs>
          <IndDivs>
            <Titles>Localización</Titles>
            <Select
              name="localizacion"
              value={search?.localizacion}
              onChange={(e) => handleChange(e)}
            >
              <option key={0}>Elegir ciudad</option>
              {cities.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </Select>
          </IndDivs>
          <Button onClick={(e) => handleSubmit(e)}>Buscar</Button>
          <button style={{ display: "none" }} onClick={(e) => handleSubmit(e)}>
            Buscar
          </button>
        </MainFlexDiv>
      </form>
    </Container>
  );
};

export default SearchBar;
