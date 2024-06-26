const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9314973321ff437647557.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Ahsan Panhwar " 


global.devs = "923706302550" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "03706302550";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_58_06_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYwLFxuICAgICAgICA2NixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICA0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDgxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUlpqTHFCUHBrT2p4eWQ4V2Jsc2lHTFlqbFZWUVFjNnN6WnY4TDRmMm95MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODI3OTc5ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMxQkI5NDI3REMzRTAzRjhCQkQxQTFEQjhBN0RBMENGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzU5OTUxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI4Mjc5Nzk4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDNDQzUyQUFGQkI2MTk0NEUwNDExMUE2Qzc0NzFEN0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NTk5NTE3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjgyNzk3OTg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMUExQzJCNkIxRjgyMzg5ODhGOURDMUEzODZDNDkwQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc1OTk1MjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyODI3OTc5ODZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVFMjQ3ODYzQkY4MkFBNDUzQzgxMkIyNTM4QkY3MTY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzU5OTUyMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfTjRwZDFJSVFMMlNPQTF0ajNVbWV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFhMTMwYTIwLWE4NzQtNDQ4YS05YTM2LWFkNTRkMzM0OTBmZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MyxcbiAgICAgIDE3NixcbiAgICAgIDE4LFxuICAgICAgOTMsXG4gICAgICA3NCxcbiAgICAgIDc1LFxuICAgICAgMzIsXG4gICAgICAxNTUsXG4gICAgICA2MCxcbiAgICAgIDE3OSxcbiAgICAgIDE1LFxuICAgICAgMjE2LFxuICAgICAgMjEwLFxuICAgICAgMTc3LFxuICAgICAgMzMsXG4gICAgICA3NCxcbiAgICAgIDIwNyxcbiAgICAgIDI3LFxuICAgICAgMTE0LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMjcsXG4gICAgICAxNzIsXG4gICAgICAxODUsXG4gICAgICAyMjksXG4gICAgICA1OCxcbiAgICAgIDEsXG4gICAgICAyMTMsXG4gICAgICAyMTIsXG4gICAgICAxOSxcbiAgICAgIDEyMyxcbiAgICAgIDE0NyxcbiAgICAgIDY5LFxuICAgICAgMTg5LFxuICAgICAgMTI1LFxuICAgICAgMTc3LFxuICAgICAgMTg1LFxuICAgICAgMzIsXG4gICAgICAxNDgsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0wzQkxBVFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI4Mjc5Nzk4NjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQUJEVUwgSEFESVwiLFxuICAgIFwibGlkXCI6IFwiNzY4NzYxMzk3NzQxMzE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTEJrZ0lRbVBxQnN3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZBdUhkMzc0WGE3V0NTRDgvdkw3cmFxelh2Q21NQ2NQYTFhdW0zVHVxeUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRmxGcWFuYllOVVlxdGl0TmIzQzhSUXQ0L0RxUkthMnJiS3RPUlBCQXVoenI5cmxhRmV3Skw1U2xoWDBOM3R6ZFhmWHhra291UzVUVElUNkpjb1VwQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0xNQ1ZZRndXb2swNlhJWG1yVGZsV2dkQ1FKcGpubWl5WmZmRm1palB5SnNXWUtGeXMxQjZ4RTAza3hSNFIwazMwZGZBNmt5SUhWSGVuMmZrbHJ1akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjgyNzk3OTg2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NTk5NTE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFZRXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMVlEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXOVZ2K291Q3YveWtYMWdBN0NmeTFIeXZtQ0NGSHFleXpKSWxkZWRtMTV3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0OTc2MTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzU5OTUxNjA2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "AHSAN PANHWAR" , // 『 Ahsan Panhwar  』```", //*『Ahsan Panhwar 』*\n youtube.com/@funwithahsan"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Ahsan-panhwar",
  ownername:process.env.OWNER_NAME|| " Ahsan Panhwar",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "www.remove.bg/upload#api-key",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Ahsan"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
