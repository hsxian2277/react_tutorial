import React, { useState, useEffect } from "react";

const style = {
    container: {
        padding: "20px",
        border: "1px solid #E0E0E0",
        borderRadius: "15px",
        width: "max-content",
        marginBottom: "40px",
    },
    question: {
        fontWeight: "bold",
        marginBottom: "10px",
    },
    options: {
        marginBottom: "5px",
    },
    button: {
        marginTop: "10px",
        padding: "10px 15px",
        border: "none",
        backgroundColor: "#007BFF",
        color: "#FFF",
        fontSize: "14px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    feedback: {
        marginTop: "10px",
        fontSize: "14px",
    },
}

const QuizOption = ({ option, index, answer, setAnswer }) => {
    const handleChange = (e) => {
      setAnswer(e.target.value);
    }

    return (
        <>
          <input
              type="radio"
              onChange={handleChange}
              checked={option === answer}
              name="answers"
              value={option}
              id={`option${index}`}
          />
          <label htmlFor={`option${index}`}>{option}</label>
        </>
    )
}

export default function Exercise13() {
    const [questions, setQuestions] = useState([]);

    const [questionsIndex, setQuestionsIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [isComplete, setComplete] = useState(false);
    const [isLoading, toggleLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('./questions.json')
        .then(res => res.json())
        .then((data) => {
          setQuestions(data.questions);
          toggleLoading(false);
        })
        .catch((err) => {
          setError(err);
        })
    }, []);

    const handleSubmit = () => {
        if (answer === questions[questionsIndex].correct) {
            setScore(score + 1)
            setFeedback("Correct!")
        } else {
            setFeedback("Incorrect!")
        }

        if (questionsIndex === questions.length - 1) {
            setComplete(true)
        } else {
            setQuestionsIndex(questionsIndex + 1)
            setAnswer(null)
        }
    }

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>Error: {error}</div>
    }

    return (
        <div style={style.container}>
            <div id="question" style={style.question}>
                {`${questions[questionsIndex].question}`}
            </div>
            <div style={style.options}>
                {questions[questionsIndex].options.map((option, index) => (
                    <QuizOption
                        key={`option-${index}`}
                        option={option}
                        index={index}
                        answer={answer}
                        setAnswer={setAnswer}
                    />
                ))}
            </div>
            <button
                disabled={isComplete}
                style={style.button}
                id="submitBtn"
                onClick={handleSubmit}
            >
                Submit
            </button>
            <div id="feedback" style={style.feedback}>
                {(questionsIndex !== 0 && !isComplete) && `${feedback}`}
            </div>
            <div id="score" style={style.feedback}>
                {isComplete &&
                    `Quiz complete! You scored ${score} out of ${questions.length}!`}
            </div>
        </div>
    )
}
