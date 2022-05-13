import { SearchLabel } from './Filter.styled';
import { setFilter } from 'redux/reduxSlices';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <div>
      <SearchLabel>Find contacts by name</SearchLabel>
      <input type="text" name="filter" onChange={handleChange} />
    </div>
  );
};
