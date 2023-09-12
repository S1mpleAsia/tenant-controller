'use strict';

const express = require('express');
const { initiateInformer } = require("./deployHandler")
const { syncRemoteConfigs } = require("./syncConfig")

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Custom controller is running');
});

// synchronize remote configuration
syncRemoteConfigs()

// initiate controller
initiateInformer()

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);