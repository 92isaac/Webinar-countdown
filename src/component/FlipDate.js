import React, { useRef, useEffect, useState } from "react";
import Tick from "@pqina/flip";
import './countdown.css';
import "@pqina/flip/dist/flip.min.css";

export const FlipDate = ({ value }) => {
  const divRef = useRef();
  const tickRef = useRef();
  const [tickValue, setTickValue] = useState(value);

  useEffect(() => {
    const didInit = tick => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit
    });

    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  useEffect(() => {
    const deadline = new Date( "August 07, 2022"
    );

    const counter = Tick.count.down(deadline, {
      format: ["d", "h", "m", "s"]
    });

    // When the counter updates, update React's state value
    counter.onupdate = function(value) {
      setTickValue(value);
    };

    // return () => {
    //   counter.timer.stop();
    // };
  }, [value]);

  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = tickValue;
    }
  }, [tickValue]);

  return (
    <div ref={divRef} className="tick webinar-container">
    <h2>Webinar in</h2>
      <div data-repeat="true" className="span">
        <span data-view="flip" />
      </div>
    <h4>Check your email for the link to the webinar</h4>
    </div>
  );
};
