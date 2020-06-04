import "./style.css";
import formTemplate from "./template";

const Form = {};

Form.render = () => {
  const root = document.querySelector("#root");
  root.innerHTML = formTemplate;
};

export default Form;
