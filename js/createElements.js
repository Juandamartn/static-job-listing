/**
 * Creates a div element
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
 * Creates a p element
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
 * Creates a span element
 * @param {*} className Class attribute of the element
 * @param {*} content Text inside the element
 * @param {*} parent Parent element to append
 * @returns The element created
 */
function createSpanTag(className, content, parent, click = 0, filterValue = '') {
    var element = document.createElement('span');
    element.classList = className;
    element.innerHTML = content;

    if (click == 1) {
        element.setAttribute('onclick', 'openFilter(this.dataset.value)');
    } else if (click == 2) {
        element.setAttribute('onclick', 'deleteTag(this)');
    }

    if (filterValue != '') {
        element.dataset.value = filterValue;
    }

    parent.appendChild(element);

    return element;
}

/**
 * Creates a img element
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