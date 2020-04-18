const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('hey!');
    } else {
      reject('whoops');
    }
  });
};

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.log(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('true');
      }, 2000);
    } else {
      const error = new Error('whoops');
      reject(error);
    }
  });
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err));

Promise.all([
  somethingWillHappen(),
  somethingWillHappen2()
])
.then(response => console.log(response));
