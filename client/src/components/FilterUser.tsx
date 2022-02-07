import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterAndSort } from "../redux/actions/public/postsActions";
import Switcher from "./Switcher";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
`;

const Types = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 15%;
`;

const TypeTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5%;
`;

const Option = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2%;
`;

interface Filters {
  inputName: string;
  categories: string[];
  score: string;
  orderBy: string;
  location: {
    city: string[];
  };
  modality: {
    onSite: boolean;
    hybrid: boolean;
    remote: boolean;
  };
  contractType: {
    fullTime: boolean;
    partTime: boolean;
    temporary: boolean;
    perHour: boolean;
  };
}

const FilterUser: FC = () => {
  const filter = useSelector(
    (state: any) => state.postsReducer.filters_and_sort
  );
  const dispatch = useDispatch();

  const handleFilter = (id: string, name: string, checked: boolean) => {
    if (id === "location") {
      return dispatch(
        filterAndSort({
          ...filter,
          location: {
            ...filter.location,
            city: filter.location.city.filter((elem: any) => elem !== name),
          },
        })
      );
    }

    if (id === "inputNames") {
      return dispatch(
        filterAndSort({
          ...filter,
          inputNames: filter.inputNames.filter((elem: any) => elem !== name),
        })
      );
    }

    dispatch(
      filterAndSort({ ...filter, [id]: { ...filter[id], [name]: checked } })
    );
  };
  const handleScore = ({ target: { value } }: any) => {
    dispatch(filterAndSort({ ...filter, score: value }));
  };

  return (
    <FilterContainer>
      <h3>Filtros</h3>
      <Types>
        <TypeTitle>Score</TypeTitle>
        <Option>
          <label htmlFor="score">Score</label>
          <select onChange={(e) => handleScore(e)}>
            <option value="">todos</option>
            <option value="5">5 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="3">3 ⭐</option>
            <option value="2">2 ⭐</option>
            <option value="1">1 ⭐</option>
          </select>
        </Option>
      </Types>
      {filter.inputNames.length > 0 && (
        <Types>
          <TypeTitle>Puestos buscados</TypeTitle>
          {filter.inputNames.map((e: string, index: number) => (
            <Option key={index}>
              <label htmlFor={`inputNames${index}`}>{e}</label>
              <Switcher
                checkedProp={true}
                id="inputNames"
                name={e}
                handleFilter={handleFilter}
              />
            </Option>
          ))}
        </Types>
      )}
      {filter.location.city.length > 0 && (
        <Types>
          <TypeTitle>Ubicación</TypeTitle>
          {filter.location.city.map((city: string, index: number) => (
            <Option key={index}>
              <label htmlFor={`location${index}`}>{city}</label>
              <Switcher
                checkedProp={true}
                id="location"
                name={city}
                handleFilter={handleFilter}
              />
            </Option>
          ))}
        </Types>
      )}
      <Types>
        <TypeTitle>Modalidad</TypeTitle>
        <Option>
          <label htmlFor="presencial">Presencial</label>
          <Switcher id="modality" name="onSite" handleFilter={handleFilter} />
        </Option>
        <Option>
          <label htmlFor="remota">Remota</label>
          <Switcher id="modality" name="remote" handleFilter={handleFilter} />
        </Option>
        <Option>
          <label htmlFor="hibrida">Híbrida</label>
          <Switcher id="modality" name="hybrid" handleFilter={handleFilter} />
        </Option>
      </Types>
      <Types>
        <TypeTitle>Tipo de contrado</TypeTitle>
        <Option>
          <label htmlFor="fullTime">Full Time</label>
          <Switcher
            id="contractType"
            name="fullTime"
            handleFilter={handleFilter}
          />
        </Option>
        <Option>
          <label htmlFor="partTime">Part Time</label>
          <Switcher
            id="contractType"
            name="partTime"
            handleFilter={handleFilter}
          />
        </Option>
        <Option>
          <label htmlFor="temporary">Temporal</label>
          <Switcher
            id="contractType"
            name="temporary"
            handleFilter={handleFilter}
          />
        </Option>
        <Option>
          <label htmlFor="perHour">por Hora</label>
          <Switcher
            id="contractType"
            name="perHour"
            handleFilter={handleFilter}
          />
        </Option>
      </Types>
    </FilterContainer>
  );
};

export default FilterUser;
