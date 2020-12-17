// function background aléatoir
random_bg();

function random_bg() {
    const bg = [
        'url("./assets/background1.jpeg")',
        'url("./assets/background2.jpeg")',
        'url("./assets/background3.jpeg")',
        'url("./assets/background4.jpeg")',
        'url("./assets/background5.jpeg")',
        'url("./assets/background6.jpeg")',
        'url("./assets/background7.jpeg")',
    ]
    const body = document.body;
    const random_img = bg[Math.floor(Math.random() * bg.length)];
    
    body.style.backgroundImage = random_img;
    
} 
setInterval(random_bg, 60000);



const days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


const show_day = () => {
    let today = new Date();
    let date = today.getDate();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    let timeToday = today.toLocaleTimeString()
    const display_date = document.querySelector('.display_date')
    const display_clock = document.querySelector('.display_clock')
    display_date.textContent = days[day] + ' ' + date + ' ' + months[month] + ' ' + year 
    display_clock.textContent = timeToday
}

setInterval(show_day, 1000)




