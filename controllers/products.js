const getAllProductsStatic = async (req, res) => {
  res.status(200).json({ message: 'products testing route' });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ message: 'products route' });
};

module.exports = { getAllProducts, getAllProductsStatic };
