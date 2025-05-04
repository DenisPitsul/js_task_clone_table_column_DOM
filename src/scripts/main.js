'use strict';

const tableRowElements = document.querySelectorAll('table tr');

[...tableRowElements].forEach((rowElement) => {
  const columnElements = rowElement.children;

  const copySecondColumnElement = columnElements[1].cloneNode(true);

  columnElements[columnElements.length - 1].before(copySecondColumnElement);
});
