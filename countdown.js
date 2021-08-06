let countDownDate = new Date("Sep 28, 2021 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
    let now = new Date().getTime();
    
  // Find the distance between now and the count down date
    let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = zeroAdder(Math.floor(distance / (1000 * 60 * 60 * 24))) 
  let hours = zeroAdder( Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  let minutes = zeroAdder( Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
  let seconds = zeroAdder( Math.floor((distance % (1000 * 60)) / 1000))

    
  // Output the result in an element with id="demo"
    // $('.time-counter').children().remove()
    $('.time-counter').text(`${days} : ${hours} : ${minutes} : ${seconds}`)
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    $('.time-counter').text(`Lets Fucking go!!!`)

  }
}, 1000);

function zeroAdder(num){
    if(num<10){
        return '0'+num
    }
    else{
        return num
    }
}