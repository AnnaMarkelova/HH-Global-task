import { useEffect, useState } from 'react';
import { Job } from '../../types/job';
import { Settings } from '../../types/settings';
import { printItems } from '../../utils/print';

type FormPrintProps = {
  job: Job;
  settings: Settings;
}

const FormPrint: React.FunctionComponent<FormPrintProps> = ({ job, settings }) => {

  const [printedFormActive, setPrintedFormActive] = useState(false);
  const [printedItems, setPrintedItems] = useState('');

  useEffect(() => {
    setPrintedFormActive(false);
    if (!job.items.length) {
      setPrintedItems('');
    }
  }, [job, settings]);

  const onPrintButtonClick = () => {
    const printedItems = printItems(job, settings)
    setPrintedItems(printedItems);
    setPrintedFormActive(true);
  }

  const inactiveClass = printedFormActive ? '' : 'form-print__printed-items_inactive';

  return (
    <div className='form-print'>
      <button
      className='form-print__button button__style'
        onClick={() => onPrintButtonClick()}
      >
        Print
      </button>
      <p className={`form-print__printed-items ${inactiveClass}`}>
        {printedItems}
      </p>
    </div>

  )
}

export default FormPrint