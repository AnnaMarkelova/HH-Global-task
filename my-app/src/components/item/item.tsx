import { ItemType } from "../../types/item-type";

type ItemProps = {
  item: ItemType;
  onDeleteButtonClick: (deletedItem: ItemType) => void;
  onEditItem: (item: ItemType, editedItem: ItemType) => void;
}

const Item: React.FunctionComponent<ItemProps> = ({ item, onDeleteButtonClick, onEditItem }) => {

  return (
    <ul>
      <input
        value={item.name}
        onChange={(evt) => {
          const { value } = evt.target;
          onEditItem(item, { ...item, name: value })
        }}
      />
      <input
        value={item.cost}
        type={'number'}
        onChange={(evt) => {
          const { value } = evt.target;
          onEditItem(item, { ...item, cost: Number(value) })
        }}
      />
      <input
        type={'checkbox'}
        checked={item.isExempt}
        onChange={(evt) => {
          const { checked } = evt.target;
          onEditItem(item, { ...item, isExempt: checked })
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