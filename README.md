# GitHub Repository App

This is a simple web application that:
- reads a collection of data from GitHub API (https://api.github.com/repos/Iva93k/employee-timesheet - information about one repository), 
- displays some of that data on the front-end application (in HTML form),
- allows you to make some changes
- saves changes into JSON
- writing JSON in a file on disk.

Front-end application is developed in JavaScript language (Vue.js framework), and back-end side is developed in C# language (ASP.NET Core Web API) - you can find code for this part on this link: https://github.com/Iva93k/GitHubReposWebApplication.

## Getting started

To install this application, navigate to the desired root and run the following commands:

``` bash
git clone https://github.com/Iva93k/GitHubReposWebApplication.git

git clone https://github.com/Iva93k/GitHubReposVue.git

```
This will download a copy of the project.

## Start the app

To install all of the dependencies and start the app, run:

``` bash

cd GitHubReposWebApplication/GitHubReposWebApplication

dotnet add package Newtonsoft.json

dotnet run

```
Visit http://localhost:5000/api/repos

Navigate to the desired root (where you have cloned project) and run:

``` bash

cd GitHubReposVue

npm install

npm run dev (serve at localhost:8080)

```
Visit http://localhost:8080
