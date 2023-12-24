let nestedObject = {
    id: 2888999202,
    date: "December 31, 2016",
    data: {
        totaluser: 99,
        online: 21,
        onlineStatus: {
            active: 67,
            away: 13,
            busy: 8,
        }
    }
};

nestedObject.data.onlineStatus.busy = 15;
console.log(nestedObject);


let userActivity = {
    id: 23894201352,
    date: "January 1, 2017",
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // change code below this line
  userActivity.data.online = 45;
  // change code above this line
  
  console.log(userActivity);