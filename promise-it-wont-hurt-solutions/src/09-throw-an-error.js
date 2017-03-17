function parsePromised (json) {
  return new Promise(function (fulfill, reject) {
    fulfill(JSON.parse(e))
    catch(e) {
    reject(e);
    });
  };
};

parsePromised(process.argv[2])
.then(null, console.log)
