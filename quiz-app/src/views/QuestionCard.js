import { useEffect, useState } from "react";
import Timer from "../components/Timer";
import Timer2 from "../components/Timer2";

function QuestionCard(props) {
  const [time, setTime] = useState(60);

  useEffect(() => {
    let timer = setInterval(() => {
        console.log(time);
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
  }, []);

  const { ques, counter, timerNewVal } = props;

  return (
    <>
      {time}
      <p className="card-text">
        <div className="d-flex justify-content-between">
          <p>
            Q.{counter + 1} {ques.que}
          </p>
        </div>
        {/* <ul className="lh-5">
                <li className="mb-2">HyperText Markup Language</li>
                <li className="mb-2">HightText Markup Language</li>
                <li className="mb-2">HightText Markdown Language</li>
                <li className="mb-2">None of the above</li>
              </ul> */}
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            disabled={timerNewVal === 0 ? true : false}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {ques.options[0]}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            disabled={timerNewVal === 0 ? true : false}
          />
          <label class="form-check-label" for="flexRadioDefault2">
            {ques.options[1]}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            disabled={timerNewVal === 0 ? true : false}
          />
          <label class="form-check-label" for="flexRadioDefault3">
            {ques.options[2]}
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
            disabled={timerNewVal === 0 ? true : false}
          />
          <label class="form-check-label" for="flexRadioDefault4">
            {ques.options[3]}
          </label>
        </div>
      </p>
    </>
  );
}

export default QuestionCard;
