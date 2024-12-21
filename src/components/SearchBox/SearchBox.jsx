
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filter/filtersSlice";

const SearchBox = () => {
  const filter = useSelector((state) => state.filter.name);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="name"
        value={filter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
