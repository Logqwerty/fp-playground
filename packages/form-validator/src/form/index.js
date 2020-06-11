import * as R from "ramda";

import "./style.css";
import formTemplate from "./template";
import $ from "../utils/DOM";

const Form = {};

Form.render = () => R.pipe(
  $.makeEl,
  $.append($.qs("#root")),
  $.on("submit", e => {
    e.preventDefault();

    R.pipe(
      R.tap(checkUsername),
      R.tap(checkEmail),
      R.tap(checkPassword),
      R.tap(checkPasswordConfirm),
    )(e.currentTarget);
  }),
)(formTemplate);

export default Form;

const getFieldName = $el => $el.id.charAt(0).toUpperCase() + $el.id.slice(1);

const showError = R.forEach($el =>
  R.pipe(
    R.prop("parentElement"),
    R.tap($.removeClass('success')),
    R.tap($.addClass('error')),
    R.tap(R.pipe(
      $.find(".error-message"),
      $.text(`${getFieldName($el)} is required`)
    ))
  )($el)
)

const showSuccess = R.forEach(
  R.pipe(
    R.prop("parentElement"),
    R.tap($.removeClass('error')),
    R.tap($.addClass('success')),
  )
)

const truthyCase = R.pipe(
  R.take(1),
  R.flatten,
)

const falsyCase = R.pipe(
  R.takeLast(1),
  R.flatten,
)

const checkIsEmpty = R.pipe(
  $el => [$el],
  R.partition($el => $el.value.trim().length > 0),
  R.tap(R.pipe(
    truthyCase,
    showSuccess,
  )),
  R.tap(R.pipe(
    falsyCase,
    showError,
  )),
);

const checkUsername = R.pipe(
  $.find("#username"),
  checkIsEmpty,
)

const checkEmail = R.pipe(
  $.find("#email"),
  checkIsEmpty,
)

const checkPassword = R.pipe(
  $.find("#password"),
  checkIsEmpty,
)

const checkPasswordConfirm = R.pipe(
  $.find("#password-confirm"),
  checkIsEmpty,
)