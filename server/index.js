const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Express server is running!');
});


// Yahoo Finance integration
const yahooFinance = require('yahoo-finance2').default;

app.get('/api/stocks', async (req, res) => {
  const symbols = ['CLSK', 'MULF', 'CSX', 'CORZ', 'TEM'];
  try {
    const results = await Promise.all(
      symbols.map(async (symbol) => {
        try {
          const quote = await yahooFinance.quote(symbol);
          return {
            symbol: symbol,
            price: quote.regularMarketPrice,
            change: quote.regularMarketChangePercent,
          };
        } catch (err) {
          return { symbol, price: null, change: null, error: true };
        }
      })
    );
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
