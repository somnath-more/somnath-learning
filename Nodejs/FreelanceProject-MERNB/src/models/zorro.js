const mongoose = require('mongoose');

const ZorroSchema = new mongoose.Schema({
    brandName: { type: String, required: true },
    brandIconUrl: { type: String, required: true },
    links: [
        {
            label: String,
            url: String
        },
    ],
});

// Ensure the collection is named 'zorro' and not pluralized
module.exports = mongoose.model('Zorro', ZorroSchema, 'zorro');
// Zorro' (Model Name):
// ZorroSchema (Schema):
// 'zorro' (Explicit Collection Name):