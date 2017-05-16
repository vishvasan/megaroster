const items = {}
const list = document.getElementById('demo');

function changeText2() {
    const personName = document.getElementById('personName').value;
    document.getElementById('boldStuff2').innerHTML = personName;
    const entry = document.createElement('li');
    entry.appendChild(document.createTextNode(personName));
    list.appendChild(entry);
}