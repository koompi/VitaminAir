import Link from 'next/link'
import { Layout  } from 'antd';
import Meta from "./components/layouts/Meta";
import Navbartwo from "./components/layouts/Navbartwo";
import Initiation from "./components/initiations";
import Footer from "./components/footer";

const { Header, Content } = Layout;

export default function about() {
  return (
    <div>
      <Meta />
      <Navbartwo />
      <Initiation />
      <Footer />
    </div>
  );
}
