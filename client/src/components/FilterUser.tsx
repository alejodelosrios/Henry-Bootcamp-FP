import React from "react";

const FilterUser = () => {
  return (
    <div>
      <h3>Filtros</h3>
      <div>
        <h4>Ubicaciòn</h4>
        <div>
          <input
            type="checkbox"
            id="location1"
            name="location1"
            value="LOCATION1"
          />
          <label htmlFor="location1">Buenos Aires</label>
          <br />
          <input
            type="checkbox"
            id="location2"
            name="location2"
            value="LOCATION2"
          />
          <label htmlFor="location2">Mendoza</label>
        </div>
      </div>
      <div>
        <h4>Modalidad</h4>
        <div>
          <input
            type="radio"
            id="presencial"
            name="modalidad"
            value="PRESENCIAL"
          />
          <label htmlFor="presencial">Presencial</label>
          <br />
          <input type="radio" id="remota" name="modalidad" value="REMOTA" />
          <label htmlFor="remota">Remota</label>
          <br />
          <input type="radio" id="hibrida" name="modalidad" value="HIBRIDA" />
          <label htmlFor="hibrida">Híbrida</label>
        </div>
      </div>
      <div>
        <h4>Tipo de contrado</h4>
        <div>
          <input
            type="radio"
            id="fullTime"
            name="contractType"
            value="FULLTIME"
          />
          <label htmlFor="fullTime">Jornada Completa</label>
          <br />
          <input
            type="radio"
            id="partTime"
            name="contractType"
            value="PARTTIME"
          />
          <label htmlFor="partTime">Medio Tiempo</label>
          <br />
          <input
            type="radio"
            id="temporary"
            name="contractType"
            value="TEMPORARY"
          />
          <label htmlFor="temporary">Temporal</label>
          <br />
          <input
            type="radio"
            id="perHour"
            name="contractType"
            value="PERHOUR"
          />
          <label htmlFor="perHour">por Hora</label>
        </div>
      </div>
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
    </div>
  );
};

export default FilterUser;
