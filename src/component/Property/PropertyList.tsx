import { Alert, ListItem, Snackbar } from "@mui/material";
import List from "@mui/material/List/List";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import PropertyCard from "./PropertyCard";
import { getProperties } from "../../api/property";
import { Property } from "../../model/property";
import { sharePost } from "../../api/facebook";
import AuthContext from "../../context/AuthContext";

const PropertyList: React.FC = () => {
  const authContext = useContext(AuthContext);

  const {
    isLoading,
    error,
    data: properties,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: () => getProperties(authContext?.token || ""),
  });

  const {
    mutate: sharePostMutation,
    isSuccess,
    isError,
    reset,
  } = useMutation({
    mutationFn: sharePost,
  });

  if (!authContext) {
    return null;
  }

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  const handleOnShare = (property: Property) => {
    sharePostMutation({
      message: `Check out this property: ${property.title}`,
      link: property.listingUrl,
      image: property.images[0],
    });
  };

  const handleSnackbarClose = () => {
    reset();
  };

  return (
    <>
      <List>
        {properties?.map((property) => (
          <ListItem key={property.id}>
            <PropertyCard property={property} onShare={handleOnShare} />
          </ListItem>
        ))}
      </List>
      <Snackbar
        open={isSuccess || isError}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <Alert
          severity={isSuccess ? "success" : "error"}
          variant="filled"
          onClose={handleSnackbarClose}
        >
          {isSuccess
            ? "Property shared successfully"
            : "Failed to share property"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default PropertyList;
