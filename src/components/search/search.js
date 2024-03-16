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
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )

}
export default Search