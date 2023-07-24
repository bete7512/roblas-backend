const cloudinary = require('../configuration/cloudinary');

const file_upload = async function (req, res) {
  try {
    const name = req.body.input.name;
    const type = req.body.input.type;
    const base64str = req.body.input.base64str;
    const result = await cloudinary.uploader.upload('data:image/jepg;base64,' + base64str);
    return res.json({
      image_url: result.url
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      message: e
    });
  }
};

exports.file_upload = file_upload;
