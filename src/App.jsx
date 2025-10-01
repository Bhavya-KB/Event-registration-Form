import { useState } from 'react'


function App() {

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    date: "",
  });

  console.log(formData);
  

   //  submit
  const handleSubmit = () => {
  
    if (!formData.name || !formData.email ||!formData.phone ||!formData.event || !formData.date ) {
      alert(" Please Fill The Details Fully!!!!");
      return;
    }

    alert(
      ` REGISTRATION DETAILS:\n\nNAME: ${formData.name}\nEMAIL: ${formData.email}\nPHONE: ${formData.phone}\nEVENT: ${formData.event}\nDATE: ${formData.date}`
    );
  };

  // clear 
  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      event: "",
      date: "",
    });
  };
 

  return (
    <>
    <div className="container mt-5">
      <div className="card shadow p-4" style={{ maxWidth: "500px", margin: "auto" }}>
        <h2 className="text-center mb-4 text-secondary">  EVENT REGISTRATION</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
               onChange={(e)=>setFormData({...formData, name:e.target.value})} 
              placeholder="Enter your name"
              
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}

               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
            
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
        
               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter your phone number"
              
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Event Name</label>
            <input
              type="text"
              className="form-control"
              name="event"
              value={formData.event}

            onChange={(e) => setFormData({ ...formData, event: e.target.value })}

              placeholder="Enter event name"
            
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Event Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              
               onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          
            />
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-danger w-50 me-2">
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="btn btn-warning w-50"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App
