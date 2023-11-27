import { Outlet } from "react-router-dom";
import { Box } from "../../components/box";
import { MainBox } from "../../components/mainBox";
import { Button } from "../../components/button";
import { UserContext } from "../../store/userContext";
import {useContext } from "react"

export const Overview = () => {

  const user = useContext(UserContext)
  return (
    <>
      <div className="boxes">
        <Box title="Current Balance">
          <div className="balance-amount">
            <h2 className="amount">{user?.balance}</h2>
            <div className="vs">12% vs last month</div>
            <div className="buttons"
              style={{
                marginTop: "40px",
                justifyContent:"flex-start"
              }}
            >
              <Button theme="dark" label="Quick Invest"/>
              <Button theme="light" label="Show Report"/>
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
