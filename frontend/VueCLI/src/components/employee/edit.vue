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
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'edit',
  mixins: [employeeMixin],
  data() {
    return {
      id: this.$route.params.id
    }
  },
  // methods: { ...mapActions(['saveEmployee']) },
  methods: {
    saveEmpl: function() {
      if (this.vallidData()) {
        //edit
        this.$store.dispatch('saveEmployee', this.employeeEdit).then((x) => {
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
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id
    }
  },
  computed: mapState({
    employeeEdit: (state) => state.employee
  }),
  created() {
    this.$store.dispatch('getEmployee', this.id)
  }
}
</script>
<style scoped></style>
