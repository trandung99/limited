module.exports.config = {
	name: "memevn",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Jukie~",
	description: "Xem meme",
	commandCategory: "Memevn 🤩",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.vangbanlanhat.tk/image?type=meme').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Meme Việt Nam nè :3 `,
						attachment: fs.createReadStream(__dirname + `/cache/boy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/boy.${ext}`)).on("close", callback);
			})
}