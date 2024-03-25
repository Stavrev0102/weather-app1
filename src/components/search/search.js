/* eslint-disable no-lone-blocks */
import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api";

const Search = ({ onSearchChange}) => {
    // eslint-disable-next-line no-unused-vars
    const [search,setSearch] = useState(null);
    const loadOptions = async(inputValue) => {
            return fetch(
              `${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`,
              geoApiOptions
            )
              .then((res) => res.json())
              .then((res) => {
                return {
                  options: res.data.map((city) => {
                    return {
                      value: `${city.latitude} ${city.longitude}`,
                      label: `${city.name} , ${city.countryCode}`,
                    };
                  }),
                };
              })
              .catch((err) => console.error(err));
        }
        

    const handleOnChange = (searchData) => {
         setSearch(searchData)
         onSearchChange(searchData)
    }

    return (
        <AsyncPaginate 
            className="search"
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )

}
export default Search

{/* <div class=" css-1nmdiq5-menu">
  <div class=" css-1n6sfyn-MenuList" role="listbox" aria-multiselectable="false" id="react-select-3-listbox">
    <div class=" css-10wo9uf-option" aria-disabled="false" id="react-select-3-option-0" tabindex="-1" role="option">Abu Dhabi , AE</div><div class=" css-10wo9uf-option" aria-disabled="false" id="react-select-3-option-1" tabindex="-1" role="option">Dubai , AE</div><div class=" css-10wo9uf-option" aria-disabled="false" id="react-select-3-option-2" tabindex="-1" role="option">Sharjah , AE</div><div class=" css-10wo9uf-option" aria-disabled="false" id="react-select-3-option-3" tabindex="-1" role="option">Kabul , AF</div><div class=" css-d7l1ni-option" aria-disabled="false" id="react-select-3-option-4" tabindex="-1" role="option">Yerevan , AM</div></div></div> */}