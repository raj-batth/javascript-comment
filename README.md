# Vue comment handling

<p align="center">
  <a href="https://vuejs.org/" alt="Built with: Vue: 2.6.11">
    <img src="https://badgen.net/badge/Built%20with/Vue%20v2.6.11/4FC08D" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" alt="Powered by: Java Script">
    <img src="https://badgen.net/badge/Powered%20by/JavaScript/F6D854" />
  </a>
  <a href="https://opensource.org/licenses/MIT" alt="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-green.svg" />
  </a>
</p>

## Introduction

- Fetching a comment from Youtube using Google API.
- Display the replies on comments in a customized Vue.js component.

## Installation and Requirements

1. Install [Node](https://nodejs.org/en/download/)
2. Install [Vue](https://cli.vuejs.org/guide/installation.html)
3. Clone the repository.
4. Create your own Youtube API key.

- Create a local environment file with the name **.env.local** in the root directory and add the following variable:
  - VUE_APP_API_KEY = your_api_key

5. Install all the dependencies using the following command:

```bash
npm install
```

## Running the application

1. Navigate to the root directory and run the following command inside the Terminal:

```bash
npm run serve
```

2. Initially, the hardcoded data will be loaded.

- Click on **"Load data from Youtube"**.
- This loads a comment from Youtube specified by its id, including likes, dislikes and replies.

3. To run test cases:

```bash
npm run test:unit
```

## Endpoints

| Description      | Endpoints                                                                                          | Payload | HTTP Methods |
| ---------------- | -------------------------------------------------------------------------------------------------- | ------- | ------------ |
| Get the Comment: | https://www.googleapis.com/youtube/v3/comments` | part=snippet&key=${apiKey}&id=${commentId} | GET |

## License

[MIT](https://choosealicense.com/licenses/mit/)
