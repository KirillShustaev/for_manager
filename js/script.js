let systemBtn = document.querySelectorAll(".system__btn")

systemBtn.forEach(e => {
    e.addEventListener("click", ()=> {
        for(elem of systemBtn) {
            elem.classList.remove('system__btn_active')
        }
        e.classList.add("system__btn_active")
    })
})