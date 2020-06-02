import { makeStyles } from "@material-ui/core/styles";

const commonStyles = {
  childDiv: {
    margin: 0,
    padding: "3px 2px",
  },
  childDivWithActive: {
    justifyContent: "flex-start",
    minHeight: "24px",
    maxHeight: "24px",
    overflow: "hidden",
    margin: "5px",
    "&.active": {
      minHeight: "95%",
      order: "1",
      width: "100%",
      height: "95%",
      flex: "1 1 100%",
    },
  },
  appContent: {
    display: "flex",
    textAlign: "center",
    width: "100%",
    height: "22rem",
    flexWrap: "wrap",
    overflow: "auto",
    padding: "1em 0",
  },
};
export const useStyles = makeStyles((theme) => ({
  appContent: {
    ...commonStyles.appContent,
    flexDirection: "row",
    "&.has-active": {
      justifyContent: "space-between",
      maxHeight: "calc(100% - (24px * 2))",
      "& > div": commonStyles.childDivWithActive,
    },
    "& > div": commonStyles.childDiv,
  },
  appContentStacked: {
    ...commonStyles.appContent,
    flexDirection: "column",
    "&.has-active": {
      justifyContent: "space-between",
      maxHeight: "calc(100% - (24px * 2))",

      "& > div": commonStyles.childDivWithActive,
    },
    "& > div": commonStyles.childDiv,
  },
  sizeMedium: {
    flex: "0 1 50%",
    minHeight: "300px",
  },
  hasActiveSizeMedium: {
    flex: "0 1 30%",
    minWidth: "30%",
    borderRadius: "5px",
    margin: "0 5px",
    marginBottom: "5px",
    fontSize: "1rem",
    backgroundColor: "grey",
  },
  innerContainerStacked: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    fontSize: "1rem",
  },
  innerContainerItemHeader: {
    display: "flex",
    height: "10%",
    backgroundColor: "black",
    alignItems: "center",
    color: "white",
    fontSize: "1rem",
    justifyContent: "space-between",
    outline: "none",
    "& > div": {
      padding: "0 1rem",
    },
  },
  innerContinerHidden: {
    display: "flex",
    padding: "0 5px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainerMaxMinIcon: {
    "&:hover": { cursor: "pointer" },
  },
  innerContainerItemContent: {
    height: "90%",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "flex-start",
    padding: "0.3rem 1rem",
  },
}));
