# listApp

**A simple Todo List Web Application based on a Microservices Architecture.**
<br>
<hr>
<br>
<p align="center">
  <img alt="Landing Page" title="Demo" src="https://github.com/sucharith-p/listApp/blob/master/client/public/Landing_page.png" >
</p>
<hr>
<br>

## Introduction
This a non-persistent Todo List Application which highlights your todos as separate entities in the form of cards. Rather than using a standard monolithic architecture, it uses microservices to highlight functionality, so that each functionality can be run as an independent service.

## Built With
* ReactJS
* Express

## Setup
Clone or download this repository using the repository's URL <br>
Run `npm install` to install the dependencies

## Navigating About
Each folder is quite independent and states it's purpose.

**client :**
The client folder contains the front-end scripts as it's main costituents. If this is causing a problem before running, you can check the official React documentation to [create a new React App](https://reactjs.org/docs/create-a-new-react-app.html) and copy the files in the `src` sub-folder. 
Since this is quite non-persistent, all data archived is stored within the React components itself.

**posts, comments and query :**
These folders all contain one significant file `index.js` which has express code to make GET and POST requests using Axios.

**event-bus :**
The `index.js` file inside this folder acts as a routing mechanism to send out event broadcasts to all other services. For example, when a post is created, an event "Post Created" will be communicated across all other services. 

## Running the Application
In order to run this application locally using node, you will have to navigate to each folder and run them independently.
* Head over to the any of the sub-folders.
* Run the service using `npm start`
* To run all services, you would need to open a few terminal tabs and run each service.
* Each service would run on a different port. The **client** application would be available on `localhost:3000`

## Docker and more..
Additionally, each of the sub-folders contains a similar Dockerfile in order to build separate docker images, so that the application's services can be run on independent containers.

The ideal next step for a microservices app is to run it on a container service. In order to run this application on Docker, you would first need to install docker and follow the setup according to your OS on the official [Docker](https://www.docker.com/products/docker-desktop) website.

After installing Docker, start Docker desktop and run `docker -v` to make sure it is up and configured.

Navigate to each sub-folder and build their respective images using:
```bash
$ docker build .
```
To run each of the images, copy the image name from the build output and use it in the run command.
```bash
$ docker run [image-name]
```
The status of the images running on the docker containers can be viewed using:
```bash
$ docker ps
```
The application would be up and running in independent containers and can be scaled in a cluster orchestration service such as Kubernetes or on any Cloud Environment.





