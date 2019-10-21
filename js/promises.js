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


function getLastPush(name){
    return new Promise(function (resolve) {
        fetch(`https://api.github.com/users/${name}/events/public`, {headers: {'Authorization': `token ${gitHubKey}` }})
            .then((res) =>  res.json())
            .then((data) =>  filterData(data))
            .then((data) =>  (data[0].created_at))
            .then((data) => resolve(new Date(data)))
    });
}

const filterData = (data) => data.filter((d) => d.type === "PushEvent");
getLastPush('isaiahbrashears').then((message) => console.log(message));

