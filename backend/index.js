const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT =process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) =>{
    res.json({
        status: 'API is running'
    });
});

app.post('/sort', (req, res) => {
    const {data} = req.body;

    if(!data || typeof data !== 'string'){
        return res.status(400).json({
            error: `Missing or invalid data field. Expected a non-empty string.`
        });
    }

    const sortedCharactersArr = data.split('').sort((a, b) => a.localeCompare(b));

    res.json({
        word: sortedCharactersArr
    });
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});