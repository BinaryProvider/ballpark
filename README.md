<img src="ballpark.svg" width="400">

# Ballpark - A collaborative planning app

With Ballpark, you and your colleagues can create user stories and play planning poker on them in real-time.

## Stack

The front-end is a React application and the back-end consists of a GraphQL API and a MongoDB database.

The application is dockerized using Docker Compose so the entire stack can be built and run with one command.

## Prerequisites

- [Node + NPM](https://nodejs.org)
- [Docker](https://www.docker.com)

## Installation

Run the command below in the root directory of the repo.

```bash
npm start
```

This will execute Docker Compose which will build docker images for the entire stack as well as spinning up instances.

Note: This step may take some time, but have patience.

When you see the text below in the console it means that the client is ready. Open http://localhost:3000 in a browser to try it out.

```url
ballpark-client | Compiled successfully!
ballpark-client |
ballpark-client | You can now view client in the browser.
ballpark-client |
ballpark-client | Local: http://localhost:3000/
```

## License

[ISC](https://choosealicense.com/licenses/isc/)
