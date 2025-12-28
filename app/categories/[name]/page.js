import ContentDisplay from "../../../components/ContentDisplay";
import { getDocuments } from "../../../lib/doc";
import { getDocumentsByCategroy } from "../../../utils/doc-utils";

const CategoryPage = ({ params: { name } }) => {
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByCategroy(docs, name);

    return (
        <>
            <ContentDisplay id={matchedDocuments[0].id} />
        </>
    );
};

export default CategoryPage;
