"use strict";


const wait = (num) => {
    let seconds = num/ 1000;
    return new Promise(function (res, rej) {
        setTimeout(function () {
            if (num === 1000){
                res(`You'll see this after ${seconds} second`)
            } else if(num > 1000){
                res(`You'll see this after ${seconds} seconds`)
            }else{
                rej('bad number')
            }
        },num)
    })
};

wait(1000).then((message) => console.log(message))
    .catch((err) => console.log(err));
wait(3000).then((message) => console.log(message))
    .catch((err) => console.log(err));


// fetch('https://swapi.co/api/people/1/').then(function (res) {
//     return res.json();
// }).then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log('error');
// });

function getLastPush(name){

let username = name;

return new Promise(function (resolve) {
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${gitHubKey}` }})
        .then(function (res) {
            return res.json();
        }).then(function (data) {
            resolve (data[0].created_at);
    }).catch(function (err) {
        console.log('error')
    });
})
}

getLastPush('isaiahbrashears').then((message) => console.log(message));