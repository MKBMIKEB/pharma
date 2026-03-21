import { Truck } from "lucide-react";

const TopBar = () => (
  <div className="green-gradient text-primary-foreground py-2 px-4 text-center text-sm font-medium tracking-wide">
    <div className="container-narrow flex items-center justify-center gap-2">
      <Truck className="h-4 w-4" />
      <span>Envío gratis en pedidos desde $150.000 COP</span>
    </div>
  </div>
);

export default TopBar;
