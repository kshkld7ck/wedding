function getNumber(number) {
    const num = number.toString();

    return [`<span>${num[0]}</span>`, `<span>${num[1]}</span>`]
}
let now = new Date();
let wedding = new Date(2021, 5, 12)

if (now < wedding) {
    var timerId =
        countdown(
            new Date(2021, 5, 12),
            function(ts) {
                const weddingDate = {
                    days: ts.days.toString().length > 1 ? ts.days.toString() : "0" + ts.days.toString(),
                    hours: ts.hours.toString().length > 1 ? ts.hours.toString() : "0" + ts.hours.toString(),
                    minutes: ts.minutes.toString().length > 1 ? ts.minutes.toString() : "0" + ts.minutes.toString(),
                    seconds: ts.seconds.toString().length > 1 ? ts.seconds.toString() : "0" + ts.seconds.toString(),
                }


                Object.keys(weddingDate).forEach((el) => {
                    if (weddingDate[el].toString()[1] == "0" && el == 'seconds') {
                        document.getElementById(`${el}_first`).classList.add('with_counter_end')
                        setTimeout(() => document.getElementById(`${el}_first`).classList.remove('with_counter_end'), 1000)
                    } else if (weddingDate[el].toString()[1] == "9" && el == 'seconds') {
                        document.getElementById(`${el}_first`).classList.add('with_counter_start')
                        setTimeout(() => document.getElementById(`${el}_first`).classList.remove('with_counter_start'), 1000)
                    }
                    document.getElementById(`${el}_first`).innerHTML = getNumber(weddingDate[el])[0];
                    document.getElementById(`${el}_second`).innerHTML = getNumber(weddingDate[el])[1];
                })

            },
            countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

} else {
    document.getElementById('days_first').innerHTML = 0;
    document.getElementById('days_second').innerHTML = 0;
    document.getElementById('hours_first').innerHTML = 0;
    document.getElementById('hours_second').innerHTML = 0;
    document.getElementById('minutes_first').innerHTML = 0;
    document.getElementById('minutes_second').innerHTML = 0;
    document.getElementById('seconds_first').innerHTML = 0;
    document.getElementById('seconds_second').innerHTML = 0;
}