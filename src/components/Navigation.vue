<template>
	<div>
		<nav class="container flex items-center py-4 mt-4 sm:mt-12">
			<div class="py-1">
				<img src="../assets/images/podcast.png" width="60" alt="podcast logo" />
			</div>
			<h1
				class="text-3xl font-bold text-white ml-2 cursor-pointer hover:text-bookmark-blue"
			>
				<LoremIpsumGenerator :textLength="1" />
			</h1>

			<ul
				class="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-xs"
			>
				<li class="cursor-pointer text-white text-2xl">Buy</li>
				<li class="cursor-pointer text-white text-2xl">Contact</li>
				<button
					type="button"
					class="bg-bookmark-red text-xl text-white rounded-md px-7 py-3 uppercase"
				>
					<LoremIpsumGenerator :textLength="1" />
				</button>
			</ul>

			<div class="flex sm:hidden flex-1 justify-end">
				<i class="text-xl fas fa-bars text-white cursor-pointer"></i>
			</div>
		</nav>
	</div>
</template>

<script setup></script>
