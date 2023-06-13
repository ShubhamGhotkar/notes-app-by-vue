<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  overflow-x: hidden;
}

.h2-style {
  font-size: 3.2rem;
  text-align: center;
  padding: 1rem;
}

@media only screen and (max-width: 1268px) {
  html {
    font-size: 8px;
  }
}
@media only screen and (max-width: 1000px) {
  html {
    font-size: 7px;
  }
}
@media only screen and (max-width: 900px) {
  html {
    font-size: 5px;
  }
}
</style>
