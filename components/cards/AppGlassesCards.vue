<template>
	<section class="glasses page__block">
		<div class="container">
			<div class="card__inner">
				<div v-for="glasse in items" :key="glasse.title" class="card__item"
					:style="{ backgroundImage: `url(${glasse.image})` }">
					<nuxt-link class="card__item-title" :to="{ name: 'catalog', params: { id: categoryId } }">
						{{ glasse.title }}
					</nuxt-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "AppCollectionCards",
	props: {
		items: {
			type: Array,
			require: true
		},
		categoryId: {
			type: Number
		},
	},
	data() {
		return {
			// glasses: [
			//   {
			//     title:'Готовые комбинации ',
			//     bgImg:'assets/images/glasses/glasses-1.jpg',
			//   },
			//   {
			//     title:'O sun ',
			//     bgImg:'assets/images/glasses/glasses-2.jpg',
			//   },
			//   {
			//     title:'O sun shine',
			//     bgImg:'assets/images/glasses/glasses-3.jpg',
			//   },
			//   {
			//     title:'O sun Flat',
			//     bgImg:'assets/images/glasses/glasses-4.jpg',
			//   },
			// ]
		}
	},
}
</script>