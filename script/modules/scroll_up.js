export default function scrollUpUnit(){

    const offset = 100;
    const scrollUp = document.querySelector(".scroll_up");
    const scrollPath = scrollUp.querySelector(".scroll_up_path");
    const scrollValue = scrollUp.querySelector(".scroll_up_value");
    const pathLength = scrollPath.getTotalLength();

    scrollPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    scrollPath.style.transition = "stroke-dashoffset 20ms";

    const getTop = ()=> window.pageYOffset || document.documentElement.scrollTop;

    const updateDashOffset = () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        console.log(getTop());
        const dashoffset = pathLength - (getTop() * pathLength / height);
        const percent = parseInt((getTop() / height) * 100);

        scrollPath.style.strokeDashoffset = dashoffset;
        scrollValue.textContent = `${percent}%`;
    }

    window.addEventListener("scroll", () => {
        updateDashOffset();
        if (getTop() > offset) {
            scrollUp.classList.add("active")
        }
        else{
            scrollUp.classList.remove("active")
        }
    })

    scrollUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}