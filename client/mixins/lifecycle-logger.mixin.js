export default {
  created() {
    console.log(`${this.$options.name} created`);
  },
  beforeMount() {
    console.log(`${this.$options.name} about to mount`);
  },
  mounted() {
    console.log(`${this.$options.name} mounted`);
  },
  destoyed() {
    console.log(`${this.$options.name} destroyed`);
  },
};
