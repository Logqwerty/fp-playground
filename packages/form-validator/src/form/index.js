import { pipe } from "ramda";

import "./style.css";
import formTemplate from "./template";
import $ from "../utils/DOM";

const Form = {};

Form.render = () => pipe($.makeEl, $.append($.qs("#root")))(formTemplate);

export default Form;
