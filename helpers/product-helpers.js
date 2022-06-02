export const loadProductImage = (url) => {
  const imageRegex = /[/.](gif|jpg|jpeg|tiff|png)$/i
  if (url && imageRegex.test(url)) {
    return url
  }

  return '~/assets/images/products/bag-placeholder.png'
}

export const checkProductImage = (url) => {
  const imageRegex = /[/.](gif|jpg|jpeg|tiff|png)$/i
  return imageRegex.test(url)
}

export const loadProductVideo = (videoUrl) => {
  const slicedUrl = videoUrl ? videoUrl.slice(17) : ''
  return 'https://www.youtube.com/embed/' + slicedUrl
}

export default {
  loadProductImage,
}
