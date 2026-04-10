import { useState } from "react";
import "../Styles/WorkshopPropose.css";

 

function CreateWorkshopForm() {
  const [form, setForm] = useState({ title: "", category: "", date: "", desc: "", tags: ["Curriculum", "Pedagogy"], completion: 50 });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
 
  const set = (k, v) => { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: "" })); };
 
  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Workshop title is required";
    if (!form.category) e.category = "Please select a category";
    if (!form.date) e.date = "Schedule date is required";
    return e;
  };
 
  const submit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ title: "", category: "", date: "", desc: "", tags: [], completion: 50 });
  };
 
  return (
    <div className="form-card">
      <div className="form-card-header">
        <h2>Create workshop</h2>
        <p>Add a new workshop to your editorial workspace</p>
      </div>
 
      {submitted && <SuccessBanner msg="Workshop created successfully!" />}
 
      <div label="Workshop title" error={errors.title}>
        <input type="text" className={errors.title ? "error" : ""} placeholder="e.g. Digital Humanities Symposium" value={form.title} onChange={e => set("title", e.target.value)} />
      </div>
 
      <div className="row">
        <div label="Category" error={errors.category}>
          <select className={errors.category ? "error" : ""} value={form.category} onChange={e => set("category", e.target.value)}>
            <option value="">Select…</option>
            {["Editorial", "Analytics", "Research", "Tech Integration"].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div label="Schedule date" error={errors.date}>
          <input type="date" className={errors.date ? "error" : ""} value={form.date} onChange={e => set("date", e.target.value)} />
        </div>
      </div>
 
      <div label="Description" helper="Briefly describe goals and content">
        <textarea placeholder="What will participants learn?" value={form.desc} onChange={e => set("desc", e.target.value)} />
      </div>
 
 
      <div label={`Completion target — ${form.completion}%`}>
        <div className="slider-row">
          <input type="range" min="0" max="100" step="1" value={form.completion} onChange={e => set("completion", +e.target.value)} />
          <span className="slider-val">{form.completion}%</span>
        </div>
      </div>
 
      <div className="divider" />
      <div className="btn-row">
        <button className="btn" onClick={() => setForm({ title: "", category: "", date: "", desc: "", tags: [], completion: 50 })}>Reset</button>
        <button className="btn primary" onClick={submit}>Create workshop →</button>
      </div>
    </div>
  );
}

export default CreateWorkshopForm;