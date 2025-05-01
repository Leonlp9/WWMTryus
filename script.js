//first span child of the lobbyinfo
document.getElementById("lobbyinfo").children[0].innerHTML = alleFragen.fragen50.length + alleFragen.fragen1000.length + alleFragen.fragen32000.length + alleFragen.fragen1mio.length;

// Funktion, die aus einem Fragenarray n Fragen auswählt und in localStorage speichert
function selectQuestions(arr, storageKey, count) {
    // Aus localStorage bereits benutzte Fragen holen (hier anhand des "frage"-Textes)
    let used = JSON.parse(localStorage.getItem(storageKey)) || [];

    // Verfügbare Fragen filtern, die noch nicht als genutzt markiert sind
    let available = arr.filter(q => !used.includes(q.frage));

    // Wenn nicht genügend Fragen vorhanden sind, localStorage zurücksetzen
    if (available.length < count) {
        used = [];
        available = arr;
    }

    // Mische und wähle die gewünschten Fragen
    available = shuffleArray(available);
    let selected = available.slice(0, count);

    // Markiere die neuen Fragen als genutzt
    let newUsed = used.concat(selected.map(q => q.frage));
    localStorage.setItem(storageKey, JSON.stringify(newUsed));

    return selected;
}

// Beispielhaftes Ersetzen der bisherigen Auswahl des "fragen"-Arrays:
let fragen = [
    ...selectQuestions(alleFragen.fragen50, "usedFragen50", 5),
    ...selectQuestions(alleFragen.fragen1000, "usedFragen1000", 4),
    ...selectQuestions(alleFragen.fragen32000, "usedFragen32000", 4),
    ...selectQuestions(alleFragen.fragen1mio, "usedFragen1mio", 2)
];

const gewinn = [
    "50 Euro",
    "100 Euro",
    "200 Euro",
    "300 Euro",
    "500 Euro",
    "1.000 Euro",
    "2.000 Euro",
    "4.000 Euro",
    "8.000 Euro",
    "16.000 Euro",
    "32.000 Euro",
    "64.000 Euro",
    "125.000 Euro",
    "500.000 Euro",
    "1 MILLION Euro",
]

let aktuelleFrageIndex = -1;
let verwendeter50_50_Joker = false;
let verwendeterPublikumsjoker = false;
let verwendeterDiscordJoker = false;

//shuffle the answers
fragen.forEach(frage => {
    frage.antworten = shuffleArray(frage.antworten);
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Ein kryptografisch sicherer Zufallswert
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);
        // Berechne einen Index im Bereich [0,i]
        const j = Math.floor(randomBuffer[0] / (0xFFFFFFFF + 1) * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const start = new Audio("start.mp3");
const neueFrage = new Audio("neueFrage.mp3");
const fragenSound = new Audio("frage.mp3");
const richtig = new Audio("richtig.mp3");
const falsch = new Audio("falsch.mp3");
const final = new Audio("final.mp3");
const board = new Audio("board.mp3");
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
    document.getElementById("lobbyinfo").style.display = "none";
    document.getElementById("chat").style.display = "none";
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
        document.getElementById("chat").style.display = "block";
        verwendeterPublikumsjoker = true;

        jokerButton2.disabled = true;
        jokerButton2.classList.add("deaktiviert");
    });
    if (!verwendeterPublikumsjoker) {
        jokerContainer.appendChild(jokerButton2);
    }

    const jokerButton3 = document.createElement("button");
    jokerButton3.textContent = "Discord-Joker";
    jokerButton3.classList.add("joker-button");
    jokerButton3.addEventListener("click", () => {
        verwendeterDiscordJoker = true;

        jokerButton3.disabled = true;
        jokerButton3.classList.add("deaktiviert");
    } );
    if (!verwendeterDiscordJoker) {
        jokerContainer.appendChild(jokerButton3);
    }

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
                zeigeGewinnÜbersicht(() => zeigeFrage(aktuelleFrageIndex));
            } else {
                zeigeGewinn();
            }
        }, 6000); // Nur 1 Sekunde Verzögerung bis zur Übersicht
    } else {
        falsch.play();
        setTimeout(() => {
            zeigeVerloren();
        }, 1000);
    }
}

function zeigeGewinnÜbersicht(callback) {
    board.play();
    document.getElementById("chat").style.display = "none";
    const frageContainer = document.getElementById("frage-container");
    frageContainer.innerHTML = "";

    const logo = document.getElementById("logo");
    logo.style.top = "-25vmin";

    const gewinnContainer = document.getElementById("gewinn-uebersicht");
    gewinnContainer.innerHTML = "";
    gewinnContainer.classList.add("uebersicht-aktiv");

    const weiterButton = document.createElement("button");
    weiterButton.textContent = "Nächste Frage";
    weiterButton.classList.add("cheat-button");
    weiterButton.addEventListener("click", () => {
        board.pause();
        gewinnContainer.classList.remove("uebersicht-aktiv");
        logo.style.top = "25%";
        setTimeout(() => {
            callback();
        }, 500);
    });
    gewinnContainer.appendChild(weiterButton);

    gewinn.forEach((betrag, index) => {
        const eintrag = document.createElement("div");
        eintrag.textContent = betrag;
        eintrag.classList.add("gewinn-eintrag");
        if (index === aktuelleFrageIndex) {
            eintrag.classList.add("aktuell");
        }
        gewinnContainer.appendChild(eintrag);
    });

    const logoimg = document.createElement("img");
    logoimg.src = "img.png";
    logoimg.alt = "Logo";
    logoimg.style.width = "150px";
    logoimg.style.height = "150px";
    logoimg.style.margin = "10px auto";
    gewinnContainer.appendChild(logoimg);
}


function zeigeGewinn() {
    richtig.pause();
    final.play();

    const frageContainer = document.getElementById("frage-container");
    frageContainer.innerHTML = "";

    const gewinnContainer = document.getElementById("gewinn-container");
    gewinnContainer.innerHTML = "";
    gewinnContainer.style.display = "block";

    const gewinnText = document.createElement("h2");
    gewinnText.textContent = "Herzlichen Glückwunsch! Du hast gewonnen: 1 MILLION Euro!";
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
            zeigeGewinnÜbersicht(() => zeigeFrage(aktuelleFrageIndex));
        } else {
            zeigeGewinn();
        }
        verlorenContainer.style.display = "none";
    });

    verlorenContainer.appendChild(cheatButton);
}

const globalEmotesUrl = `https://api.allorigins.win/get?url=${encodeURIComponent('https://emotes.adamcy.pl/v1/global/emotes/twitch.bttv.7tv.ffz')}`;
const emotesUrl = `https://api.allorigins.win/get?url=${encodeURIComponent('https://emotes.adamcy.pl/v1/channel/tryus/emotes/bttv.7tv.ffz')}`;
let emotes = {};

// Fetch emotes data
fetch(emotesUrl)
    .then(response => response.json())
    .then(data => {
        const parsedData = JSON.parse(data.contents);
        parsedData.forEach(emote => {
            emotes[emote.code] = emote.urls[emote.urls.length - 2].url;
        });

        const chatList = document.getElementById("chat");
        const chat = document.createElement('div');
        chat.innerHTML = `Loaded ${parsedData.length} 7tv emotes`;
        chatList.appendChild(chat);

        setTimeout(() => {
            chat.classList.add('hidden');
            setTimeout(() => {
                chatList.removeChild(chat);
            }, 500);
        }, 3000);
    });

fetch(globalEmotesUrl)
    .then(response => response.json())
    .then(data => {
        const parsedData = JSON.parse(data.contents);
        parsedData.forEach(emote => {
            emotes[emote.code] = emote.urls[emote.urls.length - 2].url;
        });

        const chatList = document.getElementById("chat");
        const chat = document.createElement('div');
        chat.innerHTML = `Loaded ${parsedData.length} global emotes`;
        chatList.appendChild(chat);

        setTimeout(() => {
            chat.classList.add('hidden');
            setTimeout(() => {
                chatList.removeChild(chat);
            }, 500);
        }, 3000);
    });


let twitch = new WebSocket("wss://irc-ws.chat.twitch.tv:443");

function setupTwitchWebSocket() {
    twitch.onopen = () => {
        console.log("Verbunden mit Twitch IRC");

        twitch.send("PASS SCHMOOPIIE");
        twitch.send("NICK justinfan12345");
        twitch.send("CAP REQ :twitch.tv/tags twitch.tv/commands");
        twitch.send("JOIN #tryus");

        const chatList = document.getElementById("chat");
        const chat = document.createElement('div');
        chat.innerHTML = `Verbunden mit Twitch IRC`;
        chatList.appendChild(chat);

        setTimeout(() => {
            chat.classList.add('hidden');
            setTimeout(() => {
                chatList.removeChild(chat);
            }, 500);
        }, 3000);
    };
}

setupTwitchWebSocket();

twitch.onmessage = (event) => {
    const messages = event.data.split("\r\n");

    messages.forEach((message) => {
        if (message.includes("PRIVMSG")) {

            const tagPart = message.split(" ")[0];
            const userPart = message.split("!")[0].substring(1);
            const msgPart = message.split(`PRIVMSG #tryus :`)[1];

            if (!msgPart) return;

            const tags = parseTags(tagPart);
            const displayName = tags["display-name"] || userPart;
            const color = tags["color"] || "#ffffff";
            const roles = getUserRoles(tags["badges"]);

            const notShowingUsers = ["streamelements", "nightbot", "moobot", "streamlabs"];
            if (notShowingUsers.includes(displayName.toLowerCase())) return;

            const userBadge = badge[roles] || "";

            const chatList = document.getElementById("chat");

            const chat = document.createElement('div');
            chat.innerHTML = `${userBadge} <span style="color:${color}" class="${roles}">${displayName}</span>: ${replaceEmotes(msgPart, tags["emotes"])}`;
            chatList.appendChild(chat);

            chat.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                chat.classList.add('hidden');
                setTimeout(() => {
                    chatList.removeChild(chat);
                }, 500);
            }, 60000);
        }

        if (message.startsWith("PING")) {
            twitch.send("PONG :tmi.twitch.tv");
        }
    });
};

const badge = {
    broadcaster: "👑",
    mod: "🛡️",
    vip: "🌟",
    subscriber: "💎"
};

function parseTags(tagString) {
    const tags = {};
    tagString.substring(1).split(";").forEach(tag => {
        const [key, value] = tag.split("=");
        tags[key] = value || "";
    });
    return tags;
}

function getUserRoles(badges) {
    if (!badges) return "";
    if (badges.includes("broadcaster")) return "broadcaster";
    if (badges.includes("moderator")) return "mod";
    if (badges.includes("vip")) return "vip";
    if (badges.includes("subscriber")) return "subscriber";
    return "";
}

function replaceEmotes(message, emotesTag) {
    if (emotesTag) {
        const emoteList = emotesTag.split('/');
        const emotePositions = [];

        emoteList.forEach(emote => {
            const [id, positions] = emote.split(':');
            positions.split(',').forEach(position => {
                const [start, end] = position.split('-').map(Number);
                emotePositions.push({ start, end, id });
            });
        });

        // Sortiere die Emote-Positionen nach Startindex
        emotePositions.sort((a, b) => a.start - b.start);

        // Ersetze Emotes im Message-String
        let offset = 0;
        emotePositions.forEach(({ start, end, id }) => {
            const emoteCode = message.substring(start + offset, end + offset + 1);
            const emoteImg = `<img src="https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/dark/1.0" alt="${emoteCode}" />`;
            message = message.substring(0, start + offset) + emoteImg + message.substring(end + offset + 1);
            offset += emoteImg.length - (end - start + 1);
        });
    }

    // Ersetze restliche Wörter NUR in Textteilen außerhalb von HTML-Tags
    const parts = message.split(/(<[^>]+>)/g);
    for (let i = 0; i < parts.length; i++) {
        if (!parts[i].startsWith("<")) {
            parts[i] = parts[i].replace(/\b\w+\b/g, word => {
                return emotes[word] ? `<img src="${emotes[word]}" alt="${word}" />` : word;
            });
        }
    }
    return parts.join("");
}


// chat ist fixed. Mach dass man mit drag es verschieben kann
const chatContainer = document.getElementById("chat");
let isDragging = false;
let offsetX, offsetY;
chatContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - chatContainer.getBoundingClientRect().left;
    offsetY = e.clientY - chatContainer.getBoundingClientRect().top;
});
chatContainer.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const newLeft = e.clientX - offsetX;
        const newTop = e.clientY - offsetY;

        // Begrenzungen berechnen
        const containerRect = chatContainer.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const maxLeft = windowWidth - containerRect.width;
        const maxTop = windowHeight - containerRect.height;

        // Begrenzte Positionen setzen
        chatContainer.style.left = `${Math.min(Math.max(newLeft, 0), maxLeft)}px`;
        chatContainer.style.top = `${Math.min(Math.max(newTop, 0), maxTop)}px`;
    }
});
chatContainer.addEventListener("touchmove", (e) => {
    if (isDragging) {
        const newLeft = e.touches[0].clientX - offsetX;
        const newTop = e.touches[0].clientY - offsetY;

        // Begrenzungen berechnen
        const containerRect = chatContainer.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const maxLeft = windowWidth - containerRect.width;
        const maxTop = windowHeight - containerRect.height;

        // Begrenzte Positionen setzen
        chatContainer.style.left = `${Math.min(Math.max(newLeft, 0), maxLeft)}px`;
        chatContainer.style.top = `${Math.min(Math.max(newTop, 0), maxTop)}px`;
    }
});
chatContainer.addEventListener("mouseup", () => {
    isDragging = false;
});
chatContainer.addEventListener("mouseleave", () => {
    isDragging = false;
});
chatContainer.addEventListener("touchstart", (e) => {
    isDragging = true;
    offsetX = e.touches[0].clientX - chatContainer.getBoundingClientRect().left;
    offsetY = e.touches[0].clientY - chatContainer.getBoundingClientRect().top;
});

chatContainer.addEventListener("touchend", () => {
    isDragging = false;
});
chatContainer.addEventListener("touchcancel", () => {
    isDragging = false;
});
