import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'animate.css';
import 'sweetalert2/src/sweetalert2.scss'

export const Toast=  Swal.mixin({
    customClass:"swalAlertError",
    position: 'top-end',
    icon: false,
    showConfirmButton: false,
    heightAuto:false,
    scrollbarPadding: false,
    timer: 1500,
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      }
  })

  export const errorSwal=(message)=>{
Toast.fire({
    title:message,
    // timer: 3500
})
  }
