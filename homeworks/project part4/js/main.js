let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

// start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов"),
                b = prompt('Во сколько обойдется?');
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет:' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    chooseExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let chooseExpenses = prompt('Введите необязательную статью расходов', '');
            appData.optionalExpenses.i = chooseExpenses;
        }
    },
    checkSavings() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        // console.log(items);
        appData.icome = items.split(', ');

        items.forEach(function(item, i, items){
            if (isNaN(i) && items == "" && items == null) {
                console.log('vrode')
                // i = i - 1;
                item = item - 1;
                items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            } else {
                // i = i - 1;
                console.log('ffffff');
            }
        })

        // for (let i = 0; i < 1; i++) {
            
            
            
            
        // }

        // while (isNaN(items) && items !== "" && items == null) {
        //     console.log(324);
        // }

        // for (let i = 0; i < 1; i++) {
        //     if ( (typeof(items)) === 'string' && (typeof(items)) != null && (typeof(b)) != null && items != '') {
        //         appData.income.push(prompt('Может что-то ещё?'));
        //         appData.icome.sort();
        //     } else {
        //         i = i - 1;
        //     }
        // }
        // appData.icome.sort();
                
    }
}

let btnStart = document.getElementById('start');
let arrResult = document.querySelectorAll('.result-table .value');
let expensesInput = document.querySelectorAll('.expenses-item');
let btnApprove = document.getElementsByTagName('button')[0];
let btnCalculate = document.getElementsByTagName('button')[2];
let optionalexpensesInput = document.querySelectorAll('optionalexpenses-item');
let chooseIncomeInput = document.querySelector('choose-income');
let checksavings = document.querySelector('checksavings');
let chooseSum = document.querySelector('choose-sum');
let choosePercent = document.querySelector('choose-percent');



// appData.chooseIncome();