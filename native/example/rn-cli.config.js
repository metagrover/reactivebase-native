const path = require("path");
const escape = require("escape-string-regexp");
const blacklist = require("metro-bundler/src/blacklist");

module.exports = {
	getProjectRoots() {
		return [__dirname, path.resolve(__dirname, "..")];
	},
	getProvidesModuleNodeModules() {
		return [
			"react-native",
			"react",
			"redux",
			"react-redux",
			"redux-thunk",
			"native-base",
			"appbase-js",
			"@appbaseio/reactivecore",
			"@ptomasroos/react-native-multi-slider",
			"react-native-calendars",
			"xdate",
			"prop-types"
		];
	},
	getBlacklistRE() {
		return blacklist([
			new RegExp(
				`^${escape(path.resolve(__dirname, "..", "node_modules"))}\\/.*$`
			)
		]);
	}
};
