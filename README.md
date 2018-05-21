# HOMEWORK: Practicing Express routes

![bird](./assets/reps.jpg)

It's time to start writing some Express code! We'll write a basic web server that sends out data about some birds.

1. Create an Express server in the `server.js` file
1. Create a route handler for `GET /birds.json` that responds with a JSON representation of all birds in our application. A few hints here:
   - The information about birds exists in the file `db/birds.js` which you can access within your `server.js` file with require
   - Use [`response.json()`](https://expressjs.com/en/4x/api.html#res.json) to send a JSON formatted response
1. Create a route handler for `GET /birds/:id.json`, where `:id` can be any number like `/birds/1.json`
   - This will require you to learn about [Express route parameters](https://expressjs.com/en/guide/routing.html#route-parameters)

### Bonus:
- Create a `GET /` route that responds with HTML listing out the name for each bird.
- Create a `GET /cities/:name.json` route that responds with the birds in that city, e.g. `/cities/NYC.json`

## 🚀 Completion looks like:

- Your express app includes a `server.js`, with accurate routes
- Your commit history has more than one commit


## 🚀 Your homework submission should include:

- A pull request created on _this repo_ (after you fork).

## This homework is due 🚨 11PM ON MONDAY NIGHT 🚨

