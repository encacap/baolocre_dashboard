const setDocumentTitle = (title: string): void => {
    window.document.title = `${title} - ${process.env.REACT_APP_NAME}`;
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const redirectTo = (path: string, includeRedirectParam = false): void => {
    const currentLocation = window.location.href;
    const currentURL = new URL(currentLocation);
    const redirectURL = new URL(path, currentURL.origin);
    if (includeRedirectParam) {
        redirectURL.searchParams.set("redirect", currentURL.pathname);
    }
    window.location.href = redirectURL.href;
};

export { setDocumentTitle, redirectTo };
