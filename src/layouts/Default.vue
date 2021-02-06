<template>
  <div class="layout">
    <Navbar />
    <slot/>
    <Contact />
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Mega&display=swap');

body {
  font-family: 'Lexend Mega', sans-serif;
  margin:0;
  padding:0;
  box-sizing: border-box;
  color: black;
  z-index: 0;
}

a {
  text-decoration: none;
  color: black;
  margin: 10px;
}

</style>
