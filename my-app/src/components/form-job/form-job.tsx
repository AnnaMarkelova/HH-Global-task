import { nanoid } from 'nanoid';
import { ITEM_DEFAULT } from '../../types/item';
import { Job } from '../../types/job';
import JobItemList from '../job-item-list/job-item-list';

type FormJobProps = {
  job: Job;
  setJob: (newValue: Job) => void;
}

const FormJob: React.FunctionComponent<FormJobProps> = ({ job, setJob }) => {

  const { isExtraMargin, items } = job;

  const onAddButtonClick = () => {
    setJob({
      isExtraMargin: isExtraMargin,
      items: [...items, { ...ITEM_DEFAULT, id: nanoid() }]
    });
  };

  const onClearButtonClick = () => {
    setJob({
      isExtraMargin: isExtraMargin,
      items: []
    });
  };

  return (
    <>
      <label htmlFor="IsExtraMargin">Extra margin</label>
      <input
        type={'checkbox'}
        id="IsExtraMargin"
        checked={isExtraMargin}
        onChange={(evt) => {
          const { checked } = evt.target;
          setJob({
            isExtraMargin: checked,
            items
          });
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
      <JobItemList
        job={job}
        setJob={setJob}
      />
    </>
  )
}

export default FormJob