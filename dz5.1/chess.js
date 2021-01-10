


function checkNum(c) {
    var z = (c % 2 == 0) ? 0 : 1;
    return z;

}



function tableCreate() {
    var body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '400px';
    tbl.style.border = '1px solid black';

    for (var i = 0; i < 9; i++) {
        var tr = tbl.insertRow();
        for (var j = 0; j < 9; j++) {
            if (i == 9 && j == 1) {
                break;
            } else {
                var td = tr.insertCell();
                td.style.border = '1px solid black';
                td.style.backgroundColor = 'black';
                td.style.padding = '40px';
                if (checkNum(j) && checkNum(i)) {
                    td.style.backgroundColor = 'white';
                } else if (!checkNum(j) && !checkNum(i)) {
                    td.style.backgroundColor = 'white';
                } if (i == 0) {
                    td.appendChild(document.createTextNode(j))
                    td.style.backgroundColor = 'white';
                    td.style.border = '1px solid white';
                    td.style.padding = '10px';
                } if (j == 0) {
                    let y = [0, "a", "b", "c", "d", "e", "f", "g", "h"];
                    td.appendChild(document.createTextNode(y[i]))
                    td.style.backgroundColor = 'white';
                    td.style.border = '1px solid white';
                    td.style.padding = '10px';
                }
            }
        }
    }
    body.appendChild(tbl);
}
tableCreate();
