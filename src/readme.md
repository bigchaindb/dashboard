# BigchainDB Dashboard - Application

This is the working copy of BigchainDB Dashboard application,
currently deployed at [BigchainDB Testnet](https://bigchaindb-dashboard.azurewebsites.net/).
This is a single page react application that listens for the valid transaction broadcasted on the BDB websocket.
This application can be used to visualize the tranasctions and blocks on any BigchainDB deployment.

## Structure

1. `src/actions` directory contains the react actions
2. `src/components` directory contains the react components
3. `src/configs` directory has 2 json-config files to configure UI and BigchainDB connection
4. `src/containers` directory has the container components
5. `src/reducers` directory has the redux reducers
6. `src/services` directory has the services andn utils to connect and listen to BigchainDB.
7. `src/App.js` This is the react application the wraps and combines all the components together.
8. `src/index.js` This mounts the react app from App.js
9. `test/integrationTest.js` Interation test file that produces different creates/transfer transactions on BDB
10 `test/testScript.sh` a bash script to run `integrationTest.js` every 2 seconds.
11. `public/` contains static files i.e. html, css, images
12 `build/` contains the build files

## Configurations

The project can be configured using 2 JSON configutration files located at `src/configs`.
1. `bigchaindb.config.json` This file can be used to configure the connection parameters for connecting to the BigchainDB network.
2. `ui-mapper.config.json` This file can be used to configure to modify what user sees in the description for transfer & create tranasction card, application context name and the maximum number of blocks a user can see on the UI.
The fields `create.description` & `transfer.description` are used to parse the data from the raw transaction of create and transfer types respectively.

## How to deploy

1. Clone the repository with `git clone git@github.com:bigchaindb/dashboard.git`
2. Navigate to bdb-dashboard folder with: `cd dashboard/src/bdb-dashboard/`
3. Run from terminal/cmd: `npm install`
4. Modify the `bigchaindb.config.json` & `ui-mapper.config.json` as per the requirement.
5. Run the dev server using `npm start` and open the browser on `localhost:3000`
6. To craete a production build you can use `npm run build`
