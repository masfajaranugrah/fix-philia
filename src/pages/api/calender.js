export default async function handler(req, res) {
    try {
      const response = await fetch(`${process.env.API_URL}/events`, {
        headers: { "Cache-Control": "no-store" }, // Pastikan tidak menyimpan cache

      });
       if (!response.ok) {
        throw new Error("Gagal mengambil data");
      }
      const data = await response.json();
 
      const formattedEvents = data.map((event) => ({
        title: event.title,
        start: event.start,
        end: event.end || event.start,
        location: event.location,
        description: event.description,
        className: event.className,
        extendedProps: {
          description: event.description || "Tidak ada deskripsi",
          url: event.description.includes("http")
            ? event.description.match(/https?:\/\/[^\s]+/)[0]
            : null,
        },
      }));
      res.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate");

      res.status(200).json(formattedEvents);
    } catch (error) {
      res.status(500).json({ message: "Error fetching events", error: error.message });
    }
  }
  