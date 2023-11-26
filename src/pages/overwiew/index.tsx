
import { Outlet } from "react-router-dom";
import { Box } from "../../components/box";
import { MainBox } from "../../components/mainBox";

export const Overview = () => {
  return (
    <>
      <div className="boxes">
        <Box title="Current Balance">
          <div className="balance-amount">
            <h2>$241.00</h2>
            <div>12% vs last month</div>
          </div>
        </Box>
        <Box title="Summary">
          <h2>Place for chart</h2>
        </Box>
      </div>
      <MainBox><Outlet/></MainBox>
    </>
  );
};
