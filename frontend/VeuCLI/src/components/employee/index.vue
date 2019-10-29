
<template>
  <div>
    <h2 class="text-center">Employee list</h2>
    <div class="panel panel-default" style="margin-top: 50px;">
      <!-- Table -->
      <table class="table" id="tableEmpl">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full name</th>
            <th scope="col">Address</th>
            <th scope="col">Age</th>
            <th scope="col" class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee,index) in employees" :key="index">
            <td scope="row">{{index+1}}</td>
            <td>{{employee.FullName}}</td>
            <td>{{employee.Address}}</td>
            <td>{{employee.Age}}</td>
            <td class="text-center">
              <router-link tag="a" class="btn btn-success" :to="`/edit/${employee.ID}`">Edit</router-link>
              <button
                class="btn btn-warning"
                @click="deleteEmpl(employee.ID,employee.FullName)"
              >Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script> 
import EmployeeService from "../../service/employee.service";
import toastr from "toastr";
export default {
  name: "index",
  data() {
    return {
      employees: [],
      employeeEdit: {}
    };
  },
  methods: {
    loadData: function() {
      EmployeeService.getAll("/persons").then(rp => {
        if (rp.status) {
          this.employees = rp.data;
        } else {
           toastr.error(rp.messages);
          console.log("Messages: " + rp.messages);
          console.log("Exception: " + rp.exception);
        }
      });
    },
    deleteEmpl: function(id, name) {
      var r = confirm("Xóa: " + name);
      if (r) {
        EmployeeService.delete("/persons/delete/", id).then(rp => {
          if (rp.status) {
            this.loadData();
            toastr.success(rp.messages);
          } else {
            console.log("Messages: " + rp.messages);
            console.log("Exception: " + rp.exception);
          }
        });
      }
    }
  },
  created() {
    this.loadData();
  }
};
</script>
<style scoped>
</style>
