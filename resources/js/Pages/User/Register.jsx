import { useState, React } from "react";
import Layout from "../Layout";
import FormInput from "../../Components/FormInput";
import { Inertia } from "@inertiajs/inertia";

export default function Register() {
  const [values, SetValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    photo: "",
    emergency_contact_name: "",
    emergency_contact_number: "",
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    SetValues(values => ({
      ...values,
      [key]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    Inertia.post('/register', values)
  }

  return (
    <>
      <h1 className="text-xl font-bold mb-4 text-gray-800">
        Welcome to the Park.
      </h1>
      <p className="mb-4 text-gray-800">
        Please register so you can book a space.
      </p>

      <form
        className="max-w-sm mx-auto"
        onSubmit={handleSubmit}
      >
        <FormInput
          inputName={'First Name'}
          inputValue={values.first_name}
          onChangeEvent={(e) => handleChange(e)}
        />
        <FormInput
          inputName={'Last Name'}
          inputValue={values.last_name}
          onChangeEvent={(e) => handleChange(e)}
        />
        <FormInput
          inputName={'Email'}
          inputValue={values.email}
          onChangeEvent={(e) => handleChange(e)}
        />
        <FormInput
          inputName={'Date of Birth'}
          inputValue={values.date_of_birth}
          onChangeEvent={(e) => handleChange(e)}
        />
        <FormInput
          inputName={'Photo'}
          inputValue={values.photo}
          onChangeEvent={(e) => handleChange(e)}
        />
        <FormInput
          inputName={'Emergency Contact Name'}
          inputValue={values.emergency_contact_name}
          onChangeEvent={(e) => handleChange(e)}
        />
        <FormInput
          inputName={'Emergency Contact Phone'}
          inputValue={values.emergency_contact_number}
          onChangeEvent={(e) => handleChange(e)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Join
        </button>
      </form>

      redirect: +policy of usage+
    </>
  );
}

Register.layout = page => <Layout children={page} />
