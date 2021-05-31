const client = require('discord-rich-presence')('848978026581721099');

client.updatePresence({

  details: "First line",

  state: "Second line",

  largeImageKey: 'largeimage',

  largeImageText: "Large Image Hover Text",

  smallImageKey: 'smallimage',

  smallImageText: "Small Image Hover Text",

  instance: true,

});
