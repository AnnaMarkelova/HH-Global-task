import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { ItemType } from '../../types/item-type';
import { UserSetting } from '../../types/user-setting-type';
import FormData from '../form-data/form-data';
import ListOfItems from '../list-of-items/list-of-items';

const itemTemplate: ItemType = {
  id: '',
  name: '',
  cost: 0,
  isExempt: false,
}

const App: React.FunctionComponent = () => {

  const [printedItems, setPrintedItems] = useState('');

  const [items, setItems] = useState<ItemType[]>([]);

  const [userSetting, setUserSetting] = useState<UserSetting>({
    isExtraMargin: false,
    extraMargin: 5,
    margin: 11,
    saleTax: 7,
    currency: 'USD'
  });

  const onFormDataChange = (formData: UserSetting) => setUserSetting(formData);
  const onAddButtonClick = () => setItems([...items, { ...itemTemplate, id: nanoid() }]);
  const onClearButtonClick = () => {
    setPrintedItems('');
    setItems([]);
  };

  const onDeleteButtonClick = (deletedItem: ItemType) => setItems(items.filter((item) => item.id !== deletedItem.id));
  const onEditItem = (item: ItemType, editedItem: ItemType) => {
    let objIndex = items.indexOf(item);
    setItems([...items.slice(0, objIndex), editedItem, ...items.slice(objIndex + 1)]);
  };

  const onPrintButtonClick = () => printItems();

  const printItems =() => {
    let printedText = '';
    let totalCost = 0;
    items.forEach((item) => {
      let costOfItem = calculateCostOfItem(item.cost, item.isExempt);
      let margin = calculateMargin(item.cost);
      printedText += `${item.name}: ${userSetting.currency} ${costOfItem}`;
      totalCost += calculateTotalCost(costOfItem, margin)
    });
    printedText += `total: ${userSetting.currency} ${Number(totalCost).toFixed(2)}`
    setPrintedItems(printedText);
  };

  const calculateTotalCost = (costOfItem: number, margin: number) => {
    return 2 * Number(((costOfItem + margin) / 2).toFixed(2));
  };
  const calculateCostOfItem = (cost: number, IsExempt: boolean):number => {
      let tax = IsExempt ? 0 : userSetting.saleTax;
      return Number((cost + cost * tax / 100).toFixed(2));
  };

  const calculateMargin = (cost: number):number => {
      let extraMargin = userSetting.isExtraMargin ? userSetting.extraMargin : 0;
      return cost * (userSetting.margin + extraMargin) / 100;
  };


  return (
    <>
      <header>
      </header>
      <main>
        <h1>InnerWorkings</h1>
        <FormData
          userSetting={userSetting}
          onFormDataChange={onFormDataChange}
          onAddButtonClick={onAddButtonClick}
          onClearButtonClick={onClearButtonClick}
          onPrintButtonClick={onPrintButtonClick}
        />
        <ListOfItems
          items={items}
          onDeleteButtonClick={onDeleteButtonClick}
          onEditItem={onEditItem}
        />
        <p>
          {printedItems}
        </p>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
