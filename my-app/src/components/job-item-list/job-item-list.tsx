import { Item } from '../../types/item';
import { Job } from '../../types/job';
import JobItem from '../job-item/job-item';

type JobItemListProps = {
  job: Job;
  setJob: React.Dispatch<React.SetStateAction<Job>>;
}

const JobItemList: React.FunctionComponent<JobItemListProps> = ({ job, setJob }) => {

  const { items } = job;

  const onDeleteButtonClick = (deletedItem: Item) => {
    setJob((prevJob: Job) => {
      return {
        isExtraMargin: prevJob.isExtraMargin,
        items: prevJob.items.filter((item) => item.id !== deletedItem.id)
      }
    });
  };

  const onEditItem = (editedItem: Item) => {

    const getNewItemList = (currentItems: Item[]) => {
      return currentItems.map((item) => {
        if (item.id === editedItem.id) {
          return editedItem;
        }
        return item;
      });
    };

    setJob((prevJob: Job) => {
      return {
        isExtraMargin: prevJob.isExtraMargin,
        items: getNewItemList(prevJob.items) 
      }
    });
  };

  return (
    <>
      <div>
        <p>Item</p>
        <p>Cost</p>
        <p>Exempt</p>
      </div>
      <li>
        {items.map((item) => (
          <JobItem
            key={item.id}
            item={item}
            onDeleteButtonClick={onDeleteButtonClick}
            onEditItem={onEditItem}
          />))}
      </li>
    </>
  )
}

export default JobItemList