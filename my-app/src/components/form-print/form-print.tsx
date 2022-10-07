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