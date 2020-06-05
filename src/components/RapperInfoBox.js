import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function RapperCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <p>
            <b>Origins: </b>
            {props.fields.location_neighborhood
              ? `${props.fields.location_neighborhood}, ${props.fields.location_city}`
              : `${props.fields.location_city}`}
          </p>
        </Typography>
        <Typography variant="h5" component="h2">
          {props.fields.name}
        </Typography>
        {props.fields.bio_yearsactivestart ? (
          <Typography className={classes.pos} color="textSecondary">
            <p>
              <b>Active since: </b>
              {props.fields.bio_yearsactivestart}
            </p>
          </Typography>
        ) : null}
        <Typography variant="body2" component="p">
          <p>
            <b>Bio: </b>
            {props.fields.bio_summary}
          </p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}

const RapperInfoBox = (props) => {

    return (
      <InfoBox
        onCloseClick={props.toggleInfoBox}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <RapperCard {...props} />
      </InfoBox>
    );
}

export default RapperInfoBox;

