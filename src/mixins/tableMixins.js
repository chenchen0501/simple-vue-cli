export default {
  data: () => ({
    tableLoading: false, // 列表loading
    listQuery: {
      pageNo: 1,
      pageSize: 10
    }, // 查询条件
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
      this.tableLoading = true;
      this.tableFn(this.listQuery)
        .then(res => {
          const {
            data: { list, count }
          } = res || {};
          this.total = count;
          this.tableData = list;
        })
        .finally(() => {
          this.tableLoading = false;
        });
    },

    // 从第一页开始查询
    handleFilter() {
      this.listQuery.pageNo = 1;
      this.getData();
    },

    // 重置
    reset() {
      this.listQuery = {
        pageSize: 10,
        pageNo: 1
      };
      this.getData();
    },

    // 每页条数变化
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.getData();
    },

    // 页码变化
    handleCurrentChange(val) {
      this.listQuery.pageNo = val;
      this.getData();
    }
  }
};
