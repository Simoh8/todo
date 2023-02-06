function asyncTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = 199
        if (result > 0.5) {
          resolve(result);
        } else {
          reject(Error("Random number was less than 0.5"));
        }
      }, 1000);
    });
  }
  
  asyncTask()
    .then(result => {
      console.log(`Random number: ${result}`);
    })
    .catch(error => {
      console.error(error);
    });
  