import { AddCircle } from "iconsax-react";
import { Button } from "../../../components";
import PageTitle from "../components/PageTitle";

const LocationManagement = () => {
    return (
        <>
            <PageTitle title="Location Management">
                <Button className="" size="sm">
                    <AddCircle size={20} className="mt-px mr-2 font-bold" variant="Bold" />
                    Add Location
                </Button>
            </PageTitle>
        </>
    );
};

export default LocationManagement;
