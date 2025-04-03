const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();

        if (data.error) {
            throw new Error(data.error);
        }
        return data;

    } catch (error) {
        console.error(error);
    }
}

export {
    index,
}