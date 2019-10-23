# Find-a-Friend

Friend Finder is an online friend matcher app. Answer some basic questions and we'll find your best friend match. No more trying to meet new people IRL! 

## Under the Hood
This is a (near) full-stack app. The behind the scenes magic is done by node.js for the back-end & server side code handling. Express is doing the heavy lifting between the front and back end. We are collecting information from the user and passing it to the back end to be processed. After processing, the result is served back to the client and they receive their friend match. Both the front and back end are coded with javaScript. Also, a little sprinkling of bootstrap, HTML & CSS for presentation/display purposes. 

There is no real database used in this project. All the data lives in an object in the back end so it's not freely accessible by the client. (Although, we expose the data via a link so we can show their input was recorded and now a part of the app). Next project we'll incorporate a real database as well to go true full-stack!

[Live deployment on Heroku](https://immense-temple-85700.herokuapp.com)


