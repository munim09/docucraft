"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    getDocumentsByAuthor,
    getDocumentsByCategroy,
    getDocumentsByTag,
} from "../utils/doc-utils";

const Sidebar = ({ docs }) => {
    const pathName = usePathname();
    const [rootNodes, setRootNodes] = useState([]);

    const [nonRootNodesGrouped, setNonRootNodesGrouped] = useState({});

    // console.log("pathName", pathName);

    useEffect(() => {
        let matchedDocs = docs;
        if (pathName.includes("/tags")) {
            const tag = pathName.split("/")[2];
            matchedDocs = getDocumentsByTag(docs, tag);
        } else if (pathName.includes("/author")) {
            const author = pathName.split("/")[2];
            matchedDocs = getDocumentsByAuthor(
                docs,
                decodeURIComponent(author)
            );
        } else if (pathName.includes("/categories")) {
            const category = pathName.split("/")[2];
            matchedDocs = getDocumentsByCategroy(docs, category);
        }

        const roots = matchedDocs.filter((doc) => !doc.parent);
        console.log({ roots });

        // const nonRoots = Object.groupBy(
        //     docs.filter(
        //         (doc) => doc.parent,
        //         ({ parent }) => parent
        //     )
        // );

        const nonRoots = matchedDocs
            .filter((doc) => doc.parent)
            .reduce((acc, doc) => {
                const key = doc.parent;
                (acc[key] ??= []).push(doc);
                return acc;
            }, {});

        console.log({ nonRoots });

        const nonRootsKeys = Reflect.ownKeys(nonRoots);

        nonRootsKeys.forEach((key) => {
            const foundInRoots = roots.find((root) => root.id === key);
            if (!foundInRoots) {
                const foundInDocs = docs.find((doc) => doc.id === key);
                roots.push(foundInDocs);
            }
        });

        roots.sort((a, b) => {
            if (a.order < b.order) {
                return -1;
            }
            if (a.order > b.order) {
                return 1;
            }
            return 0;
        });

        setRootNodes([...roots]);
        setNonRootNodesGrouped({ ...nonRoots });
    }, [pathName]);

    return (
        <>
            <nav className="lg:block my-10">
                <ul>
                    <div className="relative mt-3 pl-2">
                        <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
                        <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                        <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
                        <ul role="list" className="border-l border-transparent">
                            {rootNodes.map((rootNode) => (
                                <li key={rootNode.id} className="relative">
                                    <Link
                                        aria-current="page"
                                        className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                        href={`/docs/${rootNode.id}`}
                                    >
                                        <span className="truncate">
                                            {rootNode.title}
                                        </span>
                                    </Link>
                                    {nonRootNodesGrouped[rootNode.id] && (
                                        <ul
                                            role="list"
                                            className="border-l border-transparent"
                                        >
                                            {nonRootNodesGrouped[
                                                rootNode.id
                                            ].map((subRoot) => (
                                                <li
                                                    key={subRoot.id}
                                                    className="relative"
                                                >
                                                    <Link
                                                        aria-current="page"
                                                        className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                                        href={`/docs/${rootNode.id}/${subRoot.id}`}
                                                    >
                                                        <span className="truncate">
                                                            {subRoot.title}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </ul>
            </nav>
            {/* <nav className="hidden lg:mt-10 lg:block">
                <ul role="list" className="border-l border-transparent">
                    <li className="relative">
                        <a
                            aria-current="page"
                            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                            href="/docs"
                        >
                            <span className="truncate">Introduction</span>
                        </a>
                        <ul role="list" style="opacity: 1">
                            <li>
                                <a
                                    className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                    href="/docs#guides"
                                >
                                    <span className="truncate">Guides</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                    href="/docs#resources"
                                >
                                    <span className="truncate">Resources</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                                    href="/docs#test"
                                >
                                    <span className="truncate">Test</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav> */}
        </>
    );
};

export default Sidebar;
