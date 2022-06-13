var data = JSON.parse(magic);

function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let listHolder = document.querySelector('#list-holder');
    listHolder.innerHTML = ""

    for (i = 0; i < data.length; i++) {
        let obj = data[i];

        if (obj.Name.toLowerCase().includes(input) || obj.NameUkr.toLowerCase().includes(input)) {
            const elem0 = document.createElement("dt")
            const elem1 = document.createElement("dt")
            const elem2 = document.createElement("dd")

            elem0.innerHTML = `${obj.NameUkr} - [ ${obj.Name} ] `
            elem1.innerHTML = `${obj.Level}, Школа: ${obj.School} 
            <br> Час створення: ${obj.Casting_time} 
            <br> Дистанція:${obj.Distance} 
            <br> Компоненти: <br> ${obj.Components} 
            <br> Тривалість: ${obj.Duration}`
            elem2.innerHTML = `${obj.Description}`
            listHolder.appendChild(elem0)
            listHolder.appendChild(elem1)
            listHolder.appendChild(elem2)
        }
    }
}
