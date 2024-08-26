let shadowSize = 25
let bodyPadding = 25
let globalMargins = (shadowSize*2)+(bodyPadding*2)

  function go() {
  let value = document.getElementById('id').value
  if (value.includes('/watch?v=')) {
    value = value.split('/watch?v=')[1]
    if (value.includes('&')) {
      value = value.split('&')[0]
    }
  }
  else {
    if (value.includes('://')) {
      value = value.split('://')[1]
    }
    if (value.startsWith('www.')) {
      value = value.split('www.')[1]
    }
    if (value.startsWith('youtube-nocookie.com')) {
      value = value.replace('youtube-nocookie.com', 'youtube.com')
    }
    if (value.startsWith('youtubeeducation.com')) {
      value = value.replace('youtubeeducation.com', 'youtube.com')
    }
    if (value.startsWith('youtube.com')) {
      value = value.split('youtube.com')[1]
      value = value
        .replace('/shorts/', '')
        .replace('/embed/', '')
        .replace('/watch/', '')
    }
    else if (value.startsWith('youtu.be/')) {
      value = value.split('youtu.be/')[1]
    }
    if (value.includes('?')) {
      value = value.split('?')[0]
    }
  }
  let url = `https://i.ytimg.com/vi/${value}/maxresdefault.jpg`
  let a = document.querySelector('.link')
  let img = document.querySelector('.img')
  a.href = url
  img.src = url
}