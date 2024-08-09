import { Label } from "./ui/label";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center sticky top-0 border-b bg-background px-4 h-12 z-10">
      <Label className="text-lg">Mo Chicken Fantasy Football</Label>
      <Label className="text-sm">Est. 2014</Label>
    </div>
  );
};

export default Navbar;
