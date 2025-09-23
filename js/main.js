//User enters date
//Extract day and month
//date is compared to horoscopes
//alert or print correct horoscope

document.querySelector('#btn').addEventListener('click',horoGen)

function horoGen(){
    

    // input = document.querySelector('#dateInput').value;
    

    const monthInput = document.querySelector('#monthInput').value;
    const dayInput = document.querySelector('#dayInput').value;
    output = document.querySelector('#horoOutput');

    // const date = new Date(input);

    // const month = monthInput;
    const month = Number(monthInput);
    const day = Number(dayInput);
    // const month = date.getMonth() + 1; //because dates are an array starting at 0
    // const day = date.getDate() + 1; //because dates are an array starting at 0
    // inputMonth = document.querySelector('#monthInput').value;
    // inputDay = document.querySelector('#dayInput').value;
    // console.log(typeof(month));
    // console.log(month);
    // console.log(day);
    switch(month)
    {
        //Capricorn Dec 22 - Jan 19
        //Aquarius: January 20 - February 18
        case 1: 
            day > 0 && day < 20 ? output.innerText = "You are a Capricorn" : output.innerText = 'You are an Aquarius';
            break;
        case 2: //February
            day > 0 && day < 19 ? output.innerText = "You are an Aquarius" : output.innerText = 'You are an Pisces';
            break;
        case 3: //March
            day > 0 && day < 21 ? output.innerText = "You are a Pisces" : output.innerText = 'You are an Aries';
            break;
        case 4: //April
            day > 0 && day < 20 ? output.innerText = "You are a Aries" : output.innerText = 'You are an Taurus';
            break;
        case 5: //May
            day > 0 && day < 21 ? output.innerText = "You are a Taurus" : output.innerText = 'You are an Gemini';
            break;
        case 6: //June
            day > 0 && day < 20 ? output.innerText = "You are a Gemini" : output.innerText = 'You are an Cancer';
            break;
        case 7: //July
            day > 0 && day < 21 ? output.innerText = "You are a Cancer" : output.innerText = 'You are an Leo';
            break;
        case 8: //August
            day > 0 && day < 20 ? output.innerText = "You are a Leo" : output.innerText = 'You are an Virgo';
            break;
        case 9: //September
            day > 0 && day < 21 ? output.innerText = "You are a Virgo" : output.innerText = 'You are an Libra';
            break;
        case 10: //October
            day > 0 && day < 21 ? output.innerText = "You are a Libra" : output.innerText = 'You are an Scorpio';
            break;
        case 11: //November
            day > 0 && day < 20 ? output.innerText = "You are a Sagittarius" : output.innerText = 'You are an Capricorn';
            break;
        case 12: //December
            day > 0 && day < 21 ? output.innerText = "You are a Capricorn" : output.innerText = 'You are an Aquarius';
            break;
        default: 
            console.log("error!")
            // console.log(typeof(month));
        break
    }








    
    
    // output.innerText = `You were born ` + `${month}` + ` ` + `${day}` + `.` 
    // output.innerText = `${inputMonth}`+ ` ` + `${inputDay}`;
}