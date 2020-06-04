var paramContainer = document.querySelector('.filter-container__params'),
    filterContainer = document.querySelector('.main__filter-container');

function openFilter(filterParam) {
    if (filterContainer.classList.contains('hidden')) {
        filterContainer.classList.toggle('hidden');
        filterContainer.classList.toggle('show');
    }

    createSpanTag('params__item', filterParam, paramContainer, 0, filterParam)
        .then(filterJobs(jobs));
}

function filterJobs(job) {
    var jobsFiltered = [];

    for (let x = 0; x < job.length; x++) {
        for (let i = 0; i < paramContainer.children.length; i++) {
            switch (paramContainer.children[i].dataset.value) {
                case 'Frontend':

                    break;

                case 'Backend':

                    break;

                case 'Fullstack':

                    break;

                case 'Junior':

                    break;

                case 'Midweight':

                    break;

                case 'Senior':

                    break;

                case 'Senior':

                    break;

                default:
                    break;
            }
        }
    }
}

function closeFilter() {
    filterContainer.classList.toggle('animateDisplay');
    filterContainer.classList.toggle('animateClose');

    setTimeout(() => {
        filterContainer.classList.toggle('show');
        filterContainer.classList.toggle('hidden');
        filterContainer.classList.toggle('animateDisplay');
        filterContainer.classList.toggle('animateClose');
    }, 500);

    paramContainer.innerHTML = "";
}