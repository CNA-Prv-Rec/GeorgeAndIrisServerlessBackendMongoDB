# Project Overview

This is an exported project from Realm (MongoDB's microservices development environment). I was experimenting with Realm at the time, created some microservices in there in node.js. My node.js code is buried deep within the project, the rest is MongoDB's output.

Fetch data from mongodb and return it to the client. Write data back to mongodb. About as exciting as it gets.

I abandoned MongoDB because my google authentication project and the token validation inside MongoDB didn't work nicely together, I think it wanted me to pass something other than a pre-authenticated user token into the api management system as it kept telling me I hadn't signed in as a user, which of course I wouldn't have done because I did it in React directly to my GCP project to get the bearer token. Ultimately it just seemed that there was a mismatch of technologies that made this not work out. I think if I did 
