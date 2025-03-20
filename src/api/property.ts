import { Property } from "../model/property"

const getProperties = async (): Promise<Property[]> => {
    const response = await fetch('http://localhost:8080/properties')
    return response.json()
}

export { getProperties }