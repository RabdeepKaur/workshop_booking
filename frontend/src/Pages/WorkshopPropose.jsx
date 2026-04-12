import { useState } from "react";
import "../Styles/WorkshopPropose.css";
import { Helmet } from "react-helmet-async";
 
const WORKSHOP_CATEGORIES = [
  "Python Programming",
  "Simulation Tools",
  "Engineering Software",
  "Data Science",
];
function CreateWorkshopForm() {
  const [form, setForm] = useState({ title: "", category: "", date: "", desc: "", tags: ["Curriculum", "Pedagogy"], completion: 50 });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
 
 const updateField=(Key,value)=>{
  setForm(prev=>({...prev,[Key]:value}));
  setErrors(prev=>({...prev,[Key]:""}));
 }
 
  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Workshop title is required";
    if (!form.category) e.category = "Please select a category";
    if (!form.date) e.date = "Schedule date is required";
    return e;
  };
 
  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ title: "", category: "", date: "", desc: "", tags: [], completion: 50 });
  };
 
  return (
    <>
     <Helmet>
        <title>Propose a Workshop | FOSSEE Workshop Booking</title>
        <meta
          name="description"
          content="Submit your workshop proposal to FOSSEE, IIT Bombay. Choose your topic, category, and preferred date."
        />
        <meta property="og:title" content="Propose a Workshop | FOSSEE" />
        <meta
          property="og:description"
          content="Submit your workshop proposal to FOSSEE, IIT Bombay."
        />
        <link rel="canonical" href="https://workshop.fossee.in/propose" />
      </Helmet>
   <div className="form-card">

        {/* Header */}
        <div className="form-card-header">
  <h1>Propose a Workshop</h1>
  <p>Propose a workshop according to your own time availability.</p>
</div>

{submitted && <SuccessBanner msg="Workshop proposed successfully!" />}

{/* Title */}
<div className="form-group">
  <label htmlFor="title">Workshop Title</label>
  <input
    id="title"
    type="text"
    placeholder="e.g. Introduction to Python"
    className={errors.title ? "error" : ""}
    value={form.title}
    onChange={e => updateField("title", e.target.value)}
    aria-required="true"
  />
  {errors.title && <span className="field-error">⚠ {errors.title}</span>}
</div>

{/* Category + Date */}
<div className="row">
  <div className="form-group">
    <label htmlFor="category">Category</label>
    <select
      id="category"
      className={errors.category ? "error" : ""}
      value={form.category}
      onChange={e => updateField("category", e.target.value)}
      aria-required="true"
    >
      <option value="">Select a category</option>
      {WORKSHOP_CATEGORIES.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
    {errors.category && <span className="field-error">⚠ {errors.category}</span>}
  </div>

  <div className="form-group">
    <label htmlFor="date">Preferred Date</label>
    <input
      id="date"
      type="date"
      className={errors.date ? "error" : ""}
      value={form.date}
      onChange={e => updateField("date", e.target.value)}
      aria-required="true"
    />
    {errors.date && <span className="field-error">⚠ {errors.date}</span>}
  </div>
</div>

{/* Description */}
<div className="form-group">
  <label htmlFor="desc">Description</label>
  <textarea
    id="desc"
    placeholder="What will participants learn? What are the goals?"
    value={form.desc}
    onChange={e => updateField("desc", e.target.value)}
    rows={4}
  />
</div>

{/* Terms */}
<div className="form-group">
  <label className="checkbox-label">
    <input
      type="checkbox"
      checked={form.agreed}
      onChange={e => updateField("agreed", e.target.checked)}
    />
    <span>
      I agree to the{" "}
      <a href="/terms">Terms and Conditions</a>
    </span>
  </label>
  {errors.agreed && <span className="field-error">⚠ {errors.agreed}</span>}
</div>

<div className="divider" />

<button className="submit-btn" onClick={handleSubmit}>
  Create workshop →
</button>
      </div>
    </>
  );
}

export default CreateWorkshopForm;