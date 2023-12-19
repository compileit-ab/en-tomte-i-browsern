# En tomte i browsern - Chrome Extension 🎅

## Beskrivning

Välkommen till lucka nummer 19 i Compileits julkalender. Idag vill vi visa hur man enkelt kan bygga en helt egen Chrome Extension. "En tomte i browsern," är kanske inte den mest funktionella, men vi hoppas att den kan sprida lite glädje och kanske inspirera till nya ideér i dessa juletider. Nedan finner du både instruktioner för att ladda ner den tomte vi har skapat och instruktioner för att skapa din helt egen!

## För användare med lite/inga kodningskunskaper:

### Ladda ner vår tomte:

1. Spara ner detta GitHub-repository till din dator, du kan göra det genom att trycka på den gröna knappen "code" precis uppe till höger om denna fil och sedan "download zip" eller:

   ```bash
   git clone https://github.com/compileit/chrome-extension-santa.git
   ```

2. Öppna Chrome och gå till `chrome://extensions/`

3. Aktivera "Developer mode/Programmerarläge" längst upp till höger.

4. Klicka på "Load unpacked/Läs in okomprimerat tillägg" och välj mappen där du klonade detta repository.

5. Vår tomte i browsern bör nu visas i listan över installerade extensions. Tryck på ikonen och ha kul :)

## För användare som vill bygga sin egen tomte:

### Steg att följa:

1. **Skapa en mappstruktur:**
   Skapa en mapp för din extension med filer som manifest.json, popup.css, popup.html, background.js samt bilder (ikoner) om du behöver.

   Exempel:

   ```plaintext
   my_santa_extension/
   ├── manifest.json
   ├── popup.html
   ├── popup.css
   ├── icon16.png
   ├── icon48.png
   ├── icon128.png
   ```

2. **Skapa en manifest.json:**

Denna används för att definiera extensionens egenskaper och beteende. Manifestfilen fungerar som en slags konfigurationsfil och innehåller information om extensionens namn, version, ikon, filreferenser, behörigheter och andra viktiga inställningar.

Exempel:

```
{
  "manifest_version": 3,
  "name": "Ge din extension ett fint namn!",
  "version": "1.0",
  "description": "Beskriv vad din extension gör",
  "permissions": ["activeTab"],
  "action": {
    "default_title": "Klicka på tomten!",
    "default_popup": "popup.html"
  },
  "icons": {
    "16": "icon16.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
}

```

3. **Skapa en popup.html:**

Denna HTML-fil representerar innehållet i popup-fönstret som visas när användaren klickar på extensionens ikon i webbläsaren.

Ett exempel:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ho Ho Ho</title>
    <link rel="stylesheet" href="popup.css" />
  </head>
  <body>
    <div class="chat-container" id="chatContainer">
      <p class="chat-text">
        <span>Ho Ho Ho!</span> Klicka på mig om du vill höra nå skoj
      </p>
      <div class="chat-arrow"></div>
    </div>
    <div id="santa-container">
      <button id="message-btn">
        <img src="icon.png" alt="Icon" />
      </button>
    </div>
    <script type="module" src="popup.js"></script>
  </body>
</html>

```

4. **Skapa en popup.css:**

Denna fil används för att definiera utseendet för popup-fönstret i din Chrome Extension.

Exempel:

```
body {
  width: 500px;
  height: 500px;
  text-align: center;
  background-color: darkred;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#santa-container {
  animation: dance 4s infinite alternate;
  position: fixed;
  bottom: 20px;
}

#santa-container img {
  width: 300px;
  height: 300px;
}

#message-btn {
  background-color: transparent;
  border: none;
  padding-top: 24px;
}

#chatContainer {
  position: relative;
  max-width: 300px;
  padding: 10px 5px;
  border-radius: 10px;
  background-color: #fff;
  margin-top: 20px;
}

.chat-text {
  margin: 0;
  font-size: 24px;
  color: #000;

  span {
    font-weight: bold;
  }
}

.chat-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0;
  border-color: #fff transparent transparent transparent;
  bottom: -10px;
  left: 50%;
  margin-left: -10px;
}

@keyframes dance {
  0%,
  100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-20px);
  }
}


```

5. **Skapa en popup.js:**

Exempel:

I denna fil hanterar du din javascript - i detta exempel en simpel funktion som slumpar en sträng.

```
document.addEventListener("DOMContentLoaded", function () {
  const chatText = document.querySelector(".chat-text");

  document.getElementById("message-btn").addEventListener("click", function () {
    const messages = [
      "Visste du att jag och renarna tränar zumba om nätterna?",
      "Visste du att jag har en doktorsexamen i snöbollskrigstaktik?",
      "Vad jag har i min pepparkakssmoothie? CHIMNEY HOPS!!",
      "Visste du att mina renar har 364 dagar betald semester varje år?",
      "Visste du att jag har startat en ren-yoga-klass för att öka flexibiliteten hos mina fyrbenta vänner?",
      "Visste du att jag dansar varje kväll? Jag kallar det för 'Tomtetwist' ",
      "Vet du varför jag är så bra på att stava? Jag har ett stort elf-abet!",
      "Visste du att  mina renar inte bara kan flyga, de kan också spela fotboll?",
      "Jag är medlem i 'Tomtar Utan Gränser'? Vi skvallrar mest om påskharen",
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    chatText.textContent = randomMessage;
  });
});

```

6. **Ladda upp din extension lokalt:**

Hur man gör:

```plaintext
- Öppna Chrome och gå till chrome://extensions/.
- Aktivera "Developer mode/programmerarläge" längst upp till höger.
- Klicka på "Load unpacked/Läs in okomprimerad" och välj mappen där du har din extension.
```

## Nu borde din egen Extension finnas tillgänglig bland dina installerade, nu kan bara kreativiteten stoppa dig för vad du vill bygga ✨

## Bonus: publicera din extension

För att publicera en extension krävs några steg till samt du behöver skicka in den för review till Chrome Web Store. Du kan följa instruktionerna här: https://developer.chrome.com/docs/webstore/publish
