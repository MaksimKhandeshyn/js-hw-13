const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        return resolve(transaction.id, delay);
      } else {
        return reject(transaction.id);
      }
    }, delay);
  });
  return promise;
};
const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};
const logError = (id) => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
