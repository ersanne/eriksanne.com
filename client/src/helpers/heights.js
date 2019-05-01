export function getDocumentHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )
}

export function getWindowHeight() {
  return window.innerHeight ||
    (document.documentElement || document.body).clientHeight
}
