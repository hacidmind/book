const inpKey = document.getElementById('key');
const inpValue = document.getElementById('value');
const btnInsert = document.getElementById('btn');
const isOutput = document.getElementById('output')

btnInsert.addEventListener('click', (e) => {
    e.preventDefault()

    const key = inpKey.value;
    const value = inpValue.value;
    // console.log(key);
    // console.log(value);

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload()
    }
    
});

for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    isOutput.innerHTML += `<li>${key}: ${value} </li>`;
}