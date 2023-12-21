export const BASEURL = 'http://208.87.132.237:3001/api/v1';
export const GETBASEURL = 'http://208.87.132.237:3001';

export const getFormattedDate = (time: any, formatType: any) => {
  var date = new Date(time * 1000); // Convert to milliseconds

  if (formatType === 'time') {
    // Format time as "HH:mm"
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var formattedTime = `${hours < 10 ? '0' : ''}${
      isNaN(hours) ? '00' : hours
    }:${minutes < 10 ? '0' : ''}${isNaN(minutes) ? '00' : minutes}`;
    return formattedTime;
  } else if (formatType === 'date') {
    // Format date as "MMM DD, YYYY"
    var monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var month = monthNames[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    var formattedDate = `${month ? month : ''} ${isNaN(day) ? '00' : day}, ${
      isNaN(year) ? '0000' : year
    }`;
    return formattedDate;
  } else {
    // Handle invalid formatType
    return 'Invalid formatType';
  }
};

var currentDate = new Date();
export const TIMESTAMPINSECONDS = Math.floor(currentDate.getTime() / 1000);

export function isEmptyObj(obj: object) {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj)?.length === 0 && obj.constructor === Object;
}