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
