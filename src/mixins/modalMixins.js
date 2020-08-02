export default {
  props: {
    visible: {
      type: Boolean,
      default: () => true
    }
  },
  data: () => ({
    modalVisible: false,
    form: {}
  }),
  watch: {
    visible(val) {
      this.modalVisible = val
    }
  },
  methods: {
    open() {},
    close() {
      this.$emit('close')
    }
  }
}
