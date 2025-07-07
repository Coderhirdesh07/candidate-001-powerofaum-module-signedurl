function handler(req, res) {
    const { filePath, userId } = req.query;
  
    if (!filePath || !userId) {
      return res.status(400).json({
        success: false,
        message: "Missing filePath or userId",
      });
    }
    const token = Buffer.from(`${userId}-${filePath}-${Date.now()}`).toString("base64");
  
    const expires = Math.floor(Date.now() / 1000) + 120;
  
    const signedUrl = `https://signed.example.com${filePath}?token=${token}&expires=${expires}`;
  
    return res.status(200).json({
      success: true,
      signedUrl,
    });
  }
  
  module.exports = handler;
  