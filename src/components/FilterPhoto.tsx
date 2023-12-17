import React, { useEffect,useState } from 'react'

const FilterPhoto = () => {

const [categorias,setCategorias]:[string[],any] = useState([]);

  return (
    <div id='filterContainer'>
        <label htmlFor="filter">
            Categorias
            <select  id='filter'>
                <option value="uno">uno</option>
                <option value="dos">dos</option>
                <option value="tres">tres</option>
            </select>
        </label>
    </div>
  )
}

export default FilterPhoto