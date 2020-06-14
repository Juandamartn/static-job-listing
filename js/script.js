let jobs;
var mainContainer = document.querySelector('.container');

fetch("data.json")
    .then((res) => res.json())
    .then((data) => initialize(data))
    .catch((err) => console.log('Error: ' + err));

/**
 * Initialize the .json file data and items in the main container
 * @param {*} data The .json file data
 */
function initialize(data) {
    jobs = data;

    for (let i = 0; i < jobs.length; i++) {
        createItem(jobs[i]);
    }
}

/**
 * Creates the container with all job info
 * @param {*} job The specific item in the array
 */
function createItem(job) {
    // Variables to store the collection of languages and tools for each job
    let languages = [];
    let tools = [];

    var jobContainer = createDivTag(job.id, 'main__job-container', mainContainer);

    // Data values for each job
    jobContainer.dataset.role = job.role;
    jobContainer.dataset.level = job.level;

    // Image and Info wrapper
    var wrapper = createDivTag('', 'job-container__wrapper', jobContainer);

    // Image container
    var imgContainer = createDivTag('', 'job-container__image', wrapper);
    createImgTag(job.logo, `${job.company} logo`, imgContainer);

    // Info container
    var infoContainer = createDivTag('', 'job-container__info', wrapper);

    var companyContainer = createDivTag('', 'info__company', infoContainer);
    createPTag(job.company, 'company', companyContainer);
    if (job.new) {
        createSpanTag('company__new', 'new!', companyContainer);
    }
    if (job.featured) {
        createSpanTag('company__featured', 'featured', companyContainer);
    }

    createPTag(job.position, 'position', infoContainer);

    var detailsContainer = createDivTag('', 'info__details', infoContainer);
    createPTag(job.postedAt, '', detailsContainer);
    createPTag('•', '', detailsContainer);
    createPTag(job.contract, '', detailsContainer);
    createPTag('•', '', detailsContainer);
    createPTag(job.location, '', detailsContainer);

    //Tags container
    var tagsContainer = createDivTag('', 'job-container__tags', jobContainer);
    createSpanTag('tags__item', job.role, tagsContainer, 1, job.role, 'role');
    createSpanTag('tags__item', job.level, tagsContainer, 1, job.level, 'level');
    for (let i = 0; i < job.languages.length; i++) {
        createSpanTag('tags__item', job.languages[i], tagsContainer, 1, job.languages[i], 'languages');

        // Data values for languages
        languages.push(job.languages[i]);
        jobContainer.dataset.languages = languages.join();
    }

    if (job.tools.length != 0) {
        for (let i = 0; i < job.tools.length; i++) {
            createSpanTag('tags__item', job.tools[i], tagsContainer, 1, job.tools[i], 'tools');

            // Data values for tools
            tools.push(job.tools[i]);

            jobContainer.dataset.tools = tools.join();
        }
    } else {
        jobContainer.dataset.tools = 'empty';
    }
}