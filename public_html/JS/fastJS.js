(function (fastJS) {
    fastJS.FirstUpperCase = (s) => {
        if (typeof s !== 'string')
            return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
// ## Protocol #####################
    fastJS.Net = {};
    fastJS.Net.XHRequest = (dateJSON = {}, path) => {
        let XHR = new XMLHttpRequest();
        XHR.open("POST", path, true);
        XHR.setRequestHeader("Content-Type", "application/json");
        XHR.send(JSON.stringify(dateJSON));
        return XHR;
    };
// ## HTML elements manipulate #####################
    fastJS.El = {};
    fastJS.El.getElId = (id) => {
        return document.getElementById(id);
    };
    fastJS.El.crEl = (name, parentEl = null, atrr = {}) => {
        let el = document.createElement(name);
        if (parentEl !== null)
            parentEl.append(el);

        for (var item in atrr) {
            switch (item) {
                case "textContent":
                    el.textContent = atrr[item];
                    break;
                case "value":
                    el.value = atrr[item];
                    break;
                case " innerHTML":
                    el.innerHTML = atrr[item];
                    break;
                default:
                    el.setAttribute(item, atrr[item]);
            }
        }
        return el;
    };
    fastJS.El.remove = (idEl) => {
        el = fastJS.El.getElId(idEl);
        if (el) {
            el.querySelectorAll('*').forEach(n => n.remove());
            el.remove();
        }
        ;
    };
    fastJS.El.getElId = (id) => {
        return document.getElementById(id);
    };
//select
    fastJS.El.crSel = (parentEl, obj = {}, atrr = {}) => {
        let el = fastJS.El.crEl('select', parentEl, atrr);
        for (let key in obj) {
            el.append(new Option(key, obj[key]));
        }
        return  el;
    };
//SVG
    fastJS.El.crElSVG = (name, parentEl = null, atrr = {}) => {
        let elSVG = document.createElementNS("http://www.w3.org/2000/svg", name);
        if (parentEl !== null)
            parentEl.append(elSVG);
        for (var item in atrr) {
            elSVG.setAttributeNS(null, item, atrr[item]);
        }
        if (name === 'text') {
            fastJS.El.crTN(atrr['textContent'], elSVG);
        }
        return elSVG;
    };
//TextNode
    fastJS.El.crTN = (text = '', parentEl = null) => {
        let el = document.createTextNode(text);
        if (parentEl !== null)
            parentEl.append(el);
        return el;
    };

//table
    fastJS.El.crTabOfId = (parrentEl, atrr, arrEl = []) => {
        let tab = fastJS.El.crEl('table', parrentEl, atrr);
        arrEl.forEach((tr, r) => {
            let tabTr = fastJS.El.crEl('tr', tab);
            tr.forEach((td, d) => {
                let tabTd = fastJS.El.crEl('td', tabTr);
                tabTd.id = td;
            });
        });
    };
    fastJS.El.crTabOfEl = (parrentEl, atrr, arrEl = []) => {
        let tab = fastJS.El.crEl('table', parrentEl, atrr);
        arrEl.forEach((tr, r) => {
            let tabTr = fastJS.El.crEl('tr', tab);
            tr.forEach((td, d) => {
                let tabTd = fastJS.El.crEl('td', tabTr);
                tab.rows[r].cells[d].append(td);
            });
        });
    };
    fastJS.El.crTabText = (parrentEl, atrr, arr = []) => {
        let tab = fastJS.El.crEl('table', parrentEl, atrr);
        tab.style.fontSize = "12px";
        tab.style['font-weight'] = "bold";//
        arr.forEach((tr, index) => {
            let tabTr = fastJS.El.crEl('tr', tab);
            tr.forEach((td, index) => {
                let tabTd = fastJS.El.crEl('td', tabTr, {textContent: td});
            });
        });
        return tab;
    };
    fastJS.El.getSizeEl = (el) => {
        let bBox = el.getBBox();
        return [[bBox.x, bBox.y], [bBox.width, bBox.height]];
    };
    fastJS.El.setXRight = (el, pEl, scale = 1) => {
        let attrEL = fastJS.El.getSizeEl(el);
        let attrValue = "translate(" + (fastJS.El.getSizeEl(pEl)[1][0] - Math.ceil(attrEL[1][0]) - attrEL[0][0]).toString() + ",0)";
        el.setAttribute('transform', attrValue);
    };
    fastJS.El.setYEnd = (el, pEl, scale = 1) => {
        let attrEL = fastJS.El.getSizeEl(el);
        let attrValue = "translate(0," + (fastJS.El.getSizeEl(pEl)[1][1] - Math.ceil(attrEL[1][1]) - attrEL[0][1]).toString() + ")";
        el.setAttribute('transform', attrValue);
    };
    fastJS.El.setXYEnd = (el, pEl, scale = 1) => {
        let attrEL = fastJS.El.getSizeEl(el);
        let attrValue = "translate(" + (fastJS.El.getSizeEl(pEl)[1][0] - Math.ceil(attrEL[1][0]) - attrEL[0][0]).toString() + ","+(fastJS.El.getSizeEl(pEl)[1][1] - Math.ceil(attrEL[1][1]) - attrEL[0][1]).toString()+")";
        el.setAttribute('transform', attrValue);
    };

// ## Array and Object manipulate #####################
    fastJS.Arr = {};

    fastJS.Arr.arrPlusIndex = (arr) => {
        let newArr = [];
        arr.forEach((el, index) => {
            newArr.push([index + 1].concat([el]));
        });
        return newArr;
    };
    fastJS.Arr.objToArray = (obj) => {
        let arr = [];
        for (let key in obj) {
            let arrR = [key];
            let arrf = Array.from(obj[key]);
            if (arrf !== []) {
                arrf.forEach((el, index) => {
                    arrR.push(el);
                });
            } else {
                arrR.push(fastJS.Arr.SimpleToArray(obj[key]));
            }
            arr.push(arrR);
        }
        return arr;
    };
    fastJS.Arr.SimpleToArray = (simple) => {
        return [simple];
    };
    fastJS.Arr.arrOneToTwo = (arr) => {
        let arrTwo = [];
        arr.forEach((el, index) => {
            arrTwo.push(fastJS.Arr.SimpleToArray(el));
        });
        return arrTwo;
    };




}(window.fastJS = window.fastJS || {}));
