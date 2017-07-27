//dependesies 
const https = require('https');
const username = "peterhaviar";



const getProfile = (username) => {
    let body = "";
    let profile;
   const request =  https.get(`https://teamtreehouse.com/${username}.json`, res => {
        res.on('data', data => { 
            body += data.toString();
        });

        res.on('end', data => {
            try {    profile = JSON.parse(body);
            
            console.log(`user name ${username} has badges :  ${profile.badges.length} and following points ${profile.points.JavaScript}`);}
            catch (e) {
                console.error(e.message)
            }
         
        });
    });
    request.on('error', (error) => {
        console.error(`issue with connection to API details: ${error}`)
    });
};


const users = process.argv.slice(2);
//  getProfile(username);
//  console.dir(process.argv);
users.forEach(function(element) {
   getProfile(element);
 });

 


// const pipe = new Promise ((resolve, reject) => { 
//     let body = "";
//     let profile;
//     const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        
//         response.on('data', data => {
//             body += data.toString();
//         });

//         response.on('end', data => {
          
//             profile = JSON.parse(body);
//             resolve(profile);
          
//         } );
//     });
   
// });


// const request = https.get(`https://teamtreehouse.com/${username}?format=json`, response => {
//         let body = "";
//         response.on('data', data => {
//             body += data.toString();

//         });
//     })



// const pipe = () => {
//  const request = https.get('https://teamtreehouse.com/peterhaviar.json');
//  return Promise.resolve(request);

// }


// pipe.then((data) => { 
  
//     // console.log(data);
//     console.log(`from promise ${data.badges.length} with user name ${username} with JS points ${data.points.JavaScript}`);
    
// })

// const request = https.get('https://teamtreehouse.com/peterhaviar.json');