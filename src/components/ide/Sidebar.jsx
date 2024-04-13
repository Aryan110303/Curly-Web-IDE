import { Resizable } from 're-resizable';

const Sidebar = () => {
    return (
        <Resizable
  defaultSize={{
    width: "20%",
    height: "100%",
  }}
  minWidth="8vh"
  maxWidth="25%"
  enable={{
    right: true
  }}
>
        <div className="sidebar w-[100%] h-screen bg-black">
        sidebar
    </div>
    </Resizable>
    )
}

export default Sidebar;