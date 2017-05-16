const list = document.getElementById('demo');

function changeText() {
    const personName = document.getElementById('personName').value;
    document.getElementById('boldStuff').innerHTML = personName;
    const entry = document.createElement('li');
    entry.appendChild(document.createTextNode(personName));
    list.appendChild(entry);
}

function deleteText() {
    list.removeChild(list.childNodes[0]);

    
}