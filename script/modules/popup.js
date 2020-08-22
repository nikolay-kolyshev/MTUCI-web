export default function PopupInit(){

    const popupOpenLinks = document.querySelectorAll(".popup_link");
    const popupCloseLinks = document.querySelectorAll(".popup_close");
    
    const timeout = 600;
    let unlock = true;

    function bodyLock(){

        document.body.classList.add("lock");
        unlock = false;
        setTimeout(()=>{
            unlock = true;
        }, timeout)

    }

    function bodyUnlock(){
        unlock = false;
        setTimeout(()=>{
            document.body.classList.remove("lock");
            unlock = true;
        }, timeout)
    }
    
    function popupOpen(curentPopup) {

        if (curentPopup && unlock){
            const popupActive = document.querySelector(".popup.open")
            if (popupActive){
                popupClose(popupActive, false);
            }
            else{
                bodyLock();
            }

            curentPopup.classList.add("open");
            curentPopup.onclick = e => {
                debugger;
                if (!e.target.closest(".popup_body")){
                    popupClose(e.target.closest(".popup"))
                }
            }
        }

    }

    function popupClose(popupAcive, doUnlock = true) {

        if (unlock){
            popupAcive.classList.remove("open");
            if (doUnlock)
                bodyUnlock();
        }

    }

    if (popupOpenLinks.length > 0){
        for (let link of popupOpenLinks)
            link.onclick = e => {
                const popupName = link.getAttribute("href").replace("#","");
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup);
                e.preventDefault();
            }

    }

    if (popupCloseLinks.length > 0){
        for (let link of popupCloseLinks)
            link.onclick = e => {
                popupClose(link.closest(".popup"));
                e.preventDefault();
            }
    }

}