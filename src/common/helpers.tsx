const setDocumentTitle = (title: string): void => {
    window.document.title = `${title} - ${process.env.REACT_APP_NAME}`;
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

export { setDocumentTitle };
