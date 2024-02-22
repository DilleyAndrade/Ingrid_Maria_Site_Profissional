export function initInitialservices() {
    const individualTherapyService = document.querySelector('.individualTherapyService');
    const individualTherapyDescription = document.querySelector('.individualTherapyDescription');

    const lectureService = document.querySelector('.lectureService');
    const lectureDescription = document.querySelector('.lectureDescription');

    const tccApproachService = document.querySelector('.tccApproachService');
    const tccApproachDescription = document.querySelector('.tccApproachDescription');

    individualTherapyService.addEventListener('mouseenter', showServiceTherapy);
    individualTherapyService.addEventListener('mouseleave', showServiceTherapy);

    function showServiceTherapy() {
        individualTherapyDescription.classList.toggle('hide')
    };

    lectureService.addEventListener('mouseenter', showServiceLecture);
    lectureService.addEventListener('mouseleave', showServiceLecture);

    function showServiceLecture() {
        lectureDescription.classList.toggle('hide')
    };

    tccApproachService.addEventListener('mouseenter', showServicetccApproach);
    tccApproachService.addEventListener('mouseleave', showServicetccApproach);

    function showServicetccApproach() {
        tccApproachDescription.classList.toggle('hide')
    };            
}

