import { Property } from "../model/property";

const getProperties = async (token: string): Promise<Property[]> => {
  const header = {
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch("http://localhost:8080/properties", {
    headers: header,
  });
  return response.json();
};

export { getProperties };
