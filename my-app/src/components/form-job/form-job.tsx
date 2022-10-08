import { nanoid } from 'nanoid';
import { ITEM_DEFAULT } from '../../types/item';
import { Job } from '../../types/job';
import JobItemList from '../job-item-list/job-item-list';

type FormJobProps = {
  job: Job;
  setJob: React.Dispatch<React.SetStateAction<Job>>;
}

const FormJob: React.FunctionComponent<FormJobProps> = ({ job, setJob }) => {

  const { isExtraMargin } = job;

  const onAddButtonClick = () => {
    setJob((prevJob: Job) => {
      return {
        isExtraMargin: prevJob.isExtraMargin,
        items: [...prevJob.items, { ...ITEM_DEFAULT, id: nanoid() }]
      }
    })
  };

  const onClearButtonClick = () => {
    setJob((prevJob: Job) => {
      return {
        isExtraMargin: prevJob.isExtraMargin,
        items: []
      }
    })
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
          setJob((prevJob: Job) => {
            return {
              isExtraMargin: checked,
              items: prevJob.items
            }
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