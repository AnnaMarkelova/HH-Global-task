import { nanoid } from 'nanoid';
import { ItemType, ITEM_DEFAULT } from '../../types/item';
import Item from "../item/item";

type ItemListProps = {
  items: ItemType[];
  setItems: (newValue: ItemType[]) => void;
  setPrintedItems: (newValue: string) => void;
  printedFormActive: boolean;
  setPrintedFormActive: (newValue: boolean) => void;
  extraMarginActive: boolean;
  setExtraMarginActive: (newValue: boolean) => void;
}

const ItemList: React.FunctionComponent<ItemListProps> = ({
  items,
  setItems,
  setPrintedItems,
  printedFormActive,
  setPrintedFormActive,
  extraMarginActive,
  setExtraMarginActive
}) => {

  const onAddButtonClick = () => {
    setItems([...items, { ...ITEM_DEFAULT, id: nanoid() }]);
    disablePrintForm();
  };

  const onClearButtonClick = () => {
    setPrintedItems('');
    setItems([]);
    disablePrintForm();
  };

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
    <>
        <label htmlFor="IsExtraMargin">Extra margin</label>
        <input
          type={'checkbox'}
          id="IsExtraMargin"
          checked={extraMarginActive}
          onChange={(evt) => {
            const { checked } = evt.target;
            setExtraMarginActive(checked);
          }}
        />
      <button
        onClick={() => onAddButtonClick()}
      >
        Add
      </button>
      <button
        onClick={() => onClearButtonClick()}
      >
        Clear
      </button>
      <div>
        <p>Item</p>
        <p>Cost</p>
        <p>Exempt</p>
      </div>
      <li>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteButtonClick={onDeleteButtonClick}
            onEditItem={onEditItem}
          />))}
      </li>
    </>
  )
}

export default ItemList