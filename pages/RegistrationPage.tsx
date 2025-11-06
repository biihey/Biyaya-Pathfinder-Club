
import React, { useState } from 'react';

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    parentName: '',
    parentContact: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you would typically send the data to a server
    setSubmitted(true);
    setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        parentName: '',
        parentContact: '',
    })
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Join the Club!
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            Fill out the form below to start your Pathfinder adventure.
          </p>
        </div>

        {submitted && (
          <div className="bg-pathfinder-green/10 border-l-4 border-pathfinder-green text-pathfinder-green p-4 rounded-md mb-8" role="alert">
            <p className="font-bold">Thank You!</p>
            <p>Your registration has been submitted. We will be in touch shortly.</p>
          </div>
        )}

        <div className="bg-slate-50 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-pathfinder-blue mb-4 border-b pb-2">Pathfinder's Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-pathfinder-blue focus:border-pathfinder-blue sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-slate-700">Age</label>
                  <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-pathfinder-blue focus:border-pathfinder-blue sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-pathfinder-blue focus:border-pathfinder-blue sm:text-sm" />
                </div>
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                  <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-pathfinder-blue focus:border-pathfinder-blue sm:text-sm" />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-pathfinder-blue mb-4 border-b pb-2">Parent/Guardian Information</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-slate-700">Full Name</label>
                  <input type="text" name="parentName" id="parentName" value={formData.parentName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-pathfinder-blue focus:border-pathfinder-blue sm:text-sm" />
                </div>
                 <div>
                  <label htmlFor="parentContact" className="block text-sm font-medium text-slate-700">Contact Number / Email</label>
                  <input type="text" name="parentContact" id="parentContact" value={formData.parentContact} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-pathfinder-blue focus:border-pathfinder-blue sm:text-sm" />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pathfinder-blue hover:bg-pathfinder-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pathfinder-blue transition-transform transform hover:scale-105"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
