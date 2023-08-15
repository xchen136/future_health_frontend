# Help Desk

This app allows user to submit a support ticket regarding the issue they are experiencing. There are two pages on the app, `Help Desk` and `Support Tickets`. On the `Help Desk` page, users can submit a ticket with their name, email, and a description of the concern. On the `Support Tickets` page, support staff can see a list of support tickets with options to view details of each, update ticket status, and respond to each ticket. There are 3 ticket statuses: "new", "in progress", and "resolved". The app will not send email, instead it will simply display the ticket detail and response onto the developer console.

The frontend of the app is written in React.js and deployed to Heroku for live demo.
Backend of the app is build using Ruby on Rails with a repository hosted at https://github.com/xchen136/future_health_api.

**Live Demo:** https://future-health-frontend-81267e8cf9e0.herokuapp.com

<img width="722" alt="image" src="https://github.com/xchen136/future_health_frontend/assets/31082478/213f068f-ebea-4910-9bbc-5a335d68e18e">

<img width="2114" alt="image" src="https://github.com/xchen136/future_health_frontend/assets/31082478/f399609a-4e3f-4e09-ad7f-f38701ceb549">


## Installations
**My Operating System:** MacOS in Ventura 13.1 (22C65)

Make sure these are installed:
1. react: `18.2.0` ([installation](https://react.dev/learn/installation))
2. node.js `v16.15.1` ([installation](https://nodejs.org/en))
3. npm `8.11.0` ([installation](https://docs.npmjs.com/about-npm))

## Running Locally

Make sure axio requests are pointed to localhost (ex: http://localhost:3000).

### `npm install`
Install all the necessary packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) or other port it's running on to view it in your browser.

