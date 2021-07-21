<template>
  Olá sou a Home!
</template>

<script>
export default {
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title);
  }
}
</script>

<style>

</style>