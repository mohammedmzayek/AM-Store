import React from "react";
import { useState, useEffect } from "react";
import "../../styles/clock.css";
function Clock() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval;

  const countDown = () => {
    const destination = new Date("9/18/2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;

      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (different < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, interval);
  };
  useEffect(() => {
    countDown();
  });

  return (
    <div className="clock_wrapper d-flex align-items-center gap-3">
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{days}</h1>
          <h5 className="text-white fs-6">ايام</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{hours}</h1>
          <h5 className="text-white fs-6">ساعات</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{minutes}</h1>
          <h5 className="text-white fs-6">دقائق</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock_data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{seconds}</h1>
          <h5 className="text-white fs-6">ثواني</h5>
        </div>
      </div>
    </div>
  );
}

export default Clock;
