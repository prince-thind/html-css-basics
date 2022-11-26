const mainText =
  "ਕਾਲੀ ਰਾਤ ਦੀ ਸਿਆਹੀ ਉੱਤੇ\nਚੱਦ ਦੀ ਗਵਾਹੀ ਉੱਤੇ\nਸੋਚ ਦੇ ਕੋਰੇ ਕਾਗਜ਼ ਤੇ\nਇੱਕ ਅਖਰ ਮੈਂ ਬਣ ਜਾਵਾਂ\nਤੂੰ ਭੁੱਲੇ ਤਾ ਤੇਰੀ ਮਰਜ਼ੀ \nਮੈਂ ਭੁੱਲਾਂ ਤਾਂ ਮਰ ਜਾਵਾਂ";

const target = document.querySelector("#target");
target.textContent = mainText;
target.setAttribute("data-neon", mainText);
