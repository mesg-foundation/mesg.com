import Vue from 'vue'

const directive = {
  bind(el, bindings) {
    const showOnyChildren = bindings.value
  
    if (showOnyChildren) {
      Vue.nextTick(() => {
        const parentElement = el.parentElement
        const childNodes = el.childNodes

        let index = Array.prototype.indexOf.call(parentElement.childNodes, el)
        parentElement.removeChild(el)

        if (parentElement.childNodes.length > 0) {
          childNodes.forEach((node) => parentElement.insertBefore(node, parentElement.childNodes[index++]))
        } else {
          childNodes.forEach((node) => parentElement.appendChild(node))
        }
      })
    }
  }
}

// v-show-only-children directive conditionally renders the element it's set
// on while rendering element's child nodes all the time.
Vue.directive('showOnlyChildren', directive)
