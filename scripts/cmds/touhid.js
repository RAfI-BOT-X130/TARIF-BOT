module.exports = {
 config: {
	 name: "touhid",
	 version: "1.0",
	 author: "AceGun|,𝙭𝟏𝟑𝟎",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "touhid") {
 return message.reply({
 body: " 「 🥰❥︎----ღ᭄_My CRUSH❤️‍🔥 ..\n❥︎----ღ᭄_ 𝗷𝗮𝗻𝗻𝗮𝘁+𝗧𝗼𝘂𝗵𝗶𝗱 ❞࿐\n\𝙱☺︎︎𝚃 owner\亗ɱʀ ƬʌʀᎥʆ✓𝙭𝟏𝟑𝟎」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/50bPKzW.mp4")
 });
 }
 }
}
