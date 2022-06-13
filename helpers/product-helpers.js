export const loadProductImage = (url) => {
  const imageRegex = /[/.](gif|jpg|jpeg|tiff|png|webp)$/i
  if (url && imageRegex.test(url)) {
    return url
  }

  return '~/assets/images/products/product-placeholder-img.png'
}

export const checkProductImage = (url) => {
  const imageRegex = /[/.](gif|jpg|jpeg|tiff|png|webp)$/i
  return imageRegex.test(url)
}

export const loadProductVideo = (videoUrl) => {
  const slicedUrl = videoUrl ? videoUrl.slice(17) : ''
  return 'https://www.youtube.com/embed/' + slicedUrl
}

export default {
  loadProductImage,
}
