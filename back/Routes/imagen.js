const express = require("express");
const router = express.Router();
const { getImageById } = require("../Controllers/imageController");

router.get("/imagen/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const imageBuffer = await getImageById(id);

    if (!imageBuffer) {
      return res.status(404).send("Imagen no encontrada");
    }

    res.setHeader("Content-Type", "image/jpeg"); 
    res.send(imageBuffer);
  } catch (error) {
    console.error("Error al obtener la imagen:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});

module.exports = router;
