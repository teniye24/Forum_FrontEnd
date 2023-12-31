import React, { useContext, useEffect, useState } from "react";
import "./Question.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function Question() {
  const [form, setForm] = useState({});
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.user) navigate("/login");
  }, [userData.user, navigate]);

  //importing global state from context
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // console.log("ask question>>> form data is being registered");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      //sending data to be registered in database
      await axios.post(`$(process.env.REACT_APP_base_url)/api/questions/create`, {
        question: form.question,
        question_description: form.questionDescription,
        user_id: userData.user.id,
      });
     
      //navigate to homepage once the question is posted
      navigate("/");
      // console.log("ask question>>> 2");
    } catch (error) {
      console.log("problem ==>", error.response.data.msg);
      console.log("oops>>>...watchout");
    }
  };

  // document.getElementById("email").value = userData.user?.display_name;
  return (
    <div className="container">
      <div className="askcover">
        <div className="askcover__steps">
          <h3>Steps to Write a good question</h3>
          <ul>
            <li>Summarize in a one-line title</li>
            <li>Describe in more detail</li>
            <li>Describe what you expect to happen</li>
            <li>Review your question and post</li>
          </ul>
        </div>
        <div className="askcover_question">
          <div className="askcover_ask">
            <h3>Ask question</h3>
            <Link to="/questionList">Go to question page</Link>
          </div>
          <div className="askcover__input">
            <div className="form_container">
              <form onSubmit={handleSubmit}>
                <input
                  name="question"
                  type="text"
                  className="askcover__qtitle"
                  placeholder="Title"
                  onChange={handleChange}
                />
                <br />
                <br />
                <textarea
                  name="description"
                  type="text"
                  placeholder="Question Description"
                  onChange={handleChange}
                  style={{
                    border: "1px solid rgb(191, 191, 191)",
                    borderRadius: "5px ",
                    width: "93%",
                    resize: "none",
                    height: "150px",
                  }}
                ></textarea>
                <button className="btnpost" type="submit">Post Your Question</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question;
