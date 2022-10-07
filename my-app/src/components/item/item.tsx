import { UseItemsContext } from "../../contexts/items-context";
import { UsePrintContext } from "../../contexts/print-context";
import { ItemType } from "../../types/item-type";

type ItemProps = {
  item: ItemType;
}

const Item: React.FunctionComponent<ItemProps> = ({ item }) => {

  const { items, setItems } = UseItemsContext();
  const { printedFormActive, setPrintedFormActive } = UsePrintContext();

  const onDeleteButtonClick = (deletedItem: ItemType) => {
    setItems(items.filter((item) => item.id !== deletedItem.id));
    disablePrintForm();
  };

  const onEditItem = (editedItem: ItemType) => {
    const editedItemsList = items.map((item) => {
      if (item.id === editedItem.id) {
        return editedItem;
      }
      return item;
     })

    setItems(editedItemsList);
    disablePrintForm();
  };

  const disablePrintForm = () => {
    if (printedFormActive) {
      setPrintedFormActive(false);
    }
  }

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