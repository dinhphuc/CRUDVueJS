
<template>
  <div>
    <h2 class="text-center">Employee list</h2>
    <div class="panel panel-default" style="margin-top: 50px;">
      <div class="row" style="margin-bottom:20px">
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div class="col-md">Fillter</div>
        <div class="col-md">
          <div class="form-control"></div>
        </div>
      </div>

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
          <tr class="text-center spin" v-if="isLoading">
            <div class="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </tr>
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
      employeeEdit: {},
      isLoading: true
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
  },
  updated() {
    if (this.employees.length >= 0) {
      this.isLoading = false;
    }
  } 
};
</script>
<style scoped>
.spin {
  left: 50%;
  right: 50%;
  position: absolute;
}
.lds-spinner {
  color: official;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-spinner div {
  transform-origin: 32px 32px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 29px;
  width: 5px;
  height: 14px;
  border-radius: 20%;
  background: #000000;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
