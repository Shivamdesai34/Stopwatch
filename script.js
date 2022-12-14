const watch = document.querySelector("#stopwatch");
      let millisecound = 0;
      let timer;
    //Begin the timer
      function timeStart(){
        watch.style.color = "#0f62fe";
        clearInterval(timer);
        timer = setInterval(() => {
          millisecound += 10;

          let dateTimer = new Date(millisecound);

          watch.innerHTML = 
          ('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
          ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
        }, 10);
      }

      //Stop the timer
      function timePaused() {
        watch.style.color = "red";
        clearInterval(timer);
      }
      //Timer reset
      function timeReset(){
        setInterval(timer)
        millisecound = 0;
        watch.innerHTML = "00:00:00:00";
      }

      document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.id === 'start') timeStart();
        if(el.id === 'pause') timePaused();
        if(el.id === 'reset') timeReset();
      })