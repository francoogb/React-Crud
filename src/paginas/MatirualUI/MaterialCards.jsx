import React from "react";
import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, CardActions, Collapse } from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RecipeCard = ({ title, date, image, description, method }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
      <CardMedia component="img" height="194" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{method}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const MaterialCards = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <RecipeCard
        title="Shrimp and Chorizo Paella"
        date="September 14, 2016"
        image="/public/images/imagen7.jpg"
        description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
        method="Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes. ..."
      />
      <RecipeCard
        title="Chicken Alfredo"
        date="October 21, 2017"
        image="/public/images/jared.jpg"
        description="A classic Italian pasta dish with creamy Alfredo sauce and tender chicken slices."
        method="Cook the pasta according to package instructions. In a separate pan, melt butter, add cream, and cheese. ..."
      />
      <RecipeCard
        title="Vegan Tacos"
        date="January 3, 2022"
        image="/public/images/libros_varios.jpg"
        description="Delicious vegan tacos made with a flavorful mix of beans, avocado, and fresh vegetables."
        method="Heat tortillas, add beans and veggies, and top with fresh salsa and guacamole. ..."
      />
    </div>
  );
};

export default MaterialCards;
