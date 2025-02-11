import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import { apolloClient } from "../saleorClient";

const TEST_QUERY = gql`
  query GetProducts($channel: String!) {  # 🔥 Agregamos la variable "channel"
    products(first: 5, channel: $channel) {
      edges {
        node {
          id
          name
          pricing {
            priceRange {
              start {
                gross {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;

const TestSaleor = () => {
  const [products, setProducts] = useState([]);
  const CHANNEL = "default-channel";  // 🔥 Reemplaza con el nombre de tu canal de Saleor

  useEffect(() => {
    apolloClient
      .query({
        query: TEST_QUERY,
        variables: { channel: CHANNEL },  // 🔥 Ahora pasamos el canal como variable
      })
      .then((response) => {
        console.log("📦 Productos desde Saleor:", response.data.products.edges);
        setProducts(response.data.products.edges);
      })
      .catch((error) => console.error("❌ Error en la consulta:", error));
  }, []);

  return (
    <div>
      <h2>Productos desde Saleor</h2>
      {products.length === 0 ? (
        <p>No hay productos disponibles.</p>
      ) : (
        <ul>
          {products.map(({ node }) => (
            <li key={node.id}>
              <strong>{node.name}</strong> - {node.pricing?.priceRange?.start?.gross.amount}{" "}
              {node.pricing?.priceRange?.start?.gross.currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestSaleor;
