import { Item } from '../../types/item';

type JobItemProps = {
  item: Item;
  onDeleteButtonClick: (newValue: Item) => void;
  onEditItem: (newValue: Item) => void;
}

const JobItem: React.FunctionComponent<JobItemProps> = ({ item, onDeleteButtonClick, onEditItem }) => {

  return (
    <ul>
      <input
        value={item.name}
        onChange={(evt) => {
          const { value } = evt.target;
          onEditItem({ ...item, name: value })
        }}
      />
      <input
        value={item.cost}
        type={'number'}
        onChange={(evt) => {
          const { value } = evt.target;
          onEditItem({ ...item, cost: Number(value) })
        }}
      />
      <input
        type={'checkbox'}
        checked={item.isExempt}
        onChange={(evt) => {
          const { checked } = evt.target;
          onEditItem({ ...item, isExempt: checked })
        }}
      />
      <button
        onClick={() => onDeleteButtonClick(item)}>
        Delete
      </button>
    </ul>
  )
}

export default JobItem