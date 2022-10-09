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
    <div className='form-job'>
      <div className='form-job__panel'>
        <button
          className='form-job__panel-button button__style'
          onClick={() => onAddButtonClick()}
        >
          Add
        </button>
        <button
          className='form-job__panel-button button__style'
          onClick={() => onClearButtonClick()}
        >
          Clear
        </button>
        <label htmlFor="IsExtraMargin">Extra margin</label>
        <input
          type='checkbox'
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
      </div>
      <JobItemList
        job={job}
        setJob={setJob}
      />
    </div>
  )
}

export default FormJob