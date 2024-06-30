
const cities = ["Москва", "Париж", "Лондон", "Токио"];
const temperatures = [];
let minTemp = 1000;
let maxTemp = -1000;

for (let i = 0; i < cities.length; i++) {
    let temp = parseInt(prompt(`Введите температуру для города ${cities[i]}`));
    temperatures.push(temp);
    let listItem = document.createElement("li");
    listItem.textContent = `${cities[i]}: ${temp}°C`;
    document.getElementById("cityList").appendChild(listItem);
    
    if (temp < minTemp) {
        minTemp = temp;
    }
    if (temp > maxTemp) {
        maxTemp = temp;
    }
}

let minMaxInfo = document.createElement("p");
minMaxInfo.textContent = `Минимальная температура: ${minTemp}°C, Максимальная температура: ${maxTemp}°C`;
document.body.appendChild(minMaxInfo);
