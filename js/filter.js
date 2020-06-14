var paramContainer = document.querySelector('.filter-container__params'),
    filterContainer = document.querySelector('.main__filter-container');

/**
 * Open the filter container if it's not displayed and show the tags selected
 * @param {*} filterParam The name value of the tag
 */
function openFilter(filterParam, filterType) {
    // Show the filter container
    if (filterContainer.classList.contains('hidden')) {
        filterContainer.classList.toggle('hidden');
        filterContainer.classList.toggle('show');
    }

    let tagExists = false; //Variable for checking if a filter tag exists

    // Prevents the selection of a tag that already exists
    if (paramContainer.childNodes.length == 0) {
        createSpanTag('params__item', filterParam, paramContainer, 2, filterParam, filterType);
    } else {
        for (let i = 0; i < paramContainer.childNodes.length; i++) {
            if (paramContainer.children[i].dataset.value == filterParam)
                tagExists = true;
        }

        if (!tagExists)
            createSpanTag('params__item', filterParam, paramContainer, 2, filterParam, filterType);
    }

    filterJobs(jobs);
}

/**
 * Applies the selected tags filter to the jobs array
 * @param {*} job The Jobs array
 * @return The list of jobs filtered
 */
function filterJobs(job) {
    for (let i = 0; i < mainContainer.childNodes.length; i++) {
        let filtersSelected = 0;//Variable to count the number of tags selected in the filter container

        if (paramContainer.childNodes == 0) {
            mainContainer.children[i].classList.remove('hidden');
        }

        for (let y = 0; y < paramContainer.childNodes.length; y++) {
            if ((mainContainer.children[i].dataset[paramContainer.children[y].dataset.type].includes(paramContainer.children[y].dataset.value)))
                filtersSelected++
        }

        if (filtersSelected == paramContainer.childNodes.length) {
            mainContainer.children[i].classList.remove('hidden');
        } else {
            mainContainer.children[i].classList.add('hidden');
        }
    }
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
        .then(filterJobs(jobs))
        .catch((error) => console.log(error));
}