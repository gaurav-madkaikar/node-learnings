// Synchronous v/s asynchronous code
// Synchronous code blocks the execution until a task is completed
// Asynchronous code allows the execution to continue while waiting for a task to complete

// setTimeout is an example of asynchronous code - code is executed based on the timeout and not the order of declaration
// function task1(cf){
//     setTimeout(() => {
//         console.log('Task 1 in progress');
//         cf(1);
//     }, 2000);
// }

// function task2(cf){
//     setTimeout(() => {
//         console.log('Task 2 in progress');
//         cf(2);
//     }, 1000);
//     return cf;
// }

// // Callback - function that is passed as an argument to another function and is executed after the completion of that function
// // can be easily represented as arrow functions
// function fetchData(callbackFn) {
//     setTimeout(() => {
//         const data = 'Fetched Data';
//         callbackFn(data);
//     }, 1100);
// }

// fetchData((data) => {
//     console.log("Callback param: ", data);
// });

// // Calback hell - when callbacks are nested inside each other, making the code hard to read and maintain
// // ensures synchronous execution of tasks
// task1((data) =>
//     task2(
//         (data) => console.log(`Task ${data} completed`)
//     )
// );

// // Asynchronous code example

// function printMsg(arg){
//     console.log(arg);
// }

// const secondMsg = () => {
//     printMsg('World!');
// };

// const firstMsg = (callback) => {
//     setTimeout(() => {
//         printMsg('Hello ');
//         callback();
//     }, 1000);
// }

// firstMsg(secondMsg);

// Promises - a way to handle asynchronous code in a more readable way
// A promise is an object(assurance) that represents the eventual completion/failure of an asynchronous operation
// Program executes without waiting for the promise to be resolved
// A promise can be in one of three states: pending, fulfilled, or rejected

const requestHandler = new Promise((resolve, reject) => {
    // Simulate network call using setTimeout
    setTimeout(() => {
        const success = true;
        try{
            if (success) {
                resolve('Promise resolved successfully!');
            } else {
                reject('Promise rejected!');
            }
        } catch(error){
            reject('Error occurred: ' + error.message);
        }
    }, 1500);
});

requestHandler
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// Use async/Await - syntactic sugar over promises
// Makes asynchronous code look and behave like synchronous code
async function fetchDataAsync() {
    try {
        const result = await requestHandler;
        console.log('Async/Await Result: ', result);
    } catch (error) {
        console.error('Async/Await Error: ', error);
    }
}

fetchDataAsync();