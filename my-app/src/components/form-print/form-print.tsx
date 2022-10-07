import { ItemType } from '../../types/item';
import { Settings } from '../../types/settings';
import { printItems } from '../../utils/print';

type FormPrintProps = {
  items: ItemType[];
  settings: Settings;
  printedItems: string;
  setPrintedItems: (newValue: string) => void;
  printedFormActive: boolean;
  setPrintedFormActive: (newValue: boolean) => void;
}

const FormPrint: React.FunctionComponent<FormPrintProps> = ({
    items,
    settings,
    printedItems,
    setPrintedItems,
    printedFormActive,
    setPrintedFormActive 
  }) => {

  const onPrintButtonClick = () => {
    const printedItems = printItems(items, settings)
    setPrintedItems(printedItems);
    setPrintedFormActive(true);
  }

  return (
    <>
      <button
        onClick={() => onPrintButtonClick()}
      >
        Print
      </button>
      <p>
        'Is active': {printedFormActive ? 'true' : 'false'}
      </p>
      <p>
        {printedItems}
      </p>
    </>

  )
}

export default FormPrint