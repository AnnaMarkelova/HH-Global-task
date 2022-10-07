import { nanoid } from 'nanoid';
import { UseItemsContext } from "../../contexts/items-context";
import { UsePrintContext } from "../../contexts/print-context";
import { ITEM_DEFAULT } from '../../types/item-type';
import Item from "../item/item";

const ItemsList: React.FunctionComponent = () => {

  const { items, setItems } = UseItemsContext();
  const { setPrintedItems, printedFormActive, setPrintedFormActive } = UsePrintContext();

  const onAddButtonClick = () => {
    setItems([...items, { ...ITEM_DEFAULT, id: nanoid() }]);
    disablePrintForm();
  };

  const onClearButtonClick = () => {
    setPrintedItems('');
    setItems([]);
    disablePrintForm();
  };

  const disablePrintForm = () => {
    if (printedFormActive) {
      setPrintedFormActive(false);
    }
  }

  return (
    <>
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
          />))}
      </li>
    </>
  )
}

export default ItemsList