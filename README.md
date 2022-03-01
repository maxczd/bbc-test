# Blablacar technical test

Blablacar technical test is a small one page web application that renders a search result page of carpooling. It is configured to display the first 5 trips of the current day, but you can display more if you click on the `Load more results` button at the bottom of the page.

This web application has been built in a context of a technical test interview for Blablacar.

  <p align="center">
    <img src="/assets/bbc.png" width="50"/>
  </p>
 
## Architecture

The application is built with ReactJS librairy in Typescript. It communicates with a Blablacar API to fetch data.

# Development

## Setup

### Requirements

- NodeJS (v16.13.2)
- Npm (v8.3.2)

### Install

```bash
# install dependencies
npm install
```

or

```bash
# install dependencies
yarn install
```

### Run

```bash
# launch the app locally
npm run start
```

or

```bash
# launch the app locally
yarn start
```

### Lint

```bash
# run eslint
npm run lint
```

### Unit tests

```bash
# run all unit tests
npm run test
```

or

```bash
# run all unit tests
yarn run test
```

```bash
# run unit tests coverage
yarn test -- --coverage
```

### File structure

```
src
├── main: the main process is the mother of all process. It boots internal and renderer process and starts the window.
├── root: basis routing file.
├── version: latest branch version.
├── components: gathers all front components needed for the app.
├── graphql
├── images: gathers all images needed for the app.
├── locales: gathers all specific label files.
├── modules: gathers the 3 blocks of views: admin, product & admin
├── resources: gathers all kind of resources (api calls, state management, types, graphQL queries...)
├── sercices: gathers api & autenticator services.
├── styles: gather main .scss file and colors binding files.
test
├── e2e : gathers all integration tests files.
├── unit: gathers all unit tests files.
themes: gathers all theme files.
favicons: gathers all possible favicons.
portal_ingest: gathers all data files needed to run the Control Tower with data.
configs: gathers all json configuration files for every clients & partners.
```
