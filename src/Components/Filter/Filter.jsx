import { SearchLabel } from './Filter.styled';
import { setFilter } from 'redux/reduxSlices';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(state => state.filter);

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
