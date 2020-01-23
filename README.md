# Speakers

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to install Docker Desktop which, if using a Windows machine, requires Windows 10 Pro. The Docker Toolbox edition available for other versions of Windows does not manage
publishing the docker images ip-address:port-number to localhost:port-number the same way, so the automated docker scripts will not work.

You will also need to install PostgresSQL.

### Installing

Once these are installed, you can clone the repo and open a command prompt and navigate to the Speakers.UI project and run 

```console
C:\...\Speakers\Speakers.UI> npm run build:dev
```

This will build the react app using webpack and place the resulting home.js and index.html files in the appropriate places.

Now open the project in Visual Studio, set the docker-compose project as the startup project, and build and run the project. You may get an error the first time due to the database not being created, but a second try should find the issue resolved.