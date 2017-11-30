<template>
	<div class="contact-container">
		<ContactHeader></ContactHeader>
		<ContactCompany></ContactCompany>
	</div>
</template>

<script>
import ContactHeader from "@/components/web/ContactHeader"
import ContactCompany from "@/components/web/ContactCompany"

	export default {
		data(){
			return {

			}
		},
		components:{
			ContactHeader,
			ContactCompany
		}
	}
</script>

<style lang="less">
	@media screen and (min-width: 1220px) {
		.contact-container{

		}
	}
</style>