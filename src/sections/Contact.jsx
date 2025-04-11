import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-4"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>

        <input
          type="text"
          name="name"
          placeholder="Ton prénom"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />

        <textarea
          name="message"
          placeholder="Ton message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 mb-4 border rounded"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Envoyer
        </button>

        {submitted && (
          <p className="mt-4 text-green-600 text-center">
            Message envoyé ✅
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
