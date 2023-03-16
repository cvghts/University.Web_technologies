let globalID = 0;

const quotes = [{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`
  }, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`
  }, {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: `Aristotle`
  }, {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    person: ` Steve Jobs`
  }, {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`
  }, {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`
  }, {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`
  }, {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`
  }, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`
  }, {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
  },];

  let quote = document.querySelector('.text');
  const btn = document.querySelector('.button');  
  let person = document.querySelector('.author');
  const leftArrow = document.querySelector('.quotes__arrowLeft');
  const rightArrow = document.querySelector('.quotes__arrowRight');

  quote.innerText = quotes[0].quote;
  person.innerText = quotes[0].person;

  btn.addEventListener('click', () => {
    globalID = Math.floor(Math.random() * quotes.length);
    let id = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[id].quote;
    person.innerText = quotes[id].person;
  });

  const checkboxTheme = document.getElementById('theme');

  checkboxTheme.addEventListener('change', (event) => {
    if(!event.target.checked) {
      document.head.querySelector('.theme_vars')
        .setAttribute('href', 'css/dark_variables.css');
    } else {
      document.head.querySelector('.theme_vars')
        .setAttribute('href', 'css/light_variables.css');
    }
  });

  leftArrow.addEventListener('click', () => {
    if(globalID == 0) 
      globalID = quotes.length - 1;
    else
      globalID--;
      
    quote.innerText = quotes[globalID].quote;
    person.innerText = quotes[globalID].person;
  });

  rightArrow.addEventListener('click', () => {
    if(globalID == quotes.length - 1) 
      globalID = 0;
    else
      globalID++;
      
    quote.innerText = quotes[globalID].quote;
    person.innerText = quotes[globalID].person;
  });