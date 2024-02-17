const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", () => {

        removeActive(); // bu komut bir önceki açık olan paneli kapatmamıza yarıyor
        panel.classList.add("active");
    });
})


function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}
// forEach araştır
