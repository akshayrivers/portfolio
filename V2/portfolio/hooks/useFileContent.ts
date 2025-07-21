import { useEffect, useState } from "react";

export default function useFileContent(src: string | null) {
    const [content, setContent] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!src) {
            setContent(null);
            return;
        }

        setLoading(true);
        fetch(src)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch file content");
                }
                return res.text();
            })
            .then((text) => setContent(text))
            .catch((err) => {
                console.error("Error fetching content:", err);
                setContent("Error loading content.");
            })
            .finally(() => setLoading(false));
    }, [src]);

    return { content, loading };
}
