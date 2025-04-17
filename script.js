let fragen = [
    {
        frage: "Wer anderen eine Grube gräbt...",
        antworten: [
            { text: "Muss sie auch betonieren", korrekt: false },
            { text: "Hat einen Bagger", korrekt: false },
            { text: "Fällt selbst hinein", korrekt: true },
            { text: "Bekommt ein Bauzertifikat", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Wie viele Kontinente gibt es?",
        antworten: [
            { text: "5", korrekt: false },
            { text: "7", korrekt: true },
            { text: "4", korrekt: false },
            { text: "6", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Was ist der höchste Berg in Deutschland?",
        antworten: [
            { text: "Zugspitze", korrekt: true },
            { text: "Watzmann", korrekt: false },
            { text: "Mount Everest", korrekt: false },
            { text: "Brocken", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Welche Farben hat die Flagge von Griechenland?",
        antworten: [
            { text: "Rot und Weiß", korrekt: false },
            { text: "Blau und Weiß", korrekt: true },
            { text: "Grau und Blau", korrekt: false },
            { text: "Schwarz und Weiß", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Welches dieser Länder grenzt NICHT an Deutschland?",
        antworten: [
            { text: "Schweiz", korrekt: false },
            { text: "Luxemburg", korrekt: false },
            { text: "Italien", korrekt: true },
            { text: "Dänemark", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Was ist die aktuelle Fortnite Season?",
        antworten: [
            { text: "Kapitel 6 – Season 2", korrekt: true },
            { text: "Kapitel 5 - Season 9", korrekt: false },
            { text: "Kapitel 6 - Season 4", korrekt: false },
            { text: "Kapitel 6 - Season 7", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Was ist der Superlativ von gut?",
        antworten: [
            { text: "schlecht", korrekt: false },
            { text: "am besten", korrekt: true },
            { text: "besser", korrekt: false },
            { text: "güter", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Was hat die Ordnungszahl 1 im Periodensystem?",
        antworten: [
            { text: "Helium", korrekt: false },
            { text: "Sauerstoff", korrekt: false },
            { text: "Wasserstoff", korrekt: true },
            { text: "Kohlenstoff", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Was versteht man unter Demokratie?",
        antworten: [
            { text: "Eine Regierungsform, in der eine Person alle Entscheidungen trifft", korrekt: false },
            { text: "Eine Regierungsform, bei der das Volk mitbestimmen kann", korrekt: true },
            { text: "Eine Regierungsform, in der nur Könige regieren", korrekt: false },
            { text: "Eine Regierungsform, bei der die Regierung keine Macht hat", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Welcher Planet ist der Erde am nächsten?",
        antworten: [
            { text: "Mars", korrekt: false },
            { text: "Venus", korrekt: false },
            { text: "Merkur", korrekt: true },
            { text: "Jupiter", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Was sieht man NICHT in Tryus Cam wenn er Streamt spielt",
        antworten: [
            { text: "Bett", korrekt: false },
            { text: "Fernseher", korrekt: true },
            { text: "18 Schild", korrekt: false },
            { text: " Microphone ", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Wer war der erste Bundeskanzler von Deutschland?",
        antworten: [
            { text: "Frank-Walter Steinmeier", korrekt: false },
            { text: "Konrad Adenauer", korrekt: true },
            { text: "Adolf Hitler", korrekt: false },
            { text: "Willy Brandt", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "In welchem Jahr fiel die Berliner Mauer?",
        antworten: [
            { text: "1987", korrekt: false },
            { text: "1989", korrekt: true },
            { text: "1991", korrekt: false },
            { text: "1993", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Löse nach x auf: 2(x−4)=10",
        antworten: [
            { text: "12", korrekt: false },
            { text: "16", korrekt: false },
            { text: "9", korrekt: true },
            { text: "3", korrekt: false }
        ],
        bild: null,
        selectedAntwort: null
    },
    {
        frage: "Welche Stadt ist die Hauptstadt von Australien?",
        antworten: [
            { text: "Sydney", korrekt: false },
            { text: "Melbourne", korrekt: false },
            { text: "Canberra", korrekt: true },
            { text: "Brisbane", korrekt: false }
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

const start = new Audio("start.mp3");
const neueFrage = new Audio("neueFrage.m4a");
const fragenSound = new Audio("frage.mp3");
const richtig = new Audio("richtig.mp3");
const falsch = new Audio("falsch.mp3");
window.addEventListener("click", function () {
    if (aktuelleFrageIndex === -1) {
        start.play();
    }
});

document.getElementById("logo").addEventListener("click", function (event) {
    if (aktuelleFrageIndex === -1) {
        aktuelleFrageIndex = 0;
        zeigeFrage(aktuelleFrageIndex);
        document.getElementById("logo").classList.add("logo-off");
        start.pause();
    }
})

function zeigeFrage(index) {
    neueFrage.play();
    fragenSound.play();
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
    fragenSound.pause();
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


    if (frage.antworten[antwortIndex].korrekt) {
        richtig.play();

        setTimeout(() => {
            aktuelleFrageIndex++;
            if (aktuelleFrageIndex < fragen.length) {
                zeigeFrage(aktuelleFrageIndex);
            } else {
                zeigeGewinn();
            }
        }, 6000);
    } else {
        falsch.play();
        setTimeout(() => {
            zeigeVerloren();
        }, 1000);
    }

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
    }, 6000);
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