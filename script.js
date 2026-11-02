const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

for (const card of cards) {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('dragend', dragend);
}

for (const list of lists) {
  list.addEventListener('dragover', dragOver);
  list.addEventListener('dragenter', dragEnter);
  list.addEventListener('dragleave', dragLeave); // Waa la saxay (dragleave)
  list.addEventListener('drop', dragDrop); // Waa la saxay (Event-ka saxda ah waa 'drop')
}

function dragstart(ev) {
  ev.dataTransfer.setData('text/plain', this.id);
}

function dragend(ev) {
  console.log('Jiidistii waa dhammaatay');
}

function dragOver(ev) {
  ev.preventDefault();
}

// Magacyada shaqooyinka waa inay la mid ahaadaan kuwa kore
function dragLeave(ev) {
  this.classList.remove('over');
}

function dragEnter(ev) {
  ev.preventDefault();
  this.classList.add('over');
}

function dragDrop(ev) {
  ev.preventDefault(); // Way wanaagsan tahay in la joojiyo falka caadiga ah ee browser-ka
  const data = ev.dataTransfer.getData('text/plain');
  const card = document.getElementById(data);
  if (card) {
    this.appendChild(card);
  }
  this.classList.remove('over');
}
