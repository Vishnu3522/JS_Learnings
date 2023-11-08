const customName = document.getElementById('txt');
const randomize = document.querySelector('.btn');
const story = document.querySelector('.story');
let storyText = 'It was 94 degrees Fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Daddy', 'Christmas'];
let insertY = ['the White House', 'Disneyland', 'the soup kitchen'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem).replace(/:insertz:/g, zItem);

  if (customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }
  story.textContent = newStory;
}

randomize.addEventListener('click', result);
