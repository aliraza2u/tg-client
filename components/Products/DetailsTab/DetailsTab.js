import React, { useState } from "react";
import {  Paper, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    // maxWidth: 1000,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center"
  },
});
const DetailsTab = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleTab = (e, val) => {
    setValue(val);
  };
  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleTab}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Description" />
        <Tab label="Reviews" />
        <Tab label="Product Video" />
      </Tabs>
      <TabDetail value={value} index={0}>
        <p>
          A portable media player (PMP) or digital audio player (DAP) is a
          portable consumer electronics device capable of storing and playing
          digital media such as audio, images, and video files. The data is
          typically stored on a CD, DVD, BD, flash memory, microdrive, or hard
          drive. Most portable media players are equipped with a 3.5 mm
          headphone jack, which users can plug headphones into, or connect to a
          boombox or hifi system. In contrast, analogue portable audio players
          play music from non-digital media that use analogue signal storage,
          such as cassette tapes or vinyl records.
        </p>
      </TabDetail>
      <TabDetail value={value} index={1}>
        <h6>CUSTOMER REVIEWS</h6>
        <p>No reviews yet</p>
      </TabDetail>
      <TabDetail value={value} index={2}>
        No video for this product
      </TabDetail>
    </Paper>
  );
};

export default DetailsTab;

const TabDetail = (props) => {
  const { children, value, index } = props;
  return <div className="p-3">{value === index ? children : null}</div>;
};
