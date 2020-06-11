import * as R from "ramda";

import "./style.css";
import formTemplate from "./template";
import $ from "../utils/DOM";

const Form = {};

Form.render = () =>
  R.pipe(
    $.makeEl,
    $.append($.qs("#root")),
    $.on('submit', e => {
      e.preventDefault();
      console.log(e.currentTarget);
    }),
  )(formTemplate);

export default Form;
