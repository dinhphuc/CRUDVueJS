var appIndex = new Vue({
    el: '#appIndex',
    data: {
        employees: [],
        employeeEdit: {},
        isEdit: false
    },
    created: function () {
        this.loadData();
    },
    updated() {
        $('#tableEmpl').DataTable();
    },
    methods: {
        editEmpl: function (id) {
            this.isEdit = true;
            BaseService.get("/persons/edit/", id).then((rp) => {
                if (rp.status) {
                    this.employeeEdit = rp.data;
                } else {
                    console.log("Messages: " + rp.messages);
                    console.log("Exception: " + rp.exception);
                }

            });
        },
        saveEmpl: function () {

            //edit
            if (this.employeeEdit.ID) {
                BaseService.update("/persons/update/", this.employeeEdit.ID, this.employeeEdit).then((rp) => {
                    if (rp.status) {
                        toastr.success(rp.messages);
                        //
                        this.employeeEdit = {};
                        this.loadData();
                        this.isEdit = false;
                    } else {
                        toastr.console.error(rp.messages);
                        console.log("Messages: " + rp.messages);
                        console.log("Exception: " + rp.exception);
                    }

                });
            } else {
                BaseService.create("/persons/add/", this.employeeEdit).then((rp) => {
                    if (rp.status) {
                        toastr.success(rp.messages);

                        //
                        this.employeeEdit = {};
                        this.loadData();
                        this.isEdit = false;
                    } else {
                        toastr.console.error(rp.messages);
                        console.log("Messages: " + rp.messages);
                        console.log("Exception: " + rp.exception);
                    }
                });
            }


        },
        loadData: function () {
            BaseService.getAll("/persons").then((rp) => {
                if (rp.status) {
                    this.employees = rp.data;

                } else {
                    toastr.error(rp.messages);
                    console.log("Messages: " + rp.messages);
                    console.log("Exception: " + rp.exception);
                }

            });

        },
        deleteEmpl: function (id, name) {
            var r = confirm("Xóa: " + name);
            if (r) {
                BaseService.delete("/persons/delete/", id).then((rp) => {
                    if (rp.status) {
                        this.loadData();
                        toastr.success(rp.messages);
                    } else {
                        console.log("Messages: " + rp.messages);
                        console.log("Exception: " + rp.exception);
                    }

                });

            }
        },
        addEmpl: function () {
            this.isEdit = true;
            this.employeeEdit = {};
        }

    }
})