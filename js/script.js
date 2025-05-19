let systemBtn = document.querySelectorAll(".system__btn")

systemBtn.forEach(e => {
    e.addEventListener("click", ()=> {
        for(elem of systemBtn) {
            elem.classList.remove('system__btn_active')
        }
        e.classList.add("system__btn_active")
    })
})

const buttons = document.querySelectorAll('.system__btn');
const blocks = document.querySelectorAll('.main_block');

buttons.forEach(button => {
    const targetBlock = button.getAttribute('data-target');

    button.addEventListener('click', () => {
        blocks.forEach(block => {
            if (block.classList.contains(targetBlock)) {
                block.classList.add("visible");
                block.classList.remove("none");
            } else {
                block.classList.add("none");
                block.classList.remove("visible");
            }
            });
    });
});