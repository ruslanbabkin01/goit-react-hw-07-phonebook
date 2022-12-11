import { FilterLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from '../../redux/slice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  function changeFilter(e) {
    dispatch(setFilter(e.currentTarget.value));
  }

  return (
    <FilterLabel htmlFor="filter">
      Find contacs by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      />
    </FilterLabel>
  );
};
