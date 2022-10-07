import { UseItemsContext } from '../../contexts/items-context';
import { UsePrintContext } from '../../contexts/print-context';
import { UseUserSettingContext } from '../../contexts/user-setting-context';
import { printItems } from '../../utils/print-utils';

const FormPrint: React.FunctionComponent = () => {

  const { items } = UseItemsContext();
  const { userSetting } = UseUserSettingContext();
  const { printedItems, setPrintedItems, printedFormActive, setPrintedFormActive } = UsePrintContext();

  const onPrintButtonClick = () => {
    const printedItems = printItems(items, userSetting)
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