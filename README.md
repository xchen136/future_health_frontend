# Help Desk

This app allows user to submit a support ticket regarding the issue they are experiencing. There are two pages on the app, `Help Desk` and `Support Tickets`. On the `Help Desk` page, users can submit a ticket with their name, email, and a description of the concern. On the `Support Tickets` page, support staff can see a list of support tickets with options to view details, update ticket status, and respond to each ticket. There are 3 ticket statuses: "new", "in progress", and "resolved". This app will not send email, instead it will simply display the ticket detail and response onto the developer console.

Frontend is written in React.js, while Backend ([repository](https://github.com/xchen136/future_health_api)) is built using Ruby on Rails.

**Live Demo:** https://future-health-frontend-81267e8cf9e0.herokuapp.com

<img width="560" alt="image" src="https://github.com/xchen136/future_health_frontend/assets/31082478/735159e9-8229-46de-a0c0-3781b52ab4b2">

<img width="1202" alt="image" src="https://github.com/xchen136/future_health_frontend/assets/31082478/f743b613-06e2-4293-9692-ae2266ce760b">

<br>

## Tech Stack
**My Operating System:** MacOS in Ventura 13.1 (22C65)

Make sure these are installed:
1. react: `18.2.0` ([installation](https://react.dev/learn/installation))
2. node.js `v16.15.1` ([installation](https://nodejs.org/en))
3. npm `8.11.0` ([installation](https://docs.npmjs.com/about-npm))

<br>

**Styling**
1. TailwindCSS: `3.3.3` ([source](https://tailwindcss.com/))
2. Material UI: `5.14.4` ([source](https://mui.com/))

<br>

## Running Locally

Make sure axio requests are pointed to localhost (ex: http://localhost:3000).

### `npm install`
Install all the necessary packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) or other port it's running on to view it in your browser.

<br>

## Heroku Setup
**Resource**: [Deploy to Heroku](https://dev.to/lizlaffitte/series/10869)

1. `package-lock.json` - delete the file
2. `static.json` - create a file called static.json at the root folder with content: `{ *"root"*: "build/", *"routes"*: { *"/**"*: "index.html" } }`
3. Create a heroku app using the following commands `heroku create future-health-frontend --stack heroku-20 --buildpack https://github.com/mars/create-react-app-buildpack.git` (there are issues with heroku-22 and we need buildpack, [source](https://blog.heroku.com/deploying-react-with-zero-configuration))
4. Deploy: be sure to connect to github repository and enable automatic deploys.

