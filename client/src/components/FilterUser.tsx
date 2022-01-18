import React from "react";

const FilterUser = () => {
  return (
    <div>
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
    </div>
  );
};

export default FilterUser;
