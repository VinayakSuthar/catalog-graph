import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

export default function Navigation({ value, onChange, navLinks }) {
  return (
    <StyledTabs
      value={value}
      onChange={onChange}
      aria-label="disabled tabs example"
      className="mt-[40px]"
    >
      {navLinks.map(({ key, label }) => (
        <StyledTab key={key} label={label} className="normal-case" />
      ))}
    </StyledTabs>
  );
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  borderBottom: "1px solid #EFF1F3",
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: 3,
  },
  "& .MuiTabs-indicatorSpan": {
    // maxWidth: 40,
    width: "100%",
    backgroundColor: "#4B40EE",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    padding: "6px 12px",
    color: "#6F7177",
    minWidth: 60,
    "&.Mui-selected": {
      color: "#000",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);
