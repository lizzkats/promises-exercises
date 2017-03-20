const promise = new Promise(function (fulfill, reject) {
  reject(new Error('SECRET VALUE'));
});

Promise.resolve('yoooooo');

promise.catch(function (err) {
  console.error('THERE IS AN ERROR!!!');
  console.error(err.message);
});
