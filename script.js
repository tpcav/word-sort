const list = [    'ache', 'acid', 'acre', 'aide', 'alan', 'alec', 'ally', 'alto', 'andy',
'anna', 'apex', 'arch', 'area', 'aria', 'army', 'arse', 'atom', 'aunt',
'aura', 'auto', 'axis', 'axle']

// First word in list
first_word = list[0]
const firstWord = document.querySelector("#firstWord");
firstWord.innerHTML = (first_word);

const wordCount = document.querySelector("#wordCount");
wordCount.innerHTML = (list.length);

const question = document.querySelector("#question");
question.innerHTML = ("Do you know this word?");

// const wordList = document.querySelector("#wordList");
// wordList.innerHTML = (list);

// New Yes/No list from sort
yesList = []
noList = []

const yesButton = document.querySelector('#yesButton');

// Yes button listener
yesButton.addEventListener('click', ()=> {
  yesAnswer();
});


// No button listener
const noButton = document.querySelector('#noButton');
noButton.addEventListener('click', ()=> {
  noAnswer();
});

// Adds yes word to new list, removes from old list
const yesAnswer = () => {
  yesList.push(list[0]);
  list.shift();
  
  first_word = list[0]
  const firstWord = document.querySelector("#firstWord");
  firstWord.innerHTML = (first_word);
  
  if (list.length === 0) {
   const emptyList = document.querySelector("#emptyList");
   emptyList.innerHTML = ("The list is empty.");
  };
  
  const yesLists = document.querySelector("#yesList");
  yesLists.innerHTML = ("Unknown Words: ", yesList);
  
  const yesAnswer = document.querySelector("#wordCount");
  yesAnswer.innerHTML = (list.length);
};

// Adds no word to new list, removes from old list
const noAnswer = () => {
  noList.push(list[0]);
  list.shift();
  
  first_word = list[0]
  const firstWord = document.querySelector("#firstWord");
  firstWord.innerHTML = (first_word);
  
  if (list.length === 0) {
    const emptyList = document.querySelector("#wordList");
    emptyList.innerHTML = ("The list is empty.");
  };
  
  const noLists = document.querySelector("#noList");
  noLists.innerHTML = ("Unknown Words: ", noList);
  
  const noAnswer = document.querySelector("#wordCount");
  noAnswer.innerHTML = (list.length);
};