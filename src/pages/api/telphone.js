export default async function handler(req, res) {
    try {
        const response = await fetch(`${process.env.API_URL}/telp`, {
            headers: { "Cache-Control": "no-store" },  
        });

        const data = await response.json();
        res.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data", error });
    }
}
