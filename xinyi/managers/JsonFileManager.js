
const fs = require('fs');
const jsf = require('jsonfile');

class JsonFileManager {

	constructor() {

		var filename = 'members.json'

		if (!fs.existsSync(filename)) {
		  jsf.writeFileSync(filename, [])
		}
	}

	saveMember(member)
	{
		var members = this.getMembers()
		members.push(member)
		jsf.writeFileSync(filename, members)
	}

	getMembers()
	{
		return jsf.readFileSync(filename)
	}
}

module.exports = JsonFileManager