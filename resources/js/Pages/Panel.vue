<template>
  Olá sou a Panel!
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