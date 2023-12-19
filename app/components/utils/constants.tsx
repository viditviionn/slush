export const BASEURL = 'http://208.87.132.237:3001/api/v1';
export const GETBASEURL = 'http://208.87.132.237:3001';

export const getFormattedDate = (time: any, formatType: any) => {
  var date = new Date(time * 1000); // Convert to milliseconds

  if (formatType === 'time') {
    // Format time as "HH:mm"
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var formattedTime = `${hours < 10 ? '0' : ''}${hours}:${
      minutes < 10 ? '0' : ''
    }${minutes}`;
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
    var formattedDate = `${month} ${day}, ${year}`;
    return formattedDate;
  } else {
    // Handle invalid formatType
    return 'Invalid formatType';
  }
};

var currentDate = new Date();
export const TIMESTAMPINSECONDS = Math.floor(currentDate.getTime() / 1000);
