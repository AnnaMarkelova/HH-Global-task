import { Item } from '../../types/item';
import { Job } from '../../types/job';
import JobItem from '../job-item/job-item';

type JobItemListProps = {
  job: Job;
  setJob: (newValue: Job) => void;
}

const JobItemList: React.FunctionComponent<JobItemListProps> = ({ job, setJob }) => {

  const { isExtraMargin, items } = job;

  const onDeleteButtonClick = (deletedItem: Item) => {
    setJob({
      isExtraMargin: isExtraMargin,
      items: items.filter((item) => item.id !== deletedItem.id)
    });
  };

  const onEditItem = (editedItem: Item) => {
    const editedItemsList = items.map((item) => {
      if (item.id === editedItem.id) {
        return editedItem;
      }
      return item;
    })
    setJob({
      isExtraMargin: isExtraMargin,
      items: editedItemsList
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
            item={item}
            onDeleteButtonClick={onDeleteButtonClick}
            onEditItem={onEditItem}
          />))}
      </li>
    </>
  )
}

export default JobItemList