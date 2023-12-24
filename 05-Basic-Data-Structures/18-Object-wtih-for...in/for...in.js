// bazen object içerisinde ki tüm anahtarları yinelememiz gerekebilir. Bunu yapmak için for...in loop kullanılabilir.

const refrigenerator = {
    'milk': 1,
    'eggs': 12,
}
for (const food in refrigenerator) {
    console.log(food, refrigenerator[food]);
}

// refrigenerator içerindeki verileri for loop in ile food içerisine döndürdük.

// !!!! NOT : Object'ler, diziler gibi depolanan anahtarların bir index numarasını tutmazlar.


const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    // Only change code below this line
    let result = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        result++;
      }
    }
    return result;
    // Only change code above this line
  }
  
  console.log(countOnline(users));

