import Link from "next/link";
import { getDocumentContent } from "../lib/doc";
import Tag from "./Tag";

export default async function ContentDisplay({ id }) {
    const documentContent = await getDocumentContent(id);
    console.log("==============================");
    console.log(documentContent);
    return (
        <article className="prose dark:prose-invert">
            <h1>{documentContent.title}</h1>
            <div>
                <span>Published On: {documentContent.date}</span> by{" "}
                <Link href={`/author/${documentContent.author}`}>
                    {documentContent.author}
                </Link>{" "}
                under the{" "}
                <Link href={`/categories/${documentContent.category}`}>
                    {documentContent.category}
                </Link>{" "}
                category.
            </div>
            <div>
                {documentContent.tags &&
                    documentContent.tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                    ))}
            </div>
            <div
                className="lead"
                dangerouslySetInnerHTML={{
                    __html: documentContent.contentHtml,
                }}
            />
        </article>
    );
}
