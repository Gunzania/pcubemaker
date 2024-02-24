
 
//nav hide
let navbar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click" , function(){
        navcollapse.classList.remove("show");
    })
})

//counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }

            }, step);
    }
    counter("count1", 0, 1000 , 3000);
    counter("count2", 100, 1001 , 2500);
    counter("count3", 0, 1002, 3000);
    counter("count4", 0, 1005 , 3000);
});
