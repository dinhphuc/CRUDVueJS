import Vue from 'vue'
import Vuex from 'vuex'
import EmployeeService from '../service/employee.service'
import toastr from 'toastr'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    employees: [],
    employee: {},
    status: {}
  },
  getters: {
    employees: (state) => {
      return state.employees
    }
  },
  mutations: {
    getEmployees(state, employees) {
      state.employees = employees
    },
    getEmployee(state, employee) {
      state.employee = employee
    },
    saveEmployee(state, employee) {
      var index = persons
        .map(function(e) {
          return e.ID
        })
        .indexOf(id)
      state.employees[index].ID = employee.ID
      state.employees[index].FullName = employee.FullName
      state.employees[index].Address = employee.Address
      state.employees[index].Age = employee.Age
    },
    createEmployee(state, employee) {
      state.employees.push(employee)
    },
    delEmployee(state, employee) {
      var index = persons
        .map(function(e) {
          return e.ID
        })
        .indexOf(id)
      state.employees.splice(index, 1)
    }
  },
  actions: {
    async getEmployees({ commit }) {
      var resp = EmployeeService.getAll('/persons').then((rp) => {
        if (rp.status) {
          commit('getEmployees', rp.data)
        } else {
        }
      })
      return resp
    },
    async getEmployee({ commit }, id) {
      var resp = await EmployeeService.get('/persons/edit/', id).then((rp) => {
        if (rp.status) {
          commit('getEmployee', rp.data)
        }
      })
      return resp
    },
    async saveEmployee({ commit }, employee) {
      console.log(employee)
      var resp = await EmployeeService.update(
        '/persons/update/',
        employee.ID,
        employee
      )
      return resp
    },
    async createEmployee({ commit }, employee) {
      var resp = await EmployeeService.create('/persons/add/', employee)
      return resp
    },
    async delEmployee({ commit }, id) {
      var resp = await EmployeeService.delete('/persons/delete/', id)
      return resp
    }
  }
})
