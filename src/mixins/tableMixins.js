export default {
  data: () => ({
    tableLoading: false, // 列表loading
    listQuery: {}, // 查询条件
    listParams: {}, // 分页条件
    total: 0, // 查询结果总条数
    tableData: [],
    tableFn: () => {},
    pageSizeArr: [10, 20, 30, 50]
  }),
  mounted() {
    // 待有接口打开
    // this.handleFilter()
  },
  methods: {
    // 查询（根据当前查询条件查询）
    getData() {
      this.tableLoading = true
      this.tableFn(this.listQuery, this.listParams)
        .then(res => {
          const { data, size, current, total } = res || {}
          this.listParams = {
            size,
            current
          }
          this.total = total
          this.tableData = data
        })
        .finally(() => {
          this.tableLoading = false
        })
    },

    // 从第一页开始查询
    handleFilter() {
      this.listParams.current = 1
      this.getData()
    },

    // 重置
    reset() {
      this.listQuery = {}
      this.getData()
    },

    // 每页条数变化
    handleSizeChange(val) {
      this.listParams.size = val
      this.getData()
    },

    // 页码变化
    handleCurrentChange(val) {
      this.listParams.current = val
      this.getData()
    }
  }
}
