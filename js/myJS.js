function mostrarImagen(url) {
    var imagenGrande = document.getElementById("imagen-grande");
    imagenGrande.src = url;
  }

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  
  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }

  const toastTrigger2 = document.getElementById('liveToastBtnn')
  const toastLiveExample2 = document.getElementById('liveToastt')
  
  if (toastTrigger2) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
    toastTrigger2.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
  
  const toastTrigger3 = document.getElementById('liveToastBtnnn')
  const toastLiveExample3 = document.getElementById('liveToasttt')
  
  if (toastTrigger3) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample3)
    toastTrigger3.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
  
  const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')
  
  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })