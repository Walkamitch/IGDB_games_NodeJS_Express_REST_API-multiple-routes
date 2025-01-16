const GameMode = require("../models/gamecover");

async function getAllGameModes(req, res) {
  try {
    const { start = 0, limit = 50, gameid } = req.query;
    const gamecover = await gamecovers.getAllGameModes(start, limit, gameid);
    res.status(200).json(gamecovers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch gamecovers." + err });
  }
}

async function getGameCoverById(req, res) {
  try {
    const game_mode = await GameMode.getGameModeById(req.params.id);
    if (game_mode) {
      res.status(200).json(game_mode);
    } else {
      res.status(404).json({ error: "Game Cover not found." });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch game cover." });
  }
}

module.exports = { getAllGameCovers, getGameCoverById };
