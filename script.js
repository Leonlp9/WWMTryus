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
        frage: "Was sieht man NICHT in Tryus Cam wenn er Streamt",
        antworten: [
            { text: "Bett", korrekt: false },
            { text: "Fernseher", korrekt: true },
            { text: "18 Schild", korrekt: false },
            { text: "Microphone", korrekt: false }
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
    "50 Euro",
    "100 Euro",
    "200 Euro",
    "300 Euro",
    "500 Euro",
    "1000 Euro",
    "2000 Euro",
    "4000 Euro",
    "8000 Euro",
    "16000 Euro",
    "32000 Euro",
    "64000 Euro",
    "125000 Euro",
    "250000 Euro",
    "500000 Euro",
    "1000000 Euro",
]

let aktuelleFrageIndex = -1;
let verwendeter50_50_Joker = false;
let verwendeterPublikumsjoker = false;

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
const neueFrage = new Audio("neueFrage.mp3");
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
    document.getElementById("particles-js").classList.remove("show");
    neueFrage.play();
    fragenSound.play();
    const frageContainer = document.getElementById("frage-container");
    frageContainer.innerHTML = "";

    const infosContainer = document.createElement("div");
    infosContainer.classList.add("infos-container");

    // Joker-Buttons hinzufügen
    const jokerContainer = document.createElement("div");
    jokerContainer.classList.add("joker-container");

    const jokerButton1 = document.createElement("button");
    jokerButton1.textContent = "50:50";
    jokerButton1.classList.add("joker-button");
    jokerButton1.addEventListener("click", () => {
        // Logik für 50:50-Joker
        const aktuelleFrage = fragen[aktuelleFrageIndex];
        const falscheAntworten = aktuelleFrage.antworten
            .map((antwort, index) => ({ ...antwort, index }))
            .filter(antwort => !antwort.korrekt);

        // Wähle zufällig zwei falsche Antworten aus
        const zuEntfernendeAntworten = shuffleArray(falscheAntworten).slice(0, 2);

        // Entferne die Antworten visuell und deaktiviere sie
        const antwortButtons = document.querySelectorAll(".antwort-button");
        zuEntfernendeAntworten.forEach(antwort => {
            const button = antwortButtons[antwort.index];
            button.classList.add("ausgeblendet");
            button.disabled = true;
        });

        // Deaktiviere den Joker-Button
        jokerButton1.disabled = true;
        jokerButton1.classList.add("deaktiviert");

        verwendeter50_50_Joker = true;
    });
    if (!verwendeter50_50_Joker) {
        jokerContainer.appendChild(jokerButton1);
    }

    const jokerButton2 = document.createElement("button");
    jokerButton2.textContent = "Chat-Joker";
    jokerButton2.classList.add("joker-button");
    jokerButton2.addEventListener("click", () => {
        // Logik für Publikumsjoker
        console.log("Publikumsjoker verwendet");
    });
    jokerContainer.appendChild(jokerButton2);

    infosContainer.appendChild(jokerContainer);

    // Textfeld für aktuelles Geld hinzufügen
    const geldContainer = document.createElement("div");
    geldContainer.classList.add("geld-container");
    geldContainer.textContent = gewinn[aktuelleFrageIndex] || "€ 0";
    infosContainer.appendChild(geldContainer);

    frageContainer.appendChild(infosContainer);

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
        antwortButton.innerHTML = "<span class='buchstabe'>" + String.fromCharCode(65 + i) + ":</span> " + antwort.text;
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
            if (!frage.antworten[antwortIndex].korrekt) {
                button.classList.add("falsch");
            }
        }
    });


    if (frage.antworten[antwortIndex].korrekt) {
        richtig.play();
        document.getElementById("particles-js").classList.add("show");

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
}

function zeigeGewinn() {
    const gewinnContainer = document.getElementById("gewinn-container");
    gewinnContainer.innerHTML = "";
    gewinnContainer.style.display = "block";

    const gewinnText = document.createElement("h2");
    gewinnText.textContent = "Herzlichen Glückwunsch! Du hast gewonnen: " + gewinn[aktuelleFrageIndex];
    gewinnContainer.appendChild(gewinnText);
}

function zeigeVerloren() {
    const verlorenContainer = document.getElementById("verloren-container");
    verlorenContainer.innerHTML = "";
    verlorenContainer.style.display = "block";

    const verlorenText = document.createElement("h2");
    verlorenText.textContent = "Leider verloren!";
    verlorenContainer.appendChild(verlorenText);

    //cheaten button um die nächste Frage zu sehen
    const cheatButton = document.createElement("button");
    cheatButton.textContent = "> Ich bin ein Cheater! <";
    cheatButton.classList.add("cheat-button");

    cheatButton.addEventListener("click", () => {
        aktuelleFrageIndex++;
        if (aktuelleFrageIndex < fragen.length) {
            zeigeFrage(aktuelleFrageIndex);
        } else {
            zeigeGewinn();
        }
        verlorenContainer.style.display = "none";
    });

    verlorenContainer.appendChild(cheatButton);
}