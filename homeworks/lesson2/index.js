let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let expandeture = prompt("“Введите обязательную статью расходов в этом месяце”");
let expandetureMoney = prompt("“Во сколько обойдется?”");

let appData = {
    mounthMoney: money,
    date: time, 
    expenses: {
        expandeture: expandetureMoney
    },
    optionalExpenses: "",
    income: [],
    savings: false
}

// console.log((appData.mounthMoney - appData.expenses.expandeture) / 30);

alert((appData.mounthMoney - appData.expenses.expandeture) / 30);