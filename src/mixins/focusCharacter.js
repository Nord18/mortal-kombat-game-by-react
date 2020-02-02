export default function (items, i) {
  let index = items.indexOf(document.activeElement)
  index += i
  if (index < 0) {
    index = items.length - 1
  } else if (index > items.length - 1) {
    index = 0
  }
  items[index].focus()
}