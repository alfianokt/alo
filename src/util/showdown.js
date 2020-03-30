import showdown from 'showdown'

const classMap = {
  ul: 'nes-list is-circle',
}

const bindings = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${classMap[key]}" $1>`
  }));

const customExtentions = [
  {
    type: 'output',
    regex: new RegExp(`<a (.*)>`, 'g'),
    replace: `<a target="_blank" rel="norefere" $1>`
  },
  {
    type: 'output',
    regex: new RegExp(`<h4>(.*)</h4>`, 'g'),
    replace: `<p class="nes-btn is-primary is-small" style="display: block; padding: 0; margin-bottom: 8px;">$1</p>`
  }
]

const showdownOptions = {
  extensions: [...bindings, ...customExtentions],
  parseImgDimensions: true,
  noHeaderId: true
}
const converter = new showdown.Converter(showdownOptions)

converter.setFlavor('github')

export { converter }