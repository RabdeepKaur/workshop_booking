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
    <>
    <div className="form-card">
      <div className="form-card-header">
        <h2>Propose workshop</h2>
        <p>Propose a workshop according to your own time availability </p>
      </div>
 
      {submitted && <SuccessBanner msg="Workshop created successfully!" />}
 
      <div label="Workshop title" error={errors.title}>
        <p> Title of the workshop </p>
        <input type="text" className={errors.title ? "error" : ""} placeholder="e.g. Title of the workshop" value={form.title} onChange={e => set("title", e.target.value)} />
      </div>
 
      <div className="row">
        <div label="Category" error={errors.category}>
          <p> Select the category that best fits your workshop. </p>
          <select className={errors.category ? "error" : ""} value={form.category} onChange={e => set("category", e.target.value)}>
            <option value="">Type of Workshops</option>
            {["Workshop1", "workshop2", "workshop3", "workshop4"].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div label="Schedule date" error={errors.date}>
          <p> When do you plan to conduct the workshop? </p>
          <input type="date" className={errors.date ? "error" : ""} value={form.date} onChange={e => set("date", e.target.value)} />
        </div>
      </div>
 
      <div label="Description" helper="Briefly describe goals and content">
        <p> Briefly describe the goals and content of your workshop. </p>
        <textarea placeholder="What will participants learn?" value={form.desc} onChange={e => set("desc", e.target.value)} />
      </div>
    <div className="field">
          {errors.agreed && <span className="field-error">⚠ {errors.agreed}</span>}
          <label className="checkbox-field" style={{ textTransform: "none", letterSpacing: 0, fontWeight: 400 }}>
            <input type="checkbox" checked={form.agreed} onChange={e => set("agreed", e.target.checked)} style={{ width: 18, height: 18 }} />
            <span>I agree to the <a style={{ color: "var(--forest)", fontWeight: 600 }}>Terms and Conditions</a> </span>
          </label>
        </div>
      <div className="divider" />
      <div className="btn-row">
        <button className="btn primary" onClick={submit}>Create workshop →</button>
      </div>
    </div>
    </>
  );
}

export default CreateWorkshopForm;