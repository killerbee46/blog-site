import { Avatar, Chip, Menu, MenuItem } from "@mui/material";
import React from "react";
import { localUser, logout } from "../utils/localUser";

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const user = localUser()
  return (
    <div>
      <div className="hidden lg:block">
        <div>
        <div onClick={handleClick} className="cursor-pointer">
        <Chip variant="outlined" className="text-white! font-semibold" avatar={<Avatar>{user?.fullName[0]}</Avatar>} label={user?.fullName} />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
      </div>
      </div>
      <div className="flex lg:hidden flex-col gap-3">
        <div className="cursor-pointer" onClick={logout}>Logout</div>
         <Chip variant="outlined" className="text-[#2079b4]! font-semibold" avatar={<Avatar>{user?.fullName[0]}</Avatar>} label={user?.fullName} />
      </div>
    </div>
  )
}

export default UserDropdown