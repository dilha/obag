const productsMetaLoader = (
  title = 'О продукте',
  description = '',
  content = ''
) => {
  return {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  }
}

export const subcategoryMetaLoader = (
  title,
  description = '',
  content = ''
) => {
  const finalTitle = title || 'Комплектующие'

  return {
    title: finalTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  }
}

export default productsMetaLoader
