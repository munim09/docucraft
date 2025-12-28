import ContentDisplay from "../../../../components/ContentDisplay";

const SubContentPage = ({ params: { subContentId } }) => {
    return (
        <>
            {/* <div>Sub Page: {subContentId}</div> */}
            <ContentDisplay id={subContentId} />
        </>
    );
};

export default SubContentPage;
