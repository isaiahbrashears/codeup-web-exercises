const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let usersWithAtLeastThreeLanguages = users.filter( (user) => {
   return user.languages.length >= 3;
});

console.log(usersWithAtLeastThreeLanguages);

let userEmails = users.map( (user) => {
   return user.email;
});

console.log(userEmails);

let totalYearsExperience = users.reduce((sum, user) => {
    return  sum + user.yearsOfExperience;
},0);

console.log(totalYearsExperience);

let averageYearsOfExperience = totalYearsExperience/users.length;

console.log(averageYearsOfExperience);

let longestEmail = users.reduce((email, user) => {
    return email.length > user.email.length ? email : user.email;
}, '');

console.log(longestEmail);

let instructors = users.reduce((str, user, i) => {
   if (i < users.length - 1){
    return  str + ` ${user.name},`

   } else {
      return str += ` and ${user.name}.`
   }

}, `Your instructors are: `);

console.log(instructors);

const uniqueLangs = users.reduce((listOfLangs, user) => {
        for (const lang of user.languages){
            if (listOfLangs.indexOf(lang) === -1){
                listOfLangs.push(lang);
            }
        }
        return listOfLangs;
},[]);

console.log(uniqueLangs);

