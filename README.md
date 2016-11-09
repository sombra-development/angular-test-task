# FrontEnd developer Test

## Required Technologies
 - [AngularJS](https://angularjs.org/)
 - [Twitter Bootstrap](http://getbootstrap.com/)
 - [Underscore.js](http://underscorejs.org/)
 - [Karma](https://karma-runner.github.io/)
 - [Jasmine](https://jasmine.github.io/)

## Description

You are required to create a music library web application, which is a Single Page Application. 

Your task is creating a simple music library that create, retrieve, edit and delete music albums. There are some albums already registered in the database of your services. You are not required to make a fancy page but your music library project must be shown in a reasonable way in terms of User Experience.

The design isn't going to be evaluated but the User Experience is, so do your best and try to do the best UI you can.

**How to start?**

Fork the project [Angular JS Exam project](https://github.com/thiagoh/angular-js-exam-project). This project must be the basis of yours

## Requirements

- Your project must be a for of [Angular JS Exam project](https://github.com/thiagoh/angular-js-exam-project)
- You will notice that none of the albums has a logo set. Your CRUD must allow the user to set a logo URL for each album, and this logo should be visible along with the album information (on the screen). Our services are ready to receive a parameter `logoUrl` so all you have to do is using the current REST services to update the albums.
- The page must be responsive
- All the static data such as JS, CSS and Image Files must be inside `/html` directory. Each one inside your own directory.
- **You're not allowed to use jQuery (!important)** (Because of the Bootstrap dependency on jQuery you can have jQuery on your codebase but despite of Bootstrap related scripts you must not use jQuery)
- You cannot create or edit the existing REST Services
- You must create tests with Jasmine + Karma
- Your code must be pushed to a repository in your Github account and the url must be provided to us so we can clone and test your project
- A basic `Gruntfile.js` is already provided and we are going to test your project by running `grunt start`. You can (and have to) edit this file but be careful to not break it and avoid us to test your project with that command.
- Configure your `Gruntfile.js` so we can run the tests of your project by running `grunt test`

## How to run

```
npm install
grunt start
```
## Instructions to submit your work

- Commit and push all you work to your repository
- Download the ZIP of your project from your Git repository (download green button of github project page)
- Send to my e-mail your ZIP file and your project's github link
- Send details or explanations about your project in a INSTRUCTIONS.md file that is inside the root directory of your project

## REST Services

There are a few services that you're supposed to use in order to create your application.

### Add a new album

- Url: `/albums/add`
- HTTP Method: `POST`
- Request data type: `application/json`
- Params: 
```json
{
  "title": "Empire Burlesque",
  "artist": "Bob Dylan",
  "country": "USA",
  "company": "Columbia",
  "price": 10.9,
  "year": 1985,
}
```

### Update an existing album

- Url: `/albums/update/:id`
- HTTP Method: `POST`
- Request data type: `application/json`
- Params: 
```json
{
  "title": "Empire Burlesque",
  "artist": "Bob Dylan",
  "country": "USA",
  "company": "Columbia",
  "price": 10.9,
  "year": 1985,
}
```

### Delete an existing album

- Url: `/albums/delete/:id`
- HTTP Method: `DELETE`

### Count how many albums are registered

- Url: `/albums/count`
- HTTP Method: `GET`

### Returns all albums

- Url: `/albums/all`
- HTTP Method: `GET`
