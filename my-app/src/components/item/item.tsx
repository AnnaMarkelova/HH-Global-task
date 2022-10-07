import { ItemType } from '../../types/item';

type ItemProps = {
  item: ItemType;
  onDeleteButtonClick: (newValue: ItemType) => void;
  onEditItem: (newValue: ItemType) => void;
}

const Item: React.FunctionComponent<ItemProps> = ({ item, onDeleteButtonClick, onEditItem }) => {

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

export default Item