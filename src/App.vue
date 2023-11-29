<script setup>

import { ref } from 'vue';

const username = ref("");
const password = ref("");

const login = () => {
	if (password.value === "1234") {
		store.setLoggedIn(true); // Update the loggedIn state in the store
		// Emit an event or perform other actions on successful login
		console.log("Login successful!");
	} else {
		// Display an error message or take other actions for incorrect password
		console.error("Incorrect password");
	}
};
</script>

<template>
	<div>
		<header>
			<img
				alt="Vue logo"
				class="logo"
				src="./assets/logo.svg"
				width="125"
				height="125"
			/>

			<div class="wrapper">
				<!-- Display login form here -->
				<form @submit.prevent="login" class="login-form">
					<label for="username" style="color: black">Username:</label>

					<input type="text" id="username" v-model="username" />

					<label for="password" style="color: black">Password:</label>
					<input type="password" id="password" v-model="password" />


					<!-- Display text when the password is '1234' -->
					<div style="color: green" v-show="password === '1234'">
						<span style="color: black">Password is correct!</span>
					</div>
 

					<button type="submit">Login</button>
				</form>
			</div>
		</header>

		<main>
			<!-- Display welcome message or other content -->
			<TheWelcome v-if="loggedIn" />
		</main>
	</div>
</template>

<style scoped>
/* Global styles */
body {
	font-family: "Arial", sans-serif;
	margin: 0;
	padding: 0;
	background: #f5f5f5;
}

/* Header styles */
header {
	background: linear-gradient(to right, #4caf50, #2196f3);
	color: #fff;
	padding: 1rem;
	text-align: center;
}

.logo {
	display: block;
	margin: 0 auto;
}

.wrapper {
	text-align: center;
}

/* Login form styles */
.login-form {
	max-width: 300px;
	margin: 0 auto;
	background: #fff;
	padding: 1.5rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

label {
	font-weight: bold;
}

input {
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 4px;
	color: #333; /* Set font color for input fields */
}

button {
	padding: 0.5rem;
	background: linear-gradient(to right, #4caf50, #2196f3);
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

button:hover {
	background: linear-gradient(to right, #45a049, #1976d2);
}

/* Main styles */
main {
	margin: 2rem;
}
</style>
