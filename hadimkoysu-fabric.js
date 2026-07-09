const products = [];

function createJuice({ name, flavor, productionDate, expirationDate, batch, barcode }) {
  if (!name || !flavor || !batch || !barcode) {
    throw new Error("name, flavor, batch, and barcode are required");
  }

  const product = {
    id: `juice-${products.length + 1}`,
    name,
    flavor,
    productionDate,
    expirationDate,
    batch,
    barcode,
    location: "receiving",
    events: [],
  };

  product.events.push(`Created ${name} batch ${batch}`);
  products.push(product);
  return product;
}

function updateLocation(productId, location) {
  const product = products.find((item) => item.id === productId);
  if (!product) {
    throw new Error(`Product not found: ${productId}`);
  }

  product.location = location;
  product.events.push(`Moved to ${location}`);
  return product;
}

function queryJuicesByFlavor(flavor) {
  return products.filter((product) => product.flavor.toLowerCase() === flavor.toLowerCase());
}

function runDemo() {
  const apple = createJuice({
    name: "Apple Juice",
    flavor: "apple",
    productionDate: "2026-07-09",
    expirationDate: "2026-10-09",
    batch: "A-1001",
    barcode: "869000000001",
  });

  const orange = createJuice({
    name: "Orange Juice",
    flavor: "orange",
    productionDate: "2026-07-09",
    expirationDate: "2026-10-09",
    batch: "O-2001",
    barcode: "869000000002",
  });

  updateLocation(apple.id, "processing");
  updateLocation(orange.id, "filling");
  updateLocation(apple.id, "storage");

  console.log("Hadimkoy Su Fabric demo");
  console.log(`Products tracked: ${products.length}`);
  console.log(`Apple query results: ${queryJuicesByFlavor("apple").length}`);
  console.table(products.map(({ id, name, flavor, batch, location }) => ({
    id,
    name,
    flavor,
    batch,
    location,
  })));
}

if (require.main === module) {
  runDemo();
}

module.exports = {
  createJuice,
  updateLocation,
  queryJuicesByFlavor,
  runDemo,
};
