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
        />
      </div>
      <input
        type="button"
        class="btn btn-success"
        @click="saveEmpl"
        value="Save"
      />
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
import toastr from 'toastr'
import employeeMixin from './mixins/employee.mixins'
export default {
  name: 'create',
  data() {
    return {
      employeeEdit: {}
    }
  },
  mixins: [employeeMixin],
  methods: {
    saveEmpl: function() {
      if (this.vallidData()) {
        this.$store.dispatch('createEmployee', this.employeeEdit).then((x) => {
          if (x.status) {
            toastr.success(x.messages)
            this.$router.push({ path: '/' })
            this.$store.dispatch('getEmployees')
          } else {
            toastr.error(x.messages)
          }
        })
      }
    }
  }
}
</script>
<style scoped></style>
