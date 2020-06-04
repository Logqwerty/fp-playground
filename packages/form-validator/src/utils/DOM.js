import { curry } from "ramda";

const $ = {};

$.qs = (sel, parent = document) => parent.querySelector(sel);

$.makeEl = (html) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  return wrapper.children[0];
};

$.append = curry((parent, children) => parent.appendChild(children));

export default $;
