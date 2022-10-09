import { Item } from '../../types/item';

type JobItemProps = {
  item: Item;
  onDeleteButtonClick: (newValue: Item) => void;
  onEditItem: (newValue: Item) => void;
}

const JobItem: React.FunctionComponent<JobItemProps> = ({ item, onDeleteButtonClick, onEditItem }) => {

  return (
    <ul className='form-job__item form-job__container'>
      <input
        className='form-job__input'
        value={item.name}
        onChange={(evt) => {
          const { value } = evt.target;
          onEditItem({ ...item, name: value })
        }}
      />
      <input
        className='form-job__input'
        value={item.cost}
        type='number'
        step='0.01'
        min='0'
        onChange={(evt) => {
          const { value } = evt.target;
          onEditItem({ ...item, cost: Number(value) })
        }}
        onFocus={(evt) => {
          evt.target.select();
        }}
      />
      <input
        className='form-job__input'
        type='checkbox'
        checked={item.isExempt}
        onChange={(evt) => {
          const { checked } = evt.target;
          onEditItem({ ...item, isExempt: checked })
        }}
      />
      <div className='form-job__btn-delete-container'>
        <button
          className='form-job__btn-delete'
          onClick={() => onDeleteButtonClick(item)}>
          x
        </button>
      </div>
    </ul>
  )
}

export default JobItem