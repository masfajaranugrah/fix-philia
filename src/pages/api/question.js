export default async function handler(req, res) {
  if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
      const response = await fetch("https://dashboard.philiadventureland.com/api/question", {
          headers: { "Cache-Control": "no-store" }, // Pastikan tidak menyimpan cache
      });
      const data = await response.json();

      res.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate");
      res.status(200).json(data);
  } catch (error) {
      res.status(500).json({ message: "Error fetching questions", error: error.message });
  }
}
