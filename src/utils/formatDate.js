import { parseJSON, format } from 'date-fns';

export const updateDate = date => {
  const parseDate = parseJSON(Date.parse(date));
  return format(Date.parse(parseDate), 'd.M.yy');
};
