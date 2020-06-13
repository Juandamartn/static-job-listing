var paramContainer = document.querySelector('.filter-container__params'),
    filterContainer = document.querySelector('.main__filter-container');

/**
 * Open the filter container if it's not displayed and show the tags selected
 * @param {*} filterParam The name value of the tag
 */
function openFilter(filterParam) {
    // Show the filter container
    if (filterContainer.classList.contains('hidden')) {
        filterContainer.classList.toggle('hidden');
        filterContainer.classList.toggle('show');
    }

    let tagExists = false; //Variable for checking if a filter tag exists

    // Prevents the selection of a tag that already exists
    if (paramContainer.childNodes.length == 0) {
        createSpanTag('params__item', filterParam, paramContainer, 2, filterParam);
    } else {
        for (let i = 0; i < paramContainer.childNodes.length; i++) {
            if (paramContainer.children[i].dataset.value == filterParam)
                tagExists = true;
        }

        if (!tagExists)
            createSpanTag('params__item', filterParam, paramContainer, 2, filterParam);
    }

    filterJobs(jobs)
        .then(function (result) {
            mainContainer.innerHTML = '';

            for (let i = 0; i < result.length; i++) {
                createItem(result[i]);
            }
        })
        .catch((err) => console.error('Error: ' + err));
}

/**
 * Applies the selected tags filter to the jobs array
 * @param {*} job The Jobs array
 * @return The list of jobs filtered
 */
async function filterJobs(job) {
    let jobsFiltered = jobs;

    for (let i = 0; i < paramContainer.childNodes.length; i++) {
        console.log(i + 1);

        
    }

    return jobsFiltered;
}

/**
 * Close the filter container
 */
function closeFilter() {
    filterContainer.classList.toggle('animateDisplay');
    filterContainer.classList.toggle('animateClose');

    setTimeout(() => {
        filterContainer.classList.toggle('show');
        filterContainer.classList.toggle('hidden');
        filterContainer.classList.toggle('animateDisplay');
        filterContainer.classList.toggle('animateClose');
    }, 500);

    // Erases the containers inside code and loads all the jobs
    paramContainer.innerHTML = "";
    mainContainer.innerHTML = "";

    fetch("data.json")
        .then((res) => res.json())
        .then((data) => initialize(data))
        .catch((err) => console.log('Error: ' + err));
}

/**
 * Removes a tag from the filter container
 * @param {*} tag Tag element to remove
 */
function deleteTag(tag) {
    let promise = new Promise(function (resolve, reject) {
        paramContainer.removeChild(tag);
    });

    promise.then(paramContainer.childNodes.length == 0 ? closeFilter() : false)
        .catch((error) => console.log(error));
}