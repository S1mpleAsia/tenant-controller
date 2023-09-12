const shell = require('shelljs')
const path = require("path")
require('dotenv').config()

const configFolder = path.join(__dirname, `../configs`)

const syncRemoteConfigs = () => {

	// clone config repo on initiation
	shell.cd(configFolder).exec(`git clone ${process.env.CONFIG_REPO_URL} .`)

	// sync repo in interval
	setInterval(async () => {
		shell.cd(configFolder).exec(`git pull`)
	}, 1000 * process.env.SYNC_INTERVAL);

}

module.exports = {
	syncRemoteConfigs
}