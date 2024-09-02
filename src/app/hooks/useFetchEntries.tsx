import axios from "axios";
import { useState, useEffect } from "react";

type Entries = {
    _id: string;
    title: string;
    content: number;
    tags: [],
    createdAt: string
};

const useFetchEntries = (url: string) => {
    const [entries, setEntries] = useState<Entries[]>([]);
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setEntries(response.data.entries);
            })
            .catch((error) => {
                console.error("Erro ao buscar apontamentos:", error);
            });
    }, []);

    return [entries, setEntries] as const;
};

export default useFetchEntries;
