<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src="gympoint.png" width="200px" />
</h1>

<h3 align="center">
  Rocketseat bootcamp project. The project is a back-end, web and mobile system for control and interaction between gyms and their students. It has features like login, enrollment, training, plans, payments, aid applications, etc.
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jopcmelo/gostack-gympoint?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/jopcmelo/gostack-gympoint/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jopcmelo/gostack-gympoint?style=social">
  </a>
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- [Linux Mint 19.02](https://linuxmint.com/release.php?id=35) - Development Operation System.
- [NodeJS](https://nodejs.org/en/) - Environment runtime.
- [Yarn](https://yarnpkg.com/en/docs/install) - Packager manager.
- [Docker](https://docs.docker.com/install/) - Make it easier to create, deploy, and run applications by using containers.
- [Docker Compose](https://docs.docker.com/compose/install/) - Relies on Docker Engine for any meaningful work, so make sure you have Docker Engine installed either locally or remote, depending on your setup.
- [Genymotion](https://www.genymotion.com/fun-zone/) - Android emulator.

What things you need to install the software and how to install them

```
$> git clone https://github.com/jefferson-luis-nascimento/gymPoint.git
```

### Installing

A step by step series of examples that tell you how to get a development env running

#### Databases
First thing you must do is setup all your database settings. To do it, I have created a docker-compose.yml file do help you
```
$> docker-compose up -d
```

#### Back-end
First install back-end dependencies
```
$> cd ./backend/ && yarn
```
Start back-end service
```
$> yarn dev 
```

After all dependencies is installed, follow the next steps:
  -Create a file .env e include values using .envexample reference

#### Front-end
First install front-end dependencies
```
$> cd ./frontend/ && yarn
```
Then run app
```
$> yarn start
```

#### Enviroment Android
Follow the steps from [Rocketseat docs](https://docs.rocketseat.dev/ambiente-react-native/introducao)

#### Mobile
First install mobile dependencies
```
$> cd ./mobile/ && yarn
```
Then run app
```
$> react-native run-android
```
```
$> react-native start --reset-cache
```

#### Built With

* [Express](http://www.dropwizard.io/1.0.2/docs/) - A restful API framework
* [ReactJS](https://pt-br.reactjs.org/) - A front-end library to build user interfaces
* [React Native](https://facebook.github.io/react-native/) - A mobile library to build native apps to Android and iOS

### Authors

* **Jefferson Luís Nascimento** - *Full-stack developer* - [GitHub profile](https://github.com/jefferson-luis-nascimento)

## Acknowledgments

* ExpressJS ecossystem
* MVC design pattern
* Sequelize ORM
* Background mail sendling with Redis
* Sentry
* Multer
* JWT
* Docker
* React ecossystem
* React Hooks
* ReactJS
* React Native
* Reactotron
* React Navigation
* React Router DOM
* React Toastify
* Redux
* Redux Saga
* Redux Persist
* Flux Archtecture
* ESLint
* Prettier
* Styled Components
* Unform
* Axios
* History
* Date-fns
* @Rocketseat/unform