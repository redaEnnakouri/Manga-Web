const https = require('https')

let url = process.argv[2];
let page = process.argv[3] || 1;
let galleries_per_page = 25;

var start_byte = (page - 1) * galleries_per_page * 4;
var end_byte = start_byte + galleries_per_page * 4 - 1;
nozomi = [];

let req = https.request(url, {
    headers: {
      'Range': 'bytes='+start_byte.toString()+'-'+end_byte.toString()
    }
}, res => {
    var data = [];
    res.on('data', chunk => {
        data.push(chunk);
    });
	res.on("end", () => {
        let b = Buffer.concat(data);
        let view = new DataView(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength));

        var total = view.byteLength/4;
        for (var i = 0; i < total; i++) {
            nozomi.push(view.getInt32(i*4, false));
        }
        var galleries = parseInt(res.headers['content-range'].replace(/^[Bb]ytes \d+-\d+\//, '')) / 4;
        process.stdout.write(JSON.stringify({
            total: galleries,
            pages: Math.ceil(galleries / galleries_per_page),
            galleries: nozomi
        }));
	});
});

req.end();