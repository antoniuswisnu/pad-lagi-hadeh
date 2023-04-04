import React, { useState, useEffect } from "react";
import "./createQuiz.css";

function CreateQuizPage() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [option5, setOption5] = useState("");
  const [questions, setQuestions] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    setQuestions(data);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (editing) {
      updateQuestion();
    } else {
      addQuestion();
    }
  }

  function addQuestion() {
    const newQuestion = {
      question,
      option1,
      option2,
      option3,
      option4,
      option5,
    };
    const newQuestions = [...questions, newQuestion];
    setQuestions(newQuestions);
    localStorage.setItem("data", JSON.stringify(newQuestions));
    resetForm();
  }

  function updateQuestion() {
    const newQuestions = [...questions];
    newQuestions[editingIndex] = {
      question,
      option1,
      option2,
      option3,
      option4,
      option5,
    };
    setQuestions(newQuestions);
    localStorage.setItem("data", JSON.stringify(newQuestions));
    resetForm();
  }

  function deleteQuestion(index) {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
    localStorage.setItem("data", JSON.stringify(newQuestions));
  }

  function editQuestion(index) {
    const question = questions[index];
    setQuestion(question.question);
    setOption1(question.option1);
    setOption2(question.option2);
    setOption3(question.option3);
    setOption4(question.option4);
    setOption5(question.option5);
    setEditing(true);
    setEditingIndex(index);
  }

  function resetForm() {
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setOption5("");
    setEditing(false);
    setEditingIndex(null);
  }

  return (
    <div className="container">
      <h1 className="judul">CRUD Soal dan Pilihan Jawaban</h1>

      <form onSubmit={handleSubmit} className="soal-container">
        <div className="form-soal">
          <label>Create Question</label>
        </div>

        <div className="form-group">
          <label htmlFor="question">Isi Soal</label>
          <textarea placeholder="untitled question" type="textarea" className="form-control" id="question" value={question} onChange={(e) => setQuestion(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="option1">Pilihan Jawaban A</label>
          <input type="text" className="form-control" id="option1" value={option1} onChange={(e) => setOption1(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="option2">Pilihan Jawaban B</label>
          <input type="text" className="form-control" id="option2" value={option2} onChange={(e) => setOption2(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="option3">Pilihan Jawaban C</label>
          <input type="text" className="form-control" id="option3" value={option3} onChange={(e) => setOption3(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="option4">Pilihan Jawaban D</label>
          <input type="text" className="form-control" id="option4" value={option4} onChange={(e) => setOption4(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="option5">Pilihan Jawaban E</label>
          <input type="text" className="form-control" id="option5" value={option5} onChange={(e) => setOption5(e.target.value)} required />
        </div>

        <div className="button-container">
          <button type="submit" className="btn btn-primary btn-submit">
            {editing ? "Update" : "Tambah"}
          </button>

          {editing && (
            <button type="button" className="btn btn-secondary ml-2 btn-batal" onClick={resetForm}>
              Batal
            </button>
          )}
        </div>
      </form>

      <h1 className="judul">Daftar Soal</h1>
      
      {questions.map((question, index) => (
        <div key={index} className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">
              {index + 1}. {question.question}
            </h5>
            <ul className="list-group">
              <li className="list-group-item">A. {question.option1}</li>
              <li className="list-group-item">B. {question.option2}</li>
              <li className="list-group-item">C. {question.option3}</li>
              <li className="list-group-item">D. {question.option4}</li>
              <li className="list-group-item">E. {question.option5}</li>
            </ul>
            <div className="mt-2">
              <button type="button" className="btn btn-secondary mr-2" onClick={() => editQuestion(index)}>
                Edit
              </button>
              <button type="button" className="btn btn-danger" onClick={() => deleteQuestion(index)}>
                Hapus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CreateQuizPage;
