<template>
  <div>
    <form style="margin-top: 50px;">
      <div class="form-group">
        <label for="FullName">Full name</label>
        <input
          type="text"
          class="form-control"
          id="FullName"
          placeholder="Full lName"
          v-model="employeeEdit.FullName" 
        />
      </div>
      <div class="form-group">
        <label for="Address">Address</label>
        <input
          type="text"
          class="form-control"
          id="Address"
          placeholder="Address"
          v-model="employeeEdit.Address" 
        />
      </div>
      <div class="form-group">
        <label for="Age">Age</label>
        <input
          type="number"
          class="form-control"
          id="Age"
          placeholder="Age"
          v-model="employeeEdit.Age"
          v-ageValid="employeeEdit.Age"
        />
      </div>
      <input type="button" class="btn btn-success" @click="saveEmpl" value="Save" />
      <input
        type="button"
        class="btn btn-primary"
        @click="$router.push({ path: '/' })"
        value="Back"
      />
    </form>
  </div>
</template>
<script>
import EmployeeService from "../../service/employee.service";
import toastr from 'toastr'
import employeeMixin from './mixins/employee.mixins'
export default {
  name: "edit",
  mixins: [employeeMixin],
  data() {
    return { 
      id: this.$route.params.id
    };
  },
  methods: {
    saveEmpl: function() {
      //edit
      EmployeeService.update(
        "/persons/update/",
        this.employeeEdit.ID,
        this.employeeEdit
      ).then(rp => {
        if (rp.status) {
          toastr.success(rp.messages)
          //
          this.employeeEdit = {}; 
          this.$router.push({ path: '/' })
        } else {
           toastr.console.error(rp.messages); 
          console.log("Messages: " + rp.messages);
          console.log("Exception: " + rp.exception);
        }
      });
    }
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id; 
    }
  },
  created() { 
    EmployeeService.get("/persons/edit/", this.id).then(rp => {
      if (rp.status) {
        this.employeeEdit = rp.data;
      } else { 
        toastr.error(rp.messages); 
        console.log("Messages: " + rp.messages);
        console.log("Exception: " + rp.exception);
      }
    });
  } 
};
</script>
<style scoped>
</style>
