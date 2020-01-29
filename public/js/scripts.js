function handleProducts() {
    const coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].classList.toggle("active");

        var content = coll[i].nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    }
}

function switchButtonToOn() {
    const buttonON = document.querySelector('#on');
    const buttonOFF = document.querySelector('#off');

    if (window.getComputedStyle(buttonON).color !== 'rgb(255, 255, 255)') {
        buttonON.style.backgroundColor = "#42bda4";
        buttonON.style.color = "#fff";

        buttonOFF.style.backgroundColor = "#fff";
        buttonOFF.style.color = "#5d6363";
    }
}

function switchButtonToOff() {
    const buttonON = document.querySelector('#on');
    const buttonOFF = document.querySelector('#off');

    if (window.getComputedStyle(buttonOFF).color !== 'rgb(255, 255, 255)') {
        buttonON.style.backgroundColor = "#fff";
        buttonON.style.color = "#5d6363";

        buttonOFF.style.backgroundColor = "#42bda4";
        buttonOFF.style.color = "#fff";
    }
}

const json_products = {
    "rows": [
        {
            "data": [
                3000,
                240,
                "CAPA GIRATÓRIA",
            ]
        },
        {
            "data": [
                2241,
                241,
                "CP MB 501",
            ]
        },
        {
            "data": [
                242,
                242,
                "CP MB 502",
            ]
        },
        {
            "data": [
                243,
                243,
                "CP DUOS TOUCH",
            ]
        },
        {
            "data": [
                244,
                244,
                "CP DUOS TOUCH",
            ]
        },
        {
            "data": [
                245,
                245,
                "CP DUOS TOUCH",
            ]
        },
        {
            "data": [
                246,
                243,
                "CP DUOS TOUCH",
            ]
        },
        {
            "data": [
                247,
                243,
                "CP DUOS TOUCH",
            ]
        },
        {
            "data": [
                248,
                243,
                "CP DUOS TOUCH",
            ]
        },
        {
            "data": [
                249,
                243,
                "CP DUOS TOUCH",
            ]
        },
        {
            "data": [
                444,
                243,
                "CP DUOS TOUCH",
            ]
        }
    ]
}

const json_sells = {
    "rows": [
        {
            "data": [
                42,
                "23/01/2019 8:44",
                "Jeziel Francisco",
                "Jeziel",
                "R$200,00",
                "AGUARDANDO APROVAÇÃO"
            ]
        },
        {
            "data": [
                43,
                "23/01/2019 8:44",
                "Jeziel Francisco",
                "Jeziel",
                "R$200,00",
                "AGUARDANDO APROVAÇÃO"
            ]
        },
        {
            "data": [
                44,
                "23/01/2019 8:44",
                "Jeziel Francisco",
                "Jeziel",
                "R$200,00",
                "AGUARDANDO APROVAÇÃO"
            ]
        },
        {
            "data": [
                45,
                "23/01/2019 8:44",
                "Jeziel Francisco",
                "Jeziel",
                "R$200,00",
                "AGUARDANDO APROVAÇÃO"
            ]
        },
        {
            "data": [
                46,
                "23/01/2019 8:44",
                "Jeziel Francisco",
                "Jeziel",
                "R$200,00",
                "AGUARDANDO APROVAÇÃO"
            ]
        },
        {
            "data": [
                47,
                "23/01/2019 8:44",
                "Jeziel Francisco",
                "Jeziel",
                "R$200,00",
                "AGUARDANDO APROVAÇÃO"
            ]
        },
        {
            "data": [
                48,
                "23/01/2019 8:44",
                "Jeziel Francisco",
                "Jeziel",
                "R$200,00",
                "AGUARDANDO APROVAÇÃO"
            ]
        },
        {
            "data": [
                49,
                "23/01/2019 8:44",
                "Jeziel Francisco",
                "Jeziel",
                "R$200,00",
                "AGUARDANDO APROVAÇÃO"
            ]
        },
        {
            "data": [
                50,
                "23/01/2019 8:44",
                "Jeziel Francisco",
                "Jeziel",
                "R$200,00",
                "AGUARDANDO APROVAÇÃO"
            ]
        }
    ]
}

const paginationDiv = document.getElementById('table-pagination');

let current_page = 1;
let rows = 6;

function fillTable(tableBodyId, json, rows, page) {
    const tableBodyElement = document.getElementById(tableBodyId);
    
    tableBodyElement.innerHTML = '';

    page--;

    if (tableBodyElement.id === 'sells-body') {
        rows = 5;
    }

	let start = rows * page;
	let end = start + rows;
    let paginatedItems = (json.rows.slice(start, end));

    for (let i = 0; i < paginatedItems.length; i++) {
        const tr = document.createElement('tr');
        
        for (let j = 0; j < json.rows[0].data.length; j++) {
            const td = document.createElement('td');
            td.appendChild(document.createTextNode(paginatedItems[i].data[j]));
            tr.appendChild(td);
        }
        
        tableBodyElement.appendChild(tr);
    }
}

function tablePagination(tabDiv, pagDiv, json, rows) {
    let page_count = Math.ceil(json.rows.length / rows);

    for (let i = 1; i < page_count + 1; i++) {
        let button = paginationButton(tabDiv, json, i);
		pagDiv.appendChild(button);
	}
}

function paginationButton(tabDiv, json, page) {
    let button = document.createElement('button');
    button.setAttribute('class', 'search-product-pagination');
    button.innerText = page;

    button.addEventListener('click', function() {
        current_page = page;
        
		fillTable(tabDiv, json, rows, current_page);
	});

	return button;
}

// if (document.querySelector("#products-table")) {
//     fillTable('products-body', json_products, rows, current_page);
//     tablePagination('products-body', paginationDiv, json_products, rows);
// } 

if (document.querySelector("#sells-table")) {
    fillTable('sells-body', json_sells, rows, current_page);
    tablePagination('sells-body', paginationDiv, json_sells, rows);
}