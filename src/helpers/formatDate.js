import { format } from 'date-fns';

export const formatDate = date =>
  format(new Date(date), 'Pp', { addSuffix: true });
