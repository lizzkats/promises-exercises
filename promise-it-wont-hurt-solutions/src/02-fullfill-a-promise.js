const promise = new Promise(function (fulfill, reject) {
  return setTimeout(function(){
    fulfill('FULFILLED!')
  }, 300)
}).then(console.log)
