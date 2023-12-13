const alertNotification = document.querySelector('.alert-notification')
const userDetails = document.querySelector('.user-details')
const alertBtn = document.querySelector('.alert')
const userBtn = document.querySelectorAll('.user-btn')
const arrBtn = Array.from(userBtn)
const trialBtn = document.querySelector('.trial-close')
const trialBody = document.querySelector('.trial-header')
const dropdownBtn = document.querySelector('.dropdown-btn')
const formHome = document.querySelector('.form-home')
const checkedBtn = document.querySelectorAll('.checked-btn')
const numberValue = document.querySelector('#plus')
const progressBar = document.querySelector('.moving-bar')
const customizeFlex = document.querySelectorAll('.check-flex')
const customizeImg = document.querySelectorAll('.check-img')
const cards = document.querySelectorAll('.check')
let i = 0

//second form
customizeFlex[1].style.display = 'none'
customizeImg[1].hidden = true

//third form
customizeFlex[2].style.display = 'none'
customizeImg[2].hidden = true

//fourth form
customizeFlex[3].style.display = 'none'
customizeImg[3].hidden = true

//last form
customizeFlex[4].style.display = 'none'
customizeImg[4].hidden = true


class UI{

    // toogle/display user details when clicked 
    displayUserDetails(){
        arrBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                userDetails.classList.toggle('show')
            })
        })
    }

    // toogle/display alert notification when clicked
    displayAlertNotification(){
        alertBtn.addEventListener('click', () => {
            alertNotification.classList.toggle('show')
        })
    }

    //remove target when not clicked
    hideAlert_User(){
        document.body.addEventListener('click', e => {
            if(alertNotification.classList.contains('show')){
                if(!alertNotification.contains(e.target) && !alertBtn.contains(e.target)){
                    alertNotification.classList.remove('show')
                }
            }
        
            if(userDetails.classList.contains('show')){
                if(!userDetails.contains(e.target) && (!arrBtn[0].contains(e.target) && !arrBtn[1].contains(e.target))) {
                    userDetails.classList.remove('show')
                }
            }
        })
    }

    // remove/hide trial header
    removeTrialHeader(){
        trialBtn.addEventListener('click', () => {
            trialBody.hidden = true
        })
    }

    //display setup guide 
    displayForm(){
        dropdownBtn.addEventListener('click', () => {
            formHome.classList.toggle('hide')
            dropdownBtn.classList.toggle('show')
            dropdownBtn.classList.toggle('dropdown-btn')
            if(dropdownBtn.className == 'dropdown-btn'){
                dropdownBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#fff"/>
                    </svg>
                `
            } else {
                dropdownBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#fff"/>
                    </svg>
                `
            }
        })
    }

    //
    firstCheckedBtn(){
        checkedBtn[0].addEventListener('click', () => {
            checkedBtn[0].classList.toggle('checked-btn')
            if(checkedBtn[0].className == 'checked-btn'){

                //uncheck the button when clicked
                ui.uncheckedBtn(checkedBtn[0], customizeFlex[0], customizeImg[0])
        
                //change value when decreased
                ui.decreaseValue()
        
                //change width of the progress bar
                ui.progressBar()

            } else {
                //display loader
                ui.changeLoader(checkedBtn[0])
                //
                setTimeout(() => {
                    //check the button when clicked
                    ui.checkedBtn(checkedBtn[0],customizeFlex[0],customizeImg[0])
        
                    //change value when increased
                    ui.increaseValue()

                    //change width of the progress bar
                    ui.progressBar()

                    //
                    customizeFlex[1].style.removeProperty('display', 'none')
                    customizeImg[1].hidden = false
                },1500)
            }
        })
    }
    //
    secondCheckedBtn(){
        checkedBtn[1].addEventListener('click', () => {
            checkedBtn[1].classList.toggle('checked-btn')
            if(checkedBtn[1].className == 'checked-btn'){

                //uncheck the button when clicked
                ui.uncheckedBtn(checkedBtn[1], customizeFlex[1], customizeImg[1])
        
                //change value when decreased
                ui.decreaseValue()
        
                //change width of the progress bar
                ui.progressBar()
            } else {
                //display loader
                ui.changeLoader(checkedBtn[1])
                //
                setTimeout(() => {
                    //check the button when clicked
                    ui.checkedBtn(checkedBtn[1],customizeFlex[1],customizeImg[1])

                    //change value when increased
                    ui.increaseValue()

                    //change width of the progress bar
                    ui.progressBar()

                    customizeFlex[2].style.removeProperty('display', 'none')
                    customizeImg[2].hidden = false
                },1500)
            }
        })
    }
    //
    thirdCheckedBtn(){
        checkedBtn[2].addEventListener('click', () => {
            checkedBtn[2].classList.toggle('checked-btn')
            if(checkedBtn[2].className == 'checked-btn'){

                //uncheck the button when clicked
                ui.uncheckedBtn(checkedBtn[2], customizeFlex[2], customizeImg[2])
        
                //change value when decreased
                ui.decreaseValue()
        
                //change width of the progress bar
                ui.progressBar()
            } else {
                //display loader
                ui.changeLoader(checkedBtn[2])
                //
                setTimeout(() => {
                    //check the button when clicked
                    ui.checkedBtn(checkedBtn[2],customizeFlex[2],customizeImg[2])
        
                    //change value when increased
                    ui.increaseValue()

                    //change width of the progress bar
                    ui.progressBar()

                    customizeFlex[3].style.removeProperty('display', 'none')
                    customizeImg[3].hidden = false
                },1500)
            }
        })
    }
    //
    fourthCheckedBtn(){
        checkedBtn[3].addEventListener('click', () => {
            checkedBtn[3].classList.toggle('checked-btn')
            if(checkedBtn[3].className == 'checked-btn'){

                //uncheck the button when clicked
                ui.uncheckedBtn(checkedBtn[3], customizeFlex[3], customizeImg[3])
        
                //change value when decreased
                ui.decreaseValue()
        
                //change width of the progress bar
                ui.progressBar()
            } else {
                //display loader
                ui.changeLoader(checkedBtn[3])
                //
                setTimeout(() => {
                    //check the button when clicked
                    ui.checkedBtn(checkedBtn[3],customizeFlex[3],customizeImg[3])
        
                    //change value when increased
                    ui.increaseValue()

                    //change width of the progress bar
                    ui.progressBar()

                    //
                    customizeFlex[4].style.removeProperty('display', 'none')
                    customizeImg[4].hidden = false
                },1500)
            }
        })
    }

    //
    lastCheckedBtn(){
        checkedBtn[4].addEventListener('click', () => {
            checkedBtn[4].classList.toggle('checked-btn')
            if(checkedBtn[4].className == 'checked-btn'){

                //uncheck the button when clicked
                ui.uncheckedBtn(checkedBtn[4], customizeFlex[4], customizeImg[4])
        
                //change value when decreased
                ui.decreaseValue()
        
                //change width of the progress bar
                ui.progressBar()
            } else {
                //display loader
                ui.changeLoader(checkedBtn[4])
                //
                setTimeout(() => {
                    //check the button when clicked
                    ui.checkedBtn(checkedBtn[4],customizeFlex[4],customizeImg[4])
        
                    //change value when increased
                    ui.increaseValue()

                    //change width of the progress bar
                    ui.progressBar()
                },1500)
            }
        })
    }

    //close other opened questions if not the target
    closeOpenedQuestion(){
        //
        cards[0].addEventListener('click', () => {
            customizeFlex[0].style.removeProperty('display', 'none')
            customizeImg[0].hidden = false

            if(customizeFlex[1].style.display = 'block' && customizeImg[1].hidden === false){
                customizeFlex[1].style.display = 'none'
                customizeImg[1].hidden = true
            }
            if(customizeFlex[2].style.display = 'block' && customizeImg[2].hidden === false){
                customizeFlex[2].style.display = 'none'
                customizeImg[2].hidden = true
            }
            if(customizeFlex[3].style.display = 'block' && customizeImg[3].hidden === false){
                customizeFlex[3].style.display = 'none'
                customizeImg[3].hidden = true
            }
            if(customizeFlex[4].style.display = 'block' && customizeImg[4].hidden === false){
                customizeFlex[4].style.display = 'none'
                customizeImg[4].hidden = true
            }
        })

        //
        cards[1].addEventListener('click', () => {
            customizeFlex[1].style.removeProperty('display', 'none')
            customizeImg[1].hidden = false

            if(customizeFlex[0].style.display = 'block' && customizeImg[0].hidden === false){
                customizeFlex[0].style.display = 'none'
                customizeImg[0].hidden = true
            }
            if(customizeFlex[2].style.display = 'block' && customizeImg[2].hidden === false){
                customizeFlex[2].style.display = 'none'
                customizeImg[2].hidden = true
            }
            if(customizeFlex[3].style.display = 'block' && customizeImg[3].hidden === false){
                customizeFlex[3].style.display = 'none'
                customizeImg[3].hidden = true
            }
            if(customizeFlex[4].style.display = 'block' && customizeImg[4].hidden === false){
                customizeFlex[4].style.display = 'none'
                customizeImg[4].hidden = true
            }
        })

        //
        cards[2].addEventListener('click', () => {
            customizeFlex[2].style.removeProperty('display', 'none')
            customizeImg[2].hidden = false

            if(customizeFlex[0].style.display = 'block' && customizeImg[0].hidden === false){
                customizeFlex[0].style.display = 'none'
                customizeImg[0].hidden = true
            }
            if(customizeFlex[1].style.display = 'block' && customizeImg[1].hidden === false){
                customizeFlex[1].style.display = 'none'
                customizeImg[1].hidden = true
            }
            if(customizeFlex[3].style.display = 'block' && customizeImg[3].hidden === false){
                customizeFlex[3].style.display = 'none'
                customizeImg[3].hidden = true
            }
            if(customizeFlex[4].style.display = 'block' && customizeImg[4].hidden === false){
                customizeFlex[4].style.display = 'none'
                customizeImg[4].hidden = true
            }
        })

        //
        cards[3].addEventListener('click', () => {
            customizeFlex[3].style.removeProperty('display', 'none')
            customizeImg[3].hidden = false

            if(customizeFlex[0].style.display = 'block' && customizeImg[0].hidden === false){
                customizeFlex[0].style.display = 'none'
                customizeImg[0].hidden = true
            }
            if(customizeFlex[1].style.display = 'block' && customizeImg[1].hidden === false){
                customizeFlex[1].style.display = 'none'
                customizeImg[1].hidden = true
            }
            if(customizeFlex[2].style.display = 'block' && customizeImg[2].hidden === false){
                customizeFlex[2].style.display = 'none'
                customizeImg[2].hidden = true
            }
            if(customizeFlex[4].style.display = 'block' && customizeImg[4].hidden === false){
                customizeFlex[4].style.display = 'none'
                customizeImg[4].hidden = true
            }
        })

        //
        cards[4].addEventListener('click', () => {
            customizeFlex[4].style.removeProperty('display', 'none')
            customizeImg[4].hidden = false

            if(customizeFlex[0].style.display = 'block' && customizeImg[0].hidden === false){
                customizeFlex[0].style.display = 'none'
                customizeImg[0].hidden = true
            }
            if(customizeFlex[1].style.display = 'block' && customizeImg[1].hidden === false){
                customizeFlex[1].style.display = 'none'
                customizeImg[1].hidden = true
            }
            if(customizeFlex[2].style.display = 'block' && customizeImg[2].hidden === false){
                customizeFlex[2].style.display = 'none'
                customizeImg[2].hidden = true
            }
            if(customizeFlex[3].style.display = 'block' && customizeImg[3].hidden === false){
                customizeFlex[3].style.display = 'none'
                customizeImg[3].hidden = true
            }
        })
    }

    //increase and decrease progress bar width when numberValue changes
    progressBar(){
        if(Number(numberValue.innerHTML) === 0){
            progressBar.style.width = '0%'
        } else if(Number(numberValue.innerHTML) === 1){
            progressBar.style.width = '20%'
        } else if(Number(numberValue.innerHTML) === 2){
            progressBar.style.width = '40%'
        } else if(Number(numberValue.innerHTML) === 3){
            progressBar.style.width = '60%'
        } else if(Number(numberValue.innerHTML) === 4){
            progressBar.style.width = '80%'
        } else if(Number(numberValue.innerHTML) === 5){
            progressBar.style.width = '100%'
            progressBar.style.borderRadius = '28px'
        }
    }

    //unchecked button when clicked
    uncheckedBtn(checkedBtn, customizeFlex, customizeImg){
        checkedBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="12" stroke="rgba(138, 138, 138, 1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
            </svg>
        `
        //
        customizeFlex.style.removeProperty('display', 'none')
        customizeImg.hidden = false
    }

    //checked button when clicked
    checkedBtn(checkedBtn,customizeFlex,customizeImg){
        checkedBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#303030"></circle>
                <path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z" fill="#fff"></path>
            </svg>
        `
        //close body of clicked form
        customizeFlex.style.display = 'none'
        customizeImg.hidden = true
    }

    //display loader when clicked
    changeLoader(checkedBtn){
        checkedBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28" fill="none" class="loader">
                <path d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2" stroke="rgba(28, 24, 29, 1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `
    }

    //change numberValue when decreased
    decreaseValue(){
        let minus = --i
        numberValue.innerHTML = minus
    }

    //change numberValue when increased
    increaseValue(){
        let add = ++i
        numberValue.innerHTML = add
    }
}

const ui = new UI()
//
ui.firstCheckedBtn()

//
ui.secondCheckedBtn()

//
ui.thirdCheckedBtn()

//
ui.fourthCheckedBtn()

//
ui.lastCheckedBtn()

//
ui.displayForm()

//
ui.hideAlert_User()

//
ui.removeTrialHeader()

//
ui.closeOpenedQuestion()

//
ui.displayAlertNotification()

//
ui.displayUserDetails()