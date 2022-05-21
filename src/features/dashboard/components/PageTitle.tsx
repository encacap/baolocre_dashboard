interface PageTitleProps {
    title: string;
    children?: React.ReactNode;
}

const PageTitle = ({ title, children }: PageTitleProps) => {
    return (
        <div className="flex items-center justify-between h-20">
            <div className="font-semibold">
                <div className="pb-6 pt-7">{title}</div>
                <div className="w-3/5 h-1 bg-gray-100 rounded-t-lg"></div>
            </div>
            {children}
        </div>
    );
};

export default PageTitle;
