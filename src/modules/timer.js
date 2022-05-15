const timer = (deadline) => {
  const firstTimer = (deadline) => {
    const timerDays = document.querySelectorAll(".count_1 span")[0];
    const timerHours = document.querySelectorAll(".count_2 span")[0];
    const timerMinutes = document.querySelectorAll(".count_3 span")[0];
    const timerSeconds = document.querySelectorAll(".count_4 span")[0];

    const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000;
      let days = Math.floor(timeRemaining / 60 / 60 / 24);
      let hours = Math.floor((timeRemaining / 60 / 60) % 24);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let seconds = Math.floor(timeRemaining % 60);

      return { timeRemaining, days, hours, minutes, seconds };
    };

    const updateClock = () => {
      let getTime = getTimeRemaining();

      if (getTime.timeRemaining > 0) {
        if (getTime.days < 10) {
          timerDays.textContent = "0" + getTime.days;
        } else {
          timerDays.textContent = getTime.days;
        }
        if (getTime.hours < 10) {
          timerHours.textContent = "0" + getTime.hours;
        } else {
          timerHours.textContent = getTime.hours;
        }

        if (getTime.minutes < 10) {
          timerMinutes.textContent = "0" + getTime.minutes;
        } else {
          timerMinutes.textContent = getTime.minutes;
        }

        if (getTime.seconds < 10) {
          timerSeconds.textContent = "0" + getTime.seconds;
        } else {
          timerSeconds.textContent = getTime.seconds;
        }
      } else if (getTime.timeRemaining <= 0) {
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
        clearInterval(intervalID);
      }
    };
    let intervalID = setInterval(updateClock, 1000);

    // setInterval(updateClock, 1000);
  };

  const secondtTimer = (deadline) => {
    const timerDays = document.querySelectorAll(".count_1 span")[1];
    const timerHours = document.querySelectorAll(".count_2 span")[1];
    const timerMinutes = document.querySelectorAll(".count_3 span")[1];
    const timerSeconds = document.querySelectorAll(".count_4 span")[1];

    const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000;
      let days = Math.floor(timeRemaining / 60 / 60 / 24);
      let hours = Math.floor((timeRemaining / 60 / 60) % 24);
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let seconds = Math.floor(timeRemaining % 60);

      return { timeRemaining, days, hours, minutes, seconds };
    };

    const updateClock = () => {
      let getTime = getTimeRemaining();

      if (getTime.timeRemaining > 0) {
        if (getTime.days < 10) {
          timerDays.textContent = "0" + getTime.days;
        } else {
          timerDays.textContent = getTime.days;
        }
        if (getTime.hours < 10) {
          timerHours.textContent = "0" + getTime.hours;
        } else {
          timerHours.textContent = getTime.hours;
        }

        if (getTime.minutes < 10) {
          timerMinutes.textContent = "0" + getTime.minutes;
        } else {
          timerMinutes.textContent = getTime.minutes;
        }

        if (getTime.seconds < 10) {
          timerSeconds.textContent = "0" + getTime.seconds;
        } else {
          timerSeconds.textContent = getTime.seconds;
        }
      } else if (getTime.timeRemaining <= 0) {
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
        clearInterval(intervalID);
      }
    };
    let intervalID = setInterval(updateClock, 1000);

    // setInterval(updateClock, 1000);
  };
  firstTimer(deadline);
  secondtTimer(deadline);
};

export default timer;
