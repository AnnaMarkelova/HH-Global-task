import { ItemType } from "../../types/item-type";
import Item from "../item/item";

type ListOfItemsProps = {
  items: ItemType[];
  onDeleteButtonClick: (deletedItem: ItemType)=> void;
  onEditItem: (item:ItemType, editedItem: ItemType)=> void;
}

const ListOfItems: React.FunctionComponent<ListOfItemsProps> = ({ items, onDeleteButtonClick, onEditItem }) => {

  return (
    <>
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

export default ListOfItems