import { Outlet } from "react-router-dom";
import { SideNav } from "../layout/SideNav";
import { SearchBar } from "../layout/SearchBar";

export const Root = () => {
  return (
    <div className="wrapper-layout">
      <SideNav />
      <div className="layout">
        <div className="top-menu">
          <SearchBar />
          <div className="right-boxes">
            <div className="box-1">box 1</div>
            <div className="box-2">box 2</div>
          </div>
        </div>

        <div id="detail">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
