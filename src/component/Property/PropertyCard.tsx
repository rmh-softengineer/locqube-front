import Card from "@mui/material/Card"
import { Property } from "../../model/property"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

interface Props {
    property: Property
    onShare: (property: Property) => void
}


const PropertyCard: React.FC<Props> = ({ property, onShare }) => {

  const handleOnShare = () => {
    onShare(property)
  }

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={property.images[0]}
          title={property.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {property.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {property.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOnShare}>Share</Button>
        </CardActions>
      </Card>
    )
}

export default PropertyCard