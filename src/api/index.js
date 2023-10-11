const baseURL = 'http://localhost:8087/';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${baseURL}api/products`, {
      method: 'GET'
    });

    return response;
  } catch (error) {
    throw error;
  }
}


export const fetchProductsByCategory = async () => {
  try {
    const response = await fetch(`${baseURL}api/products-by-categories`, {
      method: 'GET'
    });

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw error;
  }
};