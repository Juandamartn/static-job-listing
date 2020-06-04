let jobs;
var mainContainer = document.querySelector('main');

fetch("../data.json")
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
    var jobContainer = createDivTag(job.id, 'main__job-container', mainContainer);

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
    createSpanTag('tags__item', job.role, tagsContainer);
    createSpanTag('tags__item', job.level, tagsContainer);
    for (let i = 0; i < job.languages.length; i++) {
        createSpanTag('tags__item', job.languages[i], tagsContainer);
    }
    for (let i = 0; i < job.tools.length; i++) {
        createSpanTag('tags__item', job.tools[i], tagsContainer);
    }
}

/**
 * Creates a <div> element
 * @param {*} id Id attribute of the element
 * @param {*} className Class attribute of the element
 * @param {*} parent Parent element to append
 * @returns The element created
 */
function createDivTag(id, className, parent) {
    var container = document.createElement('div');
    container.setAttribute('id', id);
    container.classList = className;
    parent.appendChild(container);

    return container;
}

/**
 * Creates a <p> element
 * @param {*} content Text inside the element
 * @param {*} class Class attribute of the element
 * @param {*} parent Parent element to append
 * @returns The element created
 */
function createPTag(content, className, parent) {
    var element = document.createElement('p');
    element.classList = className;
    element.innerHTML = content;
    parent.appendChild(element);

    return element;
}

/**
 * Creates a <span> element
 * @param {*} className Class attribute of the element
 * @param {*} content Text inside the element
 * @param {*} parent Parent element to append
 * @returns The element created
 */
function createSpanTag(className, content, parent) {
    var element = document.createElement('span');
    element.classList = className;
    element.innerHTML = content;
    parent.appendChild(element);

    return element;
}

/**
 * Creates a <img> element
 * @param {*} src The src value of the element
 * @param {*} alt The alt value of the element
 * @param {*} parent The parent element to append
 * @returns The element created
 */
function createImgTag(src, alt, parent) {
    var element = document.createElement('img');
    element.setAttribute('src', src);
    element.setAttribute('alt', alt);
    parent.appendChild(element);

    return element;
}