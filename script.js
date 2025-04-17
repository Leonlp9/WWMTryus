let fragen = [
    {
        frage: "Was ist die Hauptstadt von Deutschland?",
        antworten: [
            { text: "Berlin", korrekt: true },
            { text: "München", korrekt: false },
            { text: "Hamburg", korrekt: false },
            { text: "Frankfurt", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Was ist die Hauptstadt von Frankreich?",
        antworten: [
            { text: "Paris", korrekt: true },
            { text: "Lyon", korrekt: false },
            { text: "Marseille", korrekt: false },
            { text: "Nizza", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Was ist die Hauptstadt von Italien?",
        antworten: [
            { text: "Rom", korrekt: true },
            { text: "Mailand", korrekt: false },
            { text: "Venedig", korrekt: false },
            { text: "Florenz", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    }
]

const gewinn = [
    "€ 50",
    "€ 100",
    "€ 200",
    "€ 300",
    "€ 500",
    "€ 1000",
    "€ 2000",
    "€ 4000",
    "€ 8000",
    "€ 16000",
    "€ 32000",
    "€ 64000",
    "€ 125000",
    "€ 250000",
    "€ 500000",
    "€ 1000000"
]

let aktuelleFrageIndex = -1;

//shuffle the answers
fragen.forEach(frage => {
    frage.antworten = shuffleArray(frage.antworten);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

window.addEventListener("click", function (event) {
    if (aktuelleFrageIndex === -1) {
        aktuelleFrageIndex = 0;
        zeigeFrage(aktuelleFrageIndex);
        document.getElementById("logo").classList.add("logo-off");
    }
})

function zeigeFrage(index) {
    const frageContainer = document.getElementById("frage-container");
    frageContainer.innerHTML = "";

    const frage = document.createElement("h2");
    frage.textContent = fragen[index].frage;
    frageContainer.appendChild(frage);

    if (fragen[index].bild !== null) {
        const bild = document.createElement("img");
        bild.src = fragen[index].bild;
        bild.alt = "Bild zur Frage";
        bild.classList.add("frage-bild");
        frageContainer.appendChild(bild);
    }


    const antwortenContainer = document.createElement("div");
    antwortenContainer.classList.add("antworten-container");
    fragen[index].antworten.forEach((antwort, i) => {
        const antwortButton = document.createElement("button");
        antwortButton.textContent = antwort.text;
        antwortButton.classList.add("antwort-button");
        antwortButton.addEventListener("click", () => {
            wähleAntwort(index, i);
        });
        antwortenContainer.appendChild(antwortButton);
    });
    frageContainer.appendChild(antwortenContainer);
}

function wähleAntwort(frageIndex, antwortIndex) {
    const frage = fragen[frageIndex];
    frage.selectedAntwort = antwortIndex;

    const antwortButtons = document.querySelectorAll(".antwort-button");
    antwortButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === antwortIndex) {
            button.classList.add("selected");
        }
        if (frage.antworten[index].korrekt) {
            button.classList.add("korrekt");
        } else {
            button.classList.add("falsch");
        }
    });

    setTimeout(() => {
        if (frage.antworten[antwortIndex].korrekt) {
            aktuelleFrageIndex++;
            if (aktuelleFrageIndex < fragen.length) {
                zeigeFrage(aktuelleFrageIndex);
            } else {
                zeigeGewinn();
            }
        } else {
            zeigeVerloren();
        }
    }, 2000);
}

function zeigeGewinn() {
    const gewinnContainer = document.getElementById("gewinn-container");
    gewinnContainer.innerHTML = "";

    const gewinnText = document.createElement("h2");
    gewinnText.textContent = "Herzlichen Glückwunsch! Du hast gewonnen: " + gewinn[aktuelleFrageIndex];
    gewinnContainer.appendChild(gewinnText);
}

function zeigeVerloren() {
    const verlorenContainer = document.getElementById("verloren-container");
    verlorenContainer.innerHTML = "";

    const verlorenText = document.createElement("h2");
    verlorenText.textContent = "Leider verloren!";
    verlorenContainer.appendChild(verlorenText);
}