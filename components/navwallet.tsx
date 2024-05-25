import { Wallet } from "lucide-react";

interface walletDetails {
  walletPoint: number;
}
const NavWallet = ({ walletPoint }: walletDetails) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <Wallet />
      <h3>{walletPoint ? walletPoint : 110.0}</h3>
    </div>
  );
};

export default NavWallet;
