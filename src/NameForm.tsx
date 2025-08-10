import { useState } from "react";

export default function NameForm() {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({ name: "liqy" });

  const changeForm = () => {
    setCount(count + 1);
    setForm({
      ...form,
      name: count % 2 === 0 ? "Alice" : "Bob",
    });
  };

  return (
    <div>
      <h2>Name: {form.name}</h2>
      <button onClick={changeForm}>Change Form</button>
    </div>
  );
}
