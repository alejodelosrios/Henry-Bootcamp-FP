import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterAndSort } from "../redux/actions/actionCreators";
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
      dispatch(
        filterAndSort({
          ...filter,
          location: {
            ...filter.location,
            city: filter.location.city.filter((elem: any) => elem !== name),
          },
        })
      );
    } else {
      dispatch(
        filterAndSort({ ...filter, [id]: { ...filter[id], [name]: checked } })
      );
    }

    //switch (id) {
    //case "categories":
    //checked
    //? setFilter({
    //...filter,
    //categories: filter.categories.filter((cat) => cat !== name),
    //})
    //: setFilter({
    //...filter,
    //categories: [...filter.categories, name],
    //});
    //break;
    //case "location":
    //checked
    //? setFilter({
    //...filter,
    //location: {
    //city: [...filter.location.city, name],
    //},
    //})
    //: setFilter({
    //...filter,
    //location: {
    //city: filter.location.city.filter((c) => c !== name),
    //},
    //});
    //break;
    //case "modality":
    //setFilter({
    //...filter,
    //modality: {
    //...filter.modality,
    //[name]: checked,
    //},
    //});
    //break;
    //case "contractType":
    //setFilter({
    //...filter,
    //contractType: {
    //...filter.contractType,
    //[name]: checked,
    //},
    //});
    //break;
    //default:
    //break;
    //}
  };

  return (
    <FilterContainer>
      <h3>Filtros</h3>
      <Types>
        <TypeTitle>Ubicación</TypeTitle>
        {filter.location.city.map((city: string, index: number) => (
          <Option key={index}>
            <label htmlFor="location1">{city}</label>
            <Switcher
              checkedProp={true}
              id="location"
              name={city}
              handleFilter={handleFilter}
            />
          </Option>
        ))}
      </Types>
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
      {/* <div>
        <h4>Categorías</h4>
        <div>
          <input type="checkbox" id="cat1" name="cat1" value="CAT1" />
          <label htmlFor="location">Categoría 1</label>
          <br />
          <input type="checkbox" id="cat2" name="cat2" value="CAT2" />
          <label htmlFor="cat2">Categoría 2</label>
        </div>
      </div> */}
    </FilterContainer>
  );
};

export default FilterUser;

//<Option>
//<label htmlFor="location1">Buenos Aires</label>
//<Switcher
//id="location"
//name="Buenos Aires"
//handleFilter={handleFilter}
///>
//</Option>
//<Option>
//<label htmlFor="location2">Mendoza</label>
//<Switcher id="location" name="Mendoza" handleFilter={handleFilter} />
//</Option>
