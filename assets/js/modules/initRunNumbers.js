export function initRunNumbers() {

    function runNumbers() {
        const servicesPerformed = document.querySelector('.servicesPerformed');
        const satisfiedCustomers = document.querySelector('.satisfiedCustomers');
        const problemsSolved = document.querySelector('.problemsSolved');
        const ObtainedCertificates = document.querySelector('.obtainedCertificates');
        
        let serviceNumber = 0
        let satisfiedNumber = 0
        let problemsNumber = 0
        let certificatesNumbers = 0
        

        setInterval(()=>{
            if(serviceNumber <= 480 ){
                serviceNumber = serviceNumber+20
                servicesPerformed.innerHTML = serviceNumber + '+'
            }
            if(satisfiedNumber <= 60){
                satisfiedNumber = satisfiedNumber+3
                satisfiedCustomers.innerHTML = satisfiedNumber
            }
            if(problemsNumber <= 950){
                problemsNumber = problemsNumber+50
                problemsSolved.innerHTML = problemsNumber + '+'
            }
            if(certificatesNumbers <= 44){
                certificatesNumbers = certificatesNumbers+2
                ObtainedCertificates.innerHTML = certificatesNumbers
            }
            
        }, 80)
    }
    
    let observer;
    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains('active')) {
        observer.disconnect();
        runNumbers();
        }
    }
    observer = new MutationObserver(handleMutation);

    const observerTarget = document.querySelector('.pt7');
    observer.observe(observerTarget, { attributes: true });
}
