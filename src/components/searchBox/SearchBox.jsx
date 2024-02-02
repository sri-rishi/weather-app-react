import { useState } from "react";
import { useDispatch} from "react-redux";
import { getCity} from "../../slices/weatherDataSlice";


const SearchBox = () => {
    const [newCity, setNewCity] = useState();
    const dispatch = useDispatch();

    const handleSearchClick = () => {
        dispatch(getCity(newCity));
    }
    return (
        <div className="search-box">
            <input onChange={(e) => setNewCity(e.target.value)} className="input-box" placeholder="Enter city name"/>
            <button
                className="search-btn"
                onClick={() => handleSearchClick()}
            >
                Check
            </button>
        </div>
    )
}

export default SearchBox;