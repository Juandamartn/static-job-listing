var paramContainer = document.querySelector('.filter-container__params'),
    filterContainer = document.querySelector('.main__filter-container');

function openFilter(filterParam) {
    if (filterContainer.classList.contains('hidden')) {
        filterContainer.classList.toggle('hidden');
        filterContainer.classList.toggle('show');
    }

    createSpanTag('params__item', filterParam, paramContainer, 0, filterParam);

    filterJobs(jobs)
        .then(function (result) {
            mainContainer.innerHTML = '';

            for (let i = 0; i < result.length; i++) {
                createItem(result[i]);
            }
        })
    // .catch((err) => console.log('Error: ' + err));
}

/**
 * Applies the selected tags filter to the jobs array
 * @param {*} job The Jobs array
 * @return The list of jobs filtered
 */
async function filterJobs(job) {
    let jobsFiltered = jobs;

    for (let i = 0; i < paramContainer.children.length; i++) {
        for (let x = 0; x < jobsFiltered.length; x++) {
            switch (paramContainer.children[i].dataset.value) {
                case 'Frontend':
                    if (jobsFiltered[x].role != 'Frontend') {
                        jobsFiltered.splice(x, 1);
                    }
                    break;

                case 'Backend':
                    if (jobsFiltered[x].role != 'Backend') {
                        jobsFiltered.splice(x, 1);
                    }
                    break;

                case 'Fullstack':
                    if (jobsFiltered[x].role != 'Fullstack') {
                        jobsFiltered.splice(x, 1);
                    }
                    break;

                case 'Junior':
                    if (jobsFiltered[x].level != 'Junior') {
                        jobsFiltered.splice(x, 1);
                    }
                    break;

                case 'Midweight':
                    if (jobsFiltered[x].level != 'Midweight') {
                        jobsFiltered.splice(x, 1);
                    }
                    break;

                case 'Senior':
                    if (jobsFiltered[x].level != 'Senior') {
                        jobsFiltered.splice(x, 1);
                    }
                    break;

                case 'Python':
                    for (let y = 0; y < jobsFiltered[x].languages.length; y++) {
                        if (jobsFiltered[x].languages[y] != 'Python') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;

                case 'Ruby':
                    for (let y = 0; y < jobsFiltered[x].languages.length; y++) {
                        if (jobsFiltered[x].languages[y] != 'Ruby') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;

                case 'JavaScript':
                    for (let y = 0; y < jobsFiltered[x].languages.length; y++) {
                        if (jobsFiltered[x].languages[y] != 'JavaScript') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;

                case 'HTML':
                    for (let y = 0; y < jobsFiltered[x].languages.length; y++) {
                        if (jobsFiltered[x].languages[y] != 'HTML') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;

                case 'CSS':
                    for (let y = 0; y < jobsFiltered[x].languages.length; y++) {
                        if (jobsFiltered[x].languages[y] != 'CSS') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;

                case 'React':
                    for (let y = 0; y < jobsFiltered[x].tools.length; y++) {
                        if (jobsFiltered[x].tools[y] != 'React') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;

                case 'Sass':
                    for (let y = 0; y < jobsFiltered[x].tools.length; y++) {
                        if (jobsFiltered[x].tools[y] != 'Sass') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;

                case 'Vue':
                    for (let y = 0; y < jobsFiltered[x].tools.length; y++) {
                        if (jobsFiltered[x].tools[y] != 'Vue') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;

                case 'Django':
                    for (let y = 0; y < jobsFiltered[x].tools.length; y++) {
                        if (jobsFiltered[x].tools[y] != 'Django') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;

                case 'RoR':
                    for (let y = 0; y < jobsFiltered[x].tools.length; y++) {
                        if (jobsFiltered[x].tools[y] != 'RoR') {
                            jobsFiltered.splice(x, 1);
                        }
                    }
                    break;
            }
        }
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