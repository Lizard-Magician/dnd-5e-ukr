var data = JSON.parse(magicks);

function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""

    for (i = 0; i < data.length; i++) {
        let obj = data[i];

        if (obj.Name.toLowerCase().includes(input) || obj.NameUkr.toLowerCase().includes(input)) {
            const elem = document.createElement("li")
            elem.innerHTML = `${obj.Name} - ${obj.NameUkr} - ${obj.Level} - ${obj.School} - ${obj.Casting_time} - ${obj.Distance} - ${obj.Components} - ${obj.Duration} - ${obj.Description}`
            x.appendChild(elem)
        }
    }
}