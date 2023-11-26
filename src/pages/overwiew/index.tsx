import { Outlet } from "react-router-dom";
import { Box } from "../../components/box";
import { MainBox } from "../../components/mainBox";
import { Button } from "../../components/button";

export const Overview = () => {
  return (
    <>
      <div className="boxes">
        <Box title="Current Balance">
          <div className="balance-amount">
            <h2 className="amount">$241.00</h2>
            <div className="vs">12% vs last month</div>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "8px",
                marginTop: "40px",
              }}
            >
              <Button theme="dark" />
              <Button theme="light" />
            </div>
          </div>
        </Box>
        <Box title="Summary">
          <h2>Place for chart</h2>
        </Box>
      </div>
      <MainBox>
        <Outlet />
      </MainBox>
    </>
  );
};
