// 1 tack
// const delay = ms => {
//    return new Promise(res=>{
//        setTimeout(()=>{
//            res(ms);
//        },ms)
//    });
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms

// 2 tasc
// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
//   варіант
//   const toggleUserState = (allUsers, userName) => {
//   return Promise.resolve(allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   ))
//   };

// 2 варіант
// const toggleUserState = (allUsers, userName) => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
  
//     return Promise.resolve(updatedUsers);
//   };

// 3 варіант
// const toggleUserState = async(allUsers, userName) => {
//     const updatedUsers = allUsers.map(user =>
//       user.name === userName ? { ...user, active: !user.active } : user,
//     );
  
//     return (updatedUsers);
//   };

  
//   const logger = updatedUsers => console.table(updatedUsers);
  
//   /*
//    * Сейчас работает так
//    */
//   toggleUserState(users, 'Mango', logger);
//   toggleUserState(users, 'Lux', logger);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);
  

// 3 tack
// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };
  
//   const makeTransaction = (transaction) => {
//       return new Promise((res, rej)=>{
//         const delay = randomIntegerFromInterval(200, 500);
//         setTimeout(() => {
//           const canProcess = Math.random() > 0.3;
      
//           if (canProcess) {
//             res({id:transaction.id, time:delay});
//           } else {
//             rej(transaction.id);
//           }
//         }, delay);

//         })
//       };
  
//   const logSuccess = (transaction) => {
//     console.log(`Transaction ${transaction.id} processed in ${transaction.time}ms`);
//   };
  
//   const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
//   };
  
// /*
//    * Работает так
//    */
//   makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
//   makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
//   makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
//   makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
//   /*
//    * Должно работать так
//    */
//   makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);
  
//   makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);
  