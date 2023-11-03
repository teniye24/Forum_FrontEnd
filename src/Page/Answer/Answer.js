import axios from "axios";
import "./Answer.css";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import QuestionsList from "../Question/QuestionList";
import { UserContext } from "../../Context/UserContext";

function Answer(props) {
  ////....///

  let { questionId } = useParams(); // returns ':7'
  // console.log(typeof questionId);
  // questionId = parseInt(questionId?.slice(1, 2));
  const [userData, setUserData] = useContext(UserContext);
  // console.log(userData);
  const [answer, setAnswer] = useState({});
  const [prevAnswers, setPrevAnswers] = useState([]);

  // get access to the data on state
  const location = useLocation();
  const { question, currentUserId } = location.state;
  // console.log("Location data", question);

  const handleChange = (e) => {
    console.log(e.target.value);
    setAnswer({
      answer: e.target.value,
      question_id: question.question_id,
      user_id: currentUserId,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(answer);

      const answerRes = await axios.post(
        "http://localhost:4001/api/answer/create",
        {
          answer: answer.answer,
          question_id: questionId,
          user_id: userData.user.id,
        }
      );
      // console.log(">>>>> post answer 1");
      // console.log(">>>>>>>>  your answer is submitted");
      // window.location.reload(false);

      // If set to true, the browser will do a complete
      //  page refresh from the server and not from the
      // cached version of the page.
    } catch (err) {
      // console.log(">>>>>>>> ERROR  your answer is not submitted");
      console.log("Answers can't be submitted: ", err);
    }
  };

  useEffect(() => {
    // setAskedQuestion(question);
    const fetchAnswers = async () => {
      const answers = await axios.get(
        `http://localhost:4001/api/answer`
      );
      console.log(answers.data);
      console.log(answers.data.data);
      // prevAnswers = answers.data.data;
      setPrevAnswers(() => {
        return answers.data?.data;
      });
      console.log(">>>>>>prevAnswers ", prevAnswers);
    };
    try {
      fetchAnswers();

      console.log(">>>>> Successfully fetched answers.");
    } catch (err) {
      console.log(">>>>> Can't fetch answers.");
    }
  }, []);
  return (
    <div className="answer">
      <div className="answer__top">
        <div className="answer__header">
          <p>Question</p>
          {question ? (
            <>
              <p>{question?.question}</p>
              <p>{question?.question_description}</p>
            </>
          ) : (
            <p>Loading question...</p>
          )}

          {/* <p>Question</p> */}
          {/* <p>'the question goes here?'{questionId}</p> */}
          {/* <p>{question?.question}</p> */}
          {/* <p>{question?.question_description}</p> */}
        </div>

        <div className="answer__title">
          {prevAnswers && prevAnswers.length !== 0 && (
            <h4>Answer From the others</h4>
          )}
          {/* {prevAnswers?.length !== 0 && <h4>Answer From the others</h4>} */}
        </div>
        <div className="answer__list">
          {prevAnswers &&
            prevAnswers?.map((prevAnswer) => (
              <div key={prevAnswer.answerId}>
                <QuestionsList show={prevAnswer} />
              </div>
            ))}
          {/* {prevAnswers?.map((prevAnswer) => (
            <div key={prevAnswer.answerId}>
              <QuestionsList show={prevAnswer} />
            </div>
          ))} */}
        </div>
      </div>
      <div className="answer__bottom">
        <div>
          <center>
            <div className="abtext">Answer The top Question</div>
          </center>
          <center>
            <Link to="/" className="answerext">
              Go to Question page
            </Link>
          </center>

          <div className="answer__form">
            <form onSubmit={handleSubmit}>
              <textarea
                onChange={handleChange}
                name="answerField"
                placeholder="Your Answer ..."
                style={{
                  border: "1px solid rgb(191, 191, 191)",
                  borderRadius: "5px ",
                  width: "100%",
                  resize: "none",
                  height: "150px",
                }}
              ></textarea>

              <button type="submit" className="answer__formBtn">
                Post your Answer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;