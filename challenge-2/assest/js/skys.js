const resource = 'data.json';
const getData = async () => {
    const response = await fetch(resource)
    const data = await response.json();
    return data;
}

getData().then(data => {
    const response = data;
    // table body reference
    const tableBody = document.getElementById("tableData")
    response.forEach(element => {
        let tableRow = document.createElement('tr')
        tableBody.appendChild(tableRow);

        for (const el in element) {
            let tableData = document.createElement('td')
            tableRow.appendChild(tableData);
            if (el == 'type') {
                let badge = document.createElement('span');
                tableData.appendChild(badge);
                badge.classList.add('badge');
                const textNode = document.createTextNode(element[el]);
                badge.appendChild(textNode);
            }
            else {
                const textNode = document.createTextNode(element[el]);
                tableData.appendChild(textNode);
            }

        }
    });
})

function filterData() {
debugger
    const filter = document.querySelector('#search-bar').value.toUpperCase();

    const letTable = document.getElementById('tableData');

    const tr = letTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {

        let td = tr[i].getElementsByTagName('td')[0];
        console.log(td);
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            console.log(textvalue);

            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
