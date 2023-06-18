import moment from 'moment';

export const formatDate = (date?: Date | string) => {
  if (date) {
    moment.locale('en-gb');
    const dateFromNow = moment(date).fromNow();
    return dateFromNow;
  } else {
    return '';
  }
};
