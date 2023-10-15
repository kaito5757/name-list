import CommonFooter from "@/components/organisms/CommonFooter/CommonFooter";
import CommonHeader from "@/components/organisms/CommonHeader/CommonHeader";

type CommonLayoutProps = {
  children: React.ReactNode;
};

const CommonLayout = (prop: CommonLayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <CommonHeader />
      <main className="flex-grow p-3">{prop.children}</main>
      <CommonFooter />
    </div>
  );
};

export default CommonLayout;
