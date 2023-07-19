import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../Layout";

export default function Register() {
  return (
    <>
      Hola desde el componente register!
    </>
  );
}

Register.layout = page => <Layout children={page} />
