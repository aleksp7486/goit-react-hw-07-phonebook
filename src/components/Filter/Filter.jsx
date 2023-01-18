import { Label, Input, Board } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const onHandelChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Board>
      <Label>
        Find contacts by name:
        <Input
          onChange={onHandelChange}
          type="text"
          name="filter"
          value={value}
          placeholder="Введите имя для поиска"
        />
      </Label>
    </Board>
  );
};

export default Filter;
