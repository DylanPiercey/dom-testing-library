import {getQueriesForElement} from '../../get-queries-for-element'

function render(html) {
  const containerQueries = getQueriesForElement(html)
  function rerender(newHtml) {
    return render(newHtml, {html: newHtml})
  }
  return {html, rerender, ...containerQueries}
}

function renderIntoDocument(html) {
  return render(html)
}

function cleanup() {}

export {render, renderIntoDocument, cleanup}
