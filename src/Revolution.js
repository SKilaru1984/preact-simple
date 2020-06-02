import React, { useState } from "react";
import { useStyles } from "./RevolutionCSS";
import Grid from "@material-ui/core/Grid";
import { CropSquare, Minimize } from "@material-ui/icons";

export default function Revolution(props) {
  const classes = useStyles();
  const [mainContinerStyle, setMainContainerStyle] = useState(
    classes.appContent
  );

  const [hasActive, setHasActive] = useState(false);

  const [gridItems, setGridItems] = useState([
    { id: 1, name: "Grid 1", isHidden: false, isActive: false },
    { id: 2, name: "Grid 2", isHidden: false, isActive: false },
    { id: 3, name: "Grid 3", isHidden: false, isActive: false },
    { id: 4, name: "Grid 4", isHidden: false, isActive: false },
    { id: 5, name: "Grid 5", isHidden: false, isActive: false },
  ]);

  const mainGridRef = React.createRef();
  const changeToStacked = (e) => {
    setMainContainerStyle(
      mainContinerStyle === classes.appContentStacked
        ? classes.appContent
        : classes.appContentStacked
    );
  };

  const maximizeGrid = (id) => {
    const updateGridItems = gridItems.map((gridItem) => {
      if (gridItem.id === id) {
        gridItem.isHidden = false;
        gridItem.isActive = true;
      } else {
        gridItem.isHidden = true;
        gridItem.isActive = false;
      }
      return gridItem;
    });

    setGridItems(updateGridItems);
    setHasActive(true);
  };

  const showAllGrids = () => {
    const updateGridItems = gridItems.map((gridItem) => {
      gridItem.isHidden = false;
      gridItem.isActive = false;

      return gridItem;
    });

    setGridItems(updateGridItems);
    setHasActive(false);
  };

  const maxOrMinButton = (gridItem) => {
    if (!gridItem.isActive) {
      return (
        <CropSquare
          fontSize="small"
          className={classes.innerContainerMaxIcon}
          onClick={() => maximizeGrid(gridItem.id)}
        ></CropSquare>
      );
    }

    return <Minimize onClick={(e) => showAllGrids()}></Minimize>;
  };
  const showOrHideGridItem = (gridItem) => {
    if (!gridItem.isHidden) {
      return (
        <Grid container className={classes.innerContainerStacked}>
          <Grid item className={classes.innerContainerItemHeader}>
            <div>{gridItem.name}</div>
            {maxOrMinButton(gridItem)}
          </Grid>
          <Grid item className={classes.innerContainerItemContent}>
            Content
          </Grid>
        </Grid>
      );
    }

    return (
      <div className={classes.innerContinerHidden}>
        <span>{gridItem.name} </span>
        <CropSquare
          fontSize="small"
          className={classes.innerContainerMaxIcon}
          onClick={() => maximizeGrid(gridItem.id)}
        ></CropSquare>
      </div>
    );
  };
  const setGridItemsHtml = () => {
    const gridItemsHtml = gridItems.map((gridItem) => {
      return (
        <Grid
          item
          className={`${
            hasActive ? classes.hasActiveSizeMedium : classes.sizeMedium
          } ${gridItem.isActive ? "active" : ""}`}
          key={gridItem.id + gridItem.name}
        >
          {showOrHideGridItem(gridItem)}
        </Grid>
      );
    });
    return gridItemsHtml;
  };
  return (
    <React.Fragment>
      <Grid
        container
        className={`${mainContinerStyle} ${hasActive ? "has-active" : ""}`}
        ref={mainGridRef}
      >
        {setGridItemsHtml()}
      </Grid>
    </React.Fragment>
  );
}
