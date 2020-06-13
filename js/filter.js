var paramContainer = document.querySelector('.filter-container__params'),
    filterContainer = document.querySelector('.main__filter-container');

function openFilter(filterParam) {
    if (filterContainer.classList.contains('hidden')) {
        filterContainer.classList.toggle('hidden');
        filterContainer.classList.toggle('show');
    }

    createSpanTag('params__item', filterParam, paramContainer, 2, filterParam);

    filterJobs(jobs)
        .then(function (result) {
            mainContainer.innerHTML = '';

            for (let i = 0; i < result.length; i++) {
                createItem(result[i]);
            }
        });
    // .catch((err) => console.log('Error: ' + err));
}

/**
 * Applies the selected tags filter to the jobs array
 * @param {*} job The Jobs array
 * @return The list of jobs filtered
 */
async function filterJobs(job) {
    let jobsFiltered = jobs;
    let tagsSelected = document.querySelector('.filter-container__params');

    for (let i = 0; i < tagsSelected.childNodes.length; i++) {

    }

    return jobsFiltered;
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
    mainContainer.innerHTML = "";

    fetch("data.json")
        .then((res) => res.json())
        .then((data) => initialize(data))
        .catch((err) => console.log('Error: ' + err));
}

function deleteTag(tag) {
    let promise = new Promise(function (resolve, reject) {
        paramContainer.removeChild(tag);
    });

    promise.then(paramContainer.childNodes.length == 0 ? closeFilter() : false)
        .catch((error) => console.log(error));
}