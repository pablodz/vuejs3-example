<template>
	<section class="relative">
		<div
			class="container flex flex-col-reverse lg:flex-row items-center pag-12 mt-14 lg:mt-28"
		>
			<div class="flex flex-1 flex-col items-center lg:items-start">
				<h2
					class="text-white text-7xl md:text-4 leg:text-5xl text-center lg:text-left mb-6 hover:underline"
				>
					<LoremIpsumGenerator :textLength="2" />
				</h2>
				<p class="text-bookmark-grey text-2xl text-center lg:text-left mb-6">
					<LoremIpsumGenerator :textLength="14" />
				</p>
				<div class="flex justify-center felx-wrap gap-6">
					<button
						type="button"
						class="btn btn-purple hover:bg-bookmark-white hover:text-black"
					>
						<LoremIpsumGenerator :textLength="1" />
					</button>
				</div>
			</div>
			<div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
				<img
					src="../assets/images/chris-yang.png"
					alt="micro illustration"
					class="w-3/4 h-3/4 sm:w-3/4 sm:h-3/4 md:w-3/5 md:h-3/5 rounded-xl"
				/>
			</div>
			<div
				class="hidden md:block overflow-hidden bg-bookmark-purple rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-30"
			></div>
		</div>
	</section>
</template>

<script>
export default {};
</script>
