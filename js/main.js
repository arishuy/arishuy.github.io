window.onload=function() {
    // Month,Day,Year,Hour,Minute,Second
    downTime('nov,27,2021,01:00:00');
  }
  function downTime(targetDate) {
    now = new Date();
    then = new Date(targetDate);
     difference = (then-now);
    days=Math.abs(Math.floor(difference/(60*60*1000*24)*1));
    hours=Math.abs(Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1));
    mins=Math.abs(Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1));
    secs=Math.abs(Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1));
    document.getElementById('daynumber').innerHTML = days;
    document.getElementById('hoursnumber').innerHTML = hours;
    document.getElementById('minutesnumber').innerHTML = mins;
    document.getElementById('secsnumber').innerHTML = secs;
    clearTimeout(downTime.to);
    downTime.to=setTimeout(function(){ downTime(targetDate); },1000);
  }