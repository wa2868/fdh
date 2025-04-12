// Function to dynamically update navbar brand
function updateNavbarBrand() {
    const navbarBrand = document.querySelector(".navbar-brand");
    navbarBrand.innerHTML = '<span style="color: red;">Fast</span>DramaHD'; // Update brand text with HTML
    navbarBrand.href = "https://www.fastdramahd.com/"; // Update brand link
}

// Function to dynamically update header links
function updateHeaderLinks() {
    const headerLinks = [
        { text: "Home", href: "https://www.fastdramahd.com/" },
        { text: "About", href: "#about" },
        { text: "Docs", href: "#docs" },
        { text: "Terms", href: "#terms" },
    ];

    const headerLinksContainer = document.getElementById("headerLinks");
    headerLinksContainer.innerHTML = headerLinks
        .map(
            (link) => `
            <li class="nav-item">
                <a class="nav-link" href="${link.href}">${link.text}</a>
            </li>
        `
        )
        .join("");
}

// Function to dynamically update footer links
function updateFooterLinks() {
    const footerLinks = [
        { text: "Home", href: "https://www.fastdramahd.com/" },
        { text: "About", href: "#about" },
        { text: "Docs", href: "#docs" },
        { text: "Terms", href: "#terms" },
    ];

    const footerLinksContainer = document.getElementById("footerLinks");
    footerLinksContainer.innerHTML = footerLinks
        .map(
            (link) => `
            <a href="${link.href}">${link.text}</a>
        `
        )
        .join("");
}
// Function to dynamically update the horizontal div content
function updateHorizontalDiv() {
    const dynamicDiv = document.getElementById("dynamicDiv");
    dynamicDiv.innerHTML = `
        <i class="fas fa-heart"></i> <!-- Optional: Change the icon -->
        <span>If Any Watch or Download Link is Not Work Then Report it!</span>
    `;
}

// Call functions to update navbar brand, horizontal div content, header links, and footer links
updateNavbarBrand();
updateHorizontalDiv();
updateHeaderLinks();
updateFooterLinks();

// Function to update the content of a box
function updateBoxContent(boxId, newContent) {
    const box = document.getElementById(boxId);
    if (box) {
        box.innerHTML = newContent;
    }
}

// Example: Update Ads Box
const adsContent = `
    <h3>Advertisement</h3>
    <p>Check out our latest deals! <a href="#">Click here</a>.</p>
`;
updateBoxContent('adsBox', adsContent);

// Example: Update Messages Box
const messagesContent = `
    <h3>Messages/Updates</h3>
    <p>New feature released! Learn more <a href="#">here</a>.</p>
`;
updateBoxContent('messagesBox', messagesContent);

// Example: Update Additional Ads Box
const additionalAdsContent = `
    <h3>More Ads</h3>
    <p>Limited-time offer: 50% off on all products!</p>
`;
updateBoxContent('additionalAdsBox', additionalAdsContent);

// Example: Update Specific Links Box
const specificLinksContent = `
    <h3>Specific Links</h3>
    <ul>
        <li><a href="#">Updated Link 1</a></li>
        <li><a href="#">Updated Link 2</a></li>
        <li><a href="#">Updated Link 3</a></li>
        <li><a href="#">New Link 4</a></li>
    </ul>
`;
updateBoxContent('specificLinksBox', specificLinksContent);

// Function to hide the div
function hideDiv() {
    const watchEpDiv = document.querySelector('.watch-ep');
    watchEpDiv.style.display = 'none'; // Hide the div
}
