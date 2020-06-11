import * as R from "ramda";

const $ = {};

$.qs = (sel, parent) =>
  parent ? parent.querySelector(sel) : document.querySelector(sel);

$.find = R.curry($.qs);

$.makeEl = (html) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  return wrapper.children[0];
};

$.append = R.curry((parent, children) => parent.appendChild(children));

$.on = R.curry((event, handler, el) => el.addEventListener(event, handler));

export default $;
