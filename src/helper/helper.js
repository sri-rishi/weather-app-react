const degreeToDirection = (degree)=> {
    degree = (degree % 360 + 360) % 360;

    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const degreeRanges = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
  
    const index = degreeRanges.findIndex((range) => degree < range);
  
    return directions[index !== -1 ? index : 0];
}

const getDisplayedDay = (date) => {
    const dateObj = new Date(date);
    const today = new Date();
    const isToday = dateObj.getDate() === today.getDate();
  
    const displayDay = isToday ? 'Today' : dateObj.toLocaleDateString('en-US', { weekday: 'long' });
    return displayDay;
}

const getDate = (date) => {
    let newDate = date.split(" ");
    let newDateArr = newDate[0].split("-"); 
    const shownDate = newDateArr[2] + "/" +newDateArr[1];

    return shownDate;
}

export {
    degreeToDirection,
    getDisplayedDay,
    getDate
}