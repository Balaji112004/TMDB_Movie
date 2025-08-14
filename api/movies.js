export default async function handler(req, res) {
  const page = req.query.page || 1;
  console.log("Requested Page:", page); // ✅ should log 1, 2, 3...

  try {
const response = await fetch(
  `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`
);


    if (!response.ok) {
      throw new Error(`TMDB error: ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching movies:", err);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
}
