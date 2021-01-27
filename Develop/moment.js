const { localeData } = require("moment");

var NowMoment=moment();
var eDisplayMoment = document.getElementById('displayMoment');
eDisplayMoment.innerHTML = NowMoment.format('LLLL');
<link rel="import" href="index.html" />
