# chareads.com

[![CircleCI](https://img.shields.io/circleci/build/github/pouretrebelle/chareads.com?token=44dd1fbe001ecd322c74296b07f664e905b8993b)](https://circleci.com/gh/pouretrebelle/chareads.com) [![Percy.io](https://percy.io/static/images/percy-badge.svg)](https://percy.io/33e2c69b/chareads.com) [![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)](https://github.com/carloscuesta/gitmoji)

## :raised_hands: Development

- `npm install` installs all the site's dependencies
- `npm start` runs [Gatsby](https://www.gatsbyjs.org/) in dev mode on [localhost:2000](http://localhost:2000)

## :construction_worker: Being good

- We use [Typescript](https://www.typescriptlang.org/) for type checking, and it's hella strict
- We use [Prettier](https://prettier.io/) for consistent code styling, set it up for your editor with [these instructions](https://prettier.io/docs/en/editors.html) to run on file save
- `npm run lint` uses [ESLint](https://eslint.org/) with a bunch 'o plugins to check you're not writing shit syntax
- `npm run test` runs [Jest](https://jestjs.io/) for all the unit tests

## :rocket: Deployment

The site is deployed to [pouretrebelle.github.io/chareads.com](https://pouretrebelle.github.io/chareads.com/) on the `gh-pages` branch using the `npm run deploy` command. This is run automatically by CircleCI for every commit to main, and at midnight every night.

Part of the build script runs [a script to scrape the current video stats from the YouTube API](https://github.com/pouretrebelle/chareads.com/blob/main/scripts/stats/getYouTubeStats.ts), this is reliant on a `YOUTUBE_API_TOKEN` env var.

## :hammer: Scripts

- `npm run sync:videos` scaffolds video content for recent YouTube videos via the API.
- `npm run sync:books` scaffolds book content for recently-read books using the Goodreads
- `npm run sync:tbr` imports data for unread Goodreads books, to add affiliate links to timestamp references

The video and book sync scripts take a count argument, for example use `npm run sync:videos -- 2` to scaffold the two most recent videos.
