Installation


1. Pull the repository, and navigate to it

2. Run `yarn` to install the dependencies, and `cd ios` and `pod install` 

Running the app

1. Run `yarn start` in the root of repository  
2. In another terminal window, run `yarn ios` (you must have iPhone 14 simulator in your xcode environment. Otherwise use `npx react-native run-ios`)


Notes:  

Api was mocked via javascript in dev environment. In order to use it in production, your server API_URL should be edited in `/constants/constants.ts` file, and the mock data in `services/mockApi/db.json` should be used as fixture to seed your database. Normally this environment variable would be injected in build time. 

After the first few image responses, the remaining are served from a mock service that serves a different image on each request, so opening the image in modal might present a different image than clicked. This is normal. The image id is the same. Alternative would be to pay for a service such as fakeql, or keep the images in memory (not good performance wise) after fetch, or add them all in an assets folder. 

