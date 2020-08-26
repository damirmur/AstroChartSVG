let a2d = window.astrology2D;
fjs = window.fastJS;
fEl = fjs.El;
fAr = fjs.Arr;
let date = a2d.Date();
let svg = a2d.SVG;
let ht = [];
let data = [];
const data0 = [];
data0[0] = {
    cusps: [
        149.72877641617464,
        169.111932578715,
        194.79403397169986,
        228.65436443218937,
        267.97294149510435,
        302.5496344542087,
        329.72877641617464,
        349.111932578715,
        14.794033971699832,
        48.65436443218936,
        87.97294149510435,
        122.54963445420867
    ],
    planets: {
        Sun: [236.8212185731441, 1.0096764017283275],
        Moon: [256.5281409042396, 12.406490087861735],
        Mercury: [258.2894104058174, 1.2002192964035796],
        Venus: [258.4355678294471, 1.245373610185102],
        Mars: [337.3250026549197, 0.5738841729700035],
        Jupiter: [252.86555341679846, 0.221292292121308],
        Saturn: [63.53015479538439, -0.08123467681279811],
        Uranus: [196.50347380718844, 0.051859740453056136],
        Neptune: [242.57844769386276, 0.037537274066228817],
        Pluto: [181.46610760408745, 0.02458530333977259],
        Lilith: [199.2042205043052, 0.11195230808164863],
        NNode: [307.79465752291776, -0.17257899414560335]
    },
    user: {userDate: '1971-11-19T19:43+05:00', latitude: 52.7807, longitude: 52.2635, sysHouse: 'P', type: 'goro'}
};
let LanLong = a2d.getLanLong(data0[0]['user']['latitude'], data0[0]['user']['longitude']);

data0[1] = {
    cusps: [
        209.27529594188331,
        239.27529594188331,
        274.7712286782946,
        310.26716141470587,
        340.26716141470587,
        4.771228678294619,
        29.275295941883314,
        59.275295941883314,
        94.77122867829462,
        130.26716141470587,
        160.26716141470587,
        184.7712286782946
    ],
    planets: {
        Sun: [145.8654429003117, 0.9623348711851515],
        Moon: [135.82508112205014, 14.241846635614449],
        Mercury: [146.62962649760374, 1.9985801308029414],
        Venus: [100.24231626151823, 0.9928910138226554],
        Mars: [24.68826187921033, 0.29070394231302704],
        Jupiter: [288.43667360147964, -0.07801138721539362],
        Saturn: [296.677991018592, -0.05943228027241389],
        Uranus: [40.68869306614536, -0.0023137279647047243],
        Neptune: [350.1953730621835, -0.02444135252155848],
        Pluto: [292.98202202416826, -0.019340056009292148],
        Lilith: [22.85179348112946, 0.11180314930630314],
        NNode: [87.54257465612791, -0.12555573175273324]
    }
};
data = data0;
const dSun0 = data0[0]['planets']['Sun'][0];
fEl.crEl('br');
let attrChart = {vbw: 600, vbh: 500, scale: 0.6, typeH: 'n'};
svg.drawChart(fEl.getElId('begin0'), data, attrChart);
crTabInfo = (data) => {
    fEl.remove("tabInfo");
    fEl.crTabOfId(fEl.getElId('begin1'), {border: 1, id: 'tabInfo'}, [['tab_radix', 'tab_tr'], ['plR', 'plT'], ['hR', 'hT'], ['aR', 'aT'], ['sR', 'sT']]);
    fEl.crTabText(fEl.getElId('plR'), {border: 0.5, id: "tab_infoPR"}, a2d.textPlH(data[0])[0]);
    fEl.crTabText(fEl.getElId('plT'), {border: 0.5, id: "tab_infoPT"}, a2d.textPlH(data[1])[0]);
    fEl.crTabText(fEl.getElId('hR'), {border: 0.5, id: "tab_infoHR"}, a2d.textPlH(data[0])[1]);
    fEl.crTabText(fEl.getElId('hT'), {border: 0.5, id: "tab_infoHT"}, a2d.textPlH(data[1])[1]);
    fEl.crTabText(fEl.getElId('aR'), {border: 0.5, id: "tab_infoAR"}, a2d.textAsp(data[0]));
    fEl.crTabText(fEl.getElId('aT'), {border: 0.5, id: "tab_infoAT"}, a2d.textAsp(data[1]));
    fEl.crTabText(fEl.getElId('sR'), {border: 0.5, id: "tab_infoSR"}, a2d.textStatistic(data[0]));
    fEl.crTabText(fEl.getElId('sT'), {border: 0.5, id: "tab_infoST"}, a2d.textStatistic(data[1]));
};
transit = () => {
    if (fEl.getElId('transit') !== null) {
    }
    if (fEl.getElId('transit').checked) {
        attrChart.typeH = 't';
    } else {
        attrChart.typeH = 'n';
    }
    svg.typeHoroscop();
};
reverse = () => {
    svg.reverseHoroscop();
    crTabInfo(data);
};
ascSun0 = () => {
    if (fEl.getElId('ascSun0').checked) {
        if (dSun0 === data0[0]['planets']['Sun'][0]) {
            data0[1]['cusps'] = a2d.sunSignAsc(dSun0);
        } else {
            data0[0]['cusps'] = a2d.sunSignAsc(dSun0);
        }
        ;
    } else {
        if (dSun0 === data0[0]['planets']['Sun'][0]) {
            data0[1]['cusps'] = ht.slice();
        } else {
            data0[0]['cusps'] = ht.slice();
        }
        ;
    }
    ;
    svg.typeHoroscop();
    crTabInfo(data);
};
request = () => {
    date = a2d.Date(new Date());
    h = 'P';
    requestPost({userDate: date.swisseph, planet: a2d.planetSwe, latitude: 52.7807, longitude: 52.2635, sysHouse: h, astroDate: {}, type: 'goro'}, getListContent);
};
requestPost = (astroDate, func, path = "/swisseph") => {
    let XHR = fjs.Net.XHRequest(astroDate, path);
    XHR.onload = () => {
        let receivedUser = JSON.parse(XHR.response);
        func(receivedUser);
    };
};
getListContent = (response) => {
    if (response.astroDate !== undefined) {
        let sp = response.astroDate;
        sp['user'] = {};
        sp['user']['userDate'] = response.userDate;
        sp['user']['latitude'] = response.latitude;
        sp['user']['longitude'] = response.longitude;
        sp['user']['sysHouse'] = response.sysHouse;
        if (response.sysHouse === 'S')
            sp['cusps'] = a2d.sunSignAsc(sp['planets']['Sun'][0]);
        ht = sp['cusps'].slice();
        data[1] = sp;
        svg.typeHoroscop();
        crTabInfo(data);
    }
    ;
};
crTabInfo(data);

request();





