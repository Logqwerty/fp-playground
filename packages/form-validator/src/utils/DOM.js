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

$.addClass = R.curry((clazz, el) => el.classList.add(clazz));

$.removeClass = R.curry((clazz, el) => el.classList.remove(clazz));

$.text = R.curry((text, el) => el.innerText = text);

export default $;
