export const loadProductImage = (url) => {
   return url || "@/assets/images/products/bag-placeholder.png"
}

export const loadProductVideo = (videoUrl) => {
   const slicedUrl = videoUrl ? videoUrl.slice(17) : ''
   console.log(slicedUrl)
   return 'https://www.youtube.com/embed/' + slicedUrl
}

export default {
   loadProductImage
}