import React, { useState } from 'react';
import { ItemType } from '../../types/item';
import { Settings, SETTINGS_DEFAULT, } from '../../types/settings';
import FormData from '../form-data/form-data';
import ItemList from '../item-list/item-list';
import FormPrint from '../form-print/form-print';

const App: React.FunctionComponent = () => {

  const [printedItems, setPrintedItems] = useState('');
  const [printedFormActive, setPrintedFormActive] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);
  const [settings, setSettings] = useState<Settings>(SETTINGS_DEFAULT);
  const [extraMarginActive, setExtraMarginActive] = useState(false);

  return (
    <>
      <header>
      </header>
      <main>
        <h1>InnerWorkings</h1>
        <FormData
          settings={settings}
          setSetting={setSettings}
          printedFormActive={printedFormActive}
          setPrintedFormActive={setPrintedFormActive}
        />
        <ItemList
          items={items}
          setItems={setItems}
          setPrintedItems={setPrintedItems}
          printedFormActive={printedFormActive}
          setPrintedFormActive={setPrintedFormActive}
          extraMarginActive={extraMarginActive}
          setExtraMarginActive={setExtraMarginActive}
        />
        <FormPrint
          items={items}
          settings={settings}
          printedItems={printedItems}
          setPrintedItems={setPrintedItems}
          printedFormActive={printedFormActive}
          setPrintedFormActive={setPrintedFormActive}
        />
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;

