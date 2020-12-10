[![Build Status](https://travis-ci.org/nationalarchives/tna-frontend-toolkit.svg?branch=master)](https://travis-ci.org/nationalarchives/tna-frontend-toolkit)

# The National Archives Frontend Toolkit

### A design system for digital services

NAVI is a collection of CSS and HTML elements for using as part of your application's frontend. A way of creating flexible and unique layouts whilst also maintaining consistency across our digital services.

View [a demo of NAVI](https://cdn.nationalarchives.gov.uk/toolkit/index.html)

## 1 Installation

**Pre-requisites:** To get this repository up and running on a development machine you will need [Node.js](https://nodejs.org/en/), the [Grunt CLI](https://gruntjs.com) and PHP installed on your development machine.

Steps: 

* Clone the repository 
* Run `npm install` from the root directory to install dependencies
* Run `npm start` to kick off a PHP server on localhost and open the home page in your default browser.
* Run `npm stop` to kill the server

### 1.1 Themes

Coming soon...

## 2 Development setup

### 2.1 Clone this Github repository

Git:

```
 $ git clone https://github.com/nationalarchives/tna-frontend-toolkit.git
```

SourceTree:

Click 'Remote' in SourceTree and you will be shown a full list of repositories you have access to. Then: 

* Create a folder called 'tna-frontend-toolkit' in the a desired directory
* Select the 'tna-frontend-toolkit' repository in SourceTree and clone it to your newly created 'tna-frontend-toolkit' directory

### 2.2 Create a new project in PhpStorm

* Select 'Create New Project from Existing Files' 
* Select 'Source files are in a local directory, no web server is yet configured' 
* Set the created 'tna-frontend-toolkit' directory and click 'Project Root'

### 2.3 Running Grunt

Assuming that the [Grunt CLI](https://gruntjs.com/getting-started#installing-the-cli) has been installed follow the instructions on the [Grunt website](http://gruntjs.com/getting-started#working-with-an-existing-grunt-project).

#### 2.3.1 Available Grunt Tasks 

There are several Grunt tasks available to developers. View the Gruntfile.js for a listing of included tasks.

* ```grunt``` will run a predefined set of tasks and result in an ongoing 'watch' tasks which responds to any changes to JavaScript and SASS files by compiling, concatenating and minifying the output.

## 3 A quick guide on how to contribute

We welcome contributions to The National Archives frontend toolkit. To do so we ask contributors to follow a simple step process:

1. Follow the [development setup](#2-development-setup).
2. Raise an issue as described in the [guideline checklist](https://github.com/nationalarchives/tna-frontend-toolkit/blob/develop/CONTRIBUTING.md#31-guideline-checklist).
3. Create a feature branch for your new code. Follow our [commit message guidelines](https://github.com/nationalarchives/tna-frontend-toolkit/blob/develop/CONTRIBUTING.md#32-commit-messages) and [CSS/Sass rules](https://github.com/nationalarchives/tna-frontend-toolkit/blob/develop/CONTRIBUTING.md#5-css-style-guide).
4. Test your code as described in [browser/device testing](https://github.com/nationalarchives/tna-frontend-toolkit/blob/develop/CONTRIBUTING.md#6-browserdevice-testing).
5. Submit a pull request with the required documentation as described in the [guideline checklist](https://github.com/nationalarchives/tna-frontend-toolkit/blob/develop/CONTRIBUTING.md#31-guideline-checklist).

For more information see [CONTRIBUTING.md](https://github.com/nationalarchives/tna-frontend-toolkit/blob/develop/CONTRIBUTING.md).

## Features

### Bootstrap v4.3.1

[Bootstrap](http://getbootstrap.com/) is mobile first front-end framework. TNA frontend toolkit uses the core grid system. Other Bootstrap components are not included.

### Sass

[Sass](https://sass-lang.com/) (Syntactically Awesome Style Sheets) is a preprocessor style sheet language.

### Grunt

[Grunt](http://gruntjs.com/) as a task manager to aid development.

### Block Element Modifier (BEM)

TNA frontend toolkit uses the [Block Element Modifier (BEM)](http://getbem.com/) methodology when naming CSS classes. This is designed to help developers understand how the different classes relate to each other.

