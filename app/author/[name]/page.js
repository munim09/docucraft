import ContentDisplay from "../../../components/ContentDisplay";
import { getDocuments } from "../../../lib/doc";
import { getDocumentsByAuthor } from "../../../utils/doc-utils";

const AuthorPage = ({ params: { name } }) => {
    const decodedName = decodeURIComponent(name);

    const docs = getDocuments();
    const matchedDocuments = getDocumentsByAuthor(docs, decodedName);

    return (
        <>
            <ContentDisplay id={matchedDocuments[0].id} />
        </>
    );
};

export default AuthorPage;
