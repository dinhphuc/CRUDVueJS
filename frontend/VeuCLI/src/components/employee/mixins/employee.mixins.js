import toastr from "toastr";
var employeeMixin = {
    data() {
        return {
            employeeEdit: {
                FullName: "",
                Adrres: "",
                Age: 18
            }
        };
    },
    methods: {
        vallidData() {
          if (this.employeeEdit.FullName.length <= 0) {
            toastr.error("Full name is not valid");
            return false;
          } else if (this.employeeEdit.Address.length <= 0) {
            toastr.error("Address is not valid");
            return false;
          } else if (this.employeeEdit.Age <= 0 || this.employeeEdit.Age > 150) {
            toastr.error(`Age: ${this.employeeEdit.Age} is not correct`);
            return false;
           
          }
          return true;
        }
    }
    
}
export default employeeMixin