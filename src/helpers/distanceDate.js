import { formatDistanceToNow } from 'date-fns';

const distanceDate = date =>
  formatDistanceToNow(new Date(date), { addSuffix: true });
export { distanceDate };
