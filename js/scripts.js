
var tables = {
    "1":[
        {
            "name": "Marvin",
            "alias": "Don Marvin",
            "tableId": "1"
        },
        {
            "name": "Adelaida",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Isaura",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Karen",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Julius",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Beatriz",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Rafael",
            "alias": "Rafaelito",
            "tableId": "1"
        },
        {
            "name": "Maria Delia",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Neydi",
            "alias": "",
            "tableId": "1"
        }, {
            "name": "Raul",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Carmen",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Mauricio",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Gladys",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Scarlet",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Harley",
            "alias": "",
            "tableId": "1"
        },
        {
            "name": "Harley Jr.",
            "alias": "",
            "tableId": "1"
        }
    ],
    "2":[{
        "name": "Sergio",
        "alias": "El Cazador de ardillas",
        "tableId": "2"
    },
    {
        "name": "Nidia",
        "alias": "",
        "tableId": "2"
    },
    {
        "name": "Yader Antonio",
        "alias": "",
        "tableId": "2"
    },
    {
        "name": "Samantha",
        "alias": "",
        "tableId": "2"
    },
    {
        "name": "Karlita",
        "alias": "",
        "tableId": "2"
    },
    {
        "name": "Sergio Antonio",
        "alias": "",
        "tableId": "2"
    }],
    "3": [
        {
            "name": "Bretna",
            "alias": "",
            "tableId": "3"
        },
        {
            "name": "Erick",
            "alias": "",
            "tableId": "3"
        },
        {
            "name": "Daniela",
            "alias": "",
            "tableId": "3"
        },
        {
            "name": "Juan",
            "alias": "",
            "tableId": "3"
        },
        {
            "name": "Isadriana",
            "alias": "isa",
            "tableId": "3"
        },
        {
            "name": "Alma",
            "alias": "",
            "tableId": "3"
        },
        {
            "name": "Lucia",
            "alias": "",
            "tableId": "3"
        },
        {
            "name": "Sandra",
            "alias": "",
            "tableId": "3"
        },
        {
            "name": "Jessy",
            "alias": "",
            "tableId": "3"
        },
        {
            "name": "Jose",
            "alias": "",
            "tableId": "3"
        }
    ],
    "4": [
        {
            "name": "Elisa",
            "alias": "",
            "tableId": "4"
        },
        {
            "name": "Martin",
            "alias": "",
            "tableId": "4"
        },
        {
            "name": "Rodrigo",
            "alias": "",
            "tableId": "4"
        },
        {
            "name": "Franco",
            "alias": "",
            "tableId": "4"
        },
        {
            "name": "Thelma",
            "alias": "",
            "tableId": "4"
        },
        {
            "name": "Nico",
            "alias": "",
            "tableId": "4"
        },
        {
            "name": "Alina",
            "alias": "",
            "tableId": "4"
        },
        {
            "name": "Ivan",
            "alias": "",
            "tableId": "4"
        },
        {
            "name": "Nicole",
            "alias": "",
            "tableId": "4"
        },
        {
            "name": "Augusto",
            "alias": "",
            "tableId": "4"
        }
    ],
    "5":[
        {
            "name": "Alejandro",
            "alias": "Aniki",
            "tableId": "5"
        },
        {
            "name": "Stacey",
            "alias": "",
            "tableId": "5"
        },
        {
            "name": "Ronald",
            "alias": "voids",
            "tableId": "5"
        },
        {
            "name": "Kelin",
            "alias": "",
            "tableId": "5"
        },
        {
            "name": "Edgardo",
            "alias": "Bacardo",
            "tableId": "5"
        },
        {
            "name": "Karina",
            "alias": "",
            "tableId": "5"
        },
        {
            "name": "Kelvin",
            "alias": "",
            "tableId": "5"
        },
        {
            "name": "Novia de Kelvin",
            "alias": "",
            "tableId": "5"
        },
        {
            "name": "Judith",
            "alias": "",
            "tableId": "5"
        }
    ],
    "6": [
        {
            "name": "Aldo",
            "alias": "Aldo culion",
            "tableId": "6"
        },
        {
            "name": "Felipe",
            "alias": "Devorador de mundos",
            "tableId": "6"
        },
        {
            "name": "Leonardo",
            "alias": "moclinardo",
            "tableId": "6"
        },
        {
            "name": "Emerita",
            "alias": "Memerita",
            "tableId": "6"
        }
    ]
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function findGuestAndCompanions(nameOrAlias) {
    const searchName = toTitleCase(nameOrAlias);
    const searchLower = nameOrAlias.toLowerCase();

    // First, check for exact match
    for (var tableId in tables) {
        if (tables.hasOwnProperty(tableId)) {
            var guests = tables[tableId];
            for (var i = 0; i < guests.length; i++) {
                const guestNameLower = guests[i].name.toLowerCase();
                const guestAliasLower = guests[i].alias.toLowerCase();

                if (guestNameLower === searchLower || guestAliasLower === searchLower) {
                    return {
                        tableId: tableId,
                        guest: guests[i],
                        companions: guests.filter(guest => guest !== guests[i])
                    };
                }
            }
        }
    }

    // If no exact match, then check for contains
    for (var tableId in tables) {
        if (tables.hasOwnProperty(tableId)) {
            var guests = tables[tableId];
            for (var i = 0; i < guests.length; i++) {
                const guestNameLower = guests[i].name.toLowerCase();
                const guestAliasLower = guests[i].alias.toLowerCase();

                if (guestNameLower.includes(searchLower) || guestAliasLower.includes(searchLower)) {
                    return {
                        tableId: tableId,
                        guest: guests[i],
                        companions: guests.filter(guest => guest !== guests[i])
                    };
                }
            }
        }
    }
    return null;
}

function fetchAndDisplay() {
    const name = document.getElementById('email').value;
    const guestInfo = findGuestAndCompanions(name);
    const modalContent = document.getElementById('modalContent');

    if (guestInfo) {
        let output = `<h2>Mesa # ${guestInfo.tableId} Asientos: ${guestInfo.companions.length + 1}</h2>`;
        output += `<h3>Compañeros de Mesa</h3>`; // Added heading
        output += `<ul>`;
        guestInfo.companions.forEach(companion => {
            output += `<li>${companion.name}</li>`;
        });
        output += `</ul>`;
        modalContent.innerHTML = output;
    } else {
        modalContent.innerHTML = "<p class='error'>No fuimos capaz de encontrarte.</p>";
    }

    document.getElementById('myModal').style.display = "block";
}

// Modal close functionality (remains the same)
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
    