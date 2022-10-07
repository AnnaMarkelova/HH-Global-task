import React, { useState } from 'react';
import { ItemType } from '../../types/item-type';
import { UserSetting, USER_SETTING_DEFAULT, } from '../../types/user-setting-type';
import FormData from '../form-data/form-data';
import ItemsList from '../list-of-items/list-of-items';
import { ItemsContextProvider } from '../../contexts/items-context';
import { UserSettingContextProvider } from '../../contexts/user-setting-context';
import { PrintContextProvider } from '../../contexts/print-context';
import FormPrint from '../form-print/form-print';

const App: React.FunctionComponent = () => {

  const [printedItems, setPrintedItems] = useState('');
  const [printedFormActive, setPrintedFormActive] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);
  const [userSetting, setUserSetting] = useState<UserSetting>(USER_SETTING_DEFAULT);

  const itemsStore = {
    items,
    setItems
  }

  const userSettingStore = {
    userSetting,
    setUserSetting,
  }

  const printedItemsStore = {
    printedItems,
    setPrintedItems,
    printedFormActive,
    setPrintedFormActive
  }

  return (
    <>
      <header>
      </header>
      <main>
        <h1>InnerWorkings</h1>
        <ItemsContextProvider value={itemsStore}>
          <UserSettingContextProvider value={userSettingStore}>
            <PrintContextProvider value={printedItemsStore}>
              <FormData />
              <ItemsList />
              <FormPrint />
            </PrintContextProvider>
          </UserSettingContextProvider>
        </ItemsContextProvider>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;

